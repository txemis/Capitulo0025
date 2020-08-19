import React, { Component } from 'react'
//import styled from 'styled-components'
import { select } from 'd3-selection'
import { scaleOrdinal } from 'd3-scale'
import { schemePaired } from 'd3-scale-chromatic'
//import { pie } from 'd3-shape'
import { arc } from 'd3'
//import styled from 'styled-components'  //Para react >= 16.3, yo: "15.6.1"
import "./styles.css";

/*
const textAmount = styled.div`
    opacity: 0;
    font-size: 30px;
    font-weight: 300;
` */


export default class Gauge extends Component {
    constructor(props) {
        super(props)
        const gaugeProps = {
            tau: Math.PI,
            radius: 80,
            padding: 30,
            instantAngle: Math.PI/3,
            //amount: 75,
            amount : this.props.value,
            total: 45
        };
        //var Pila = [];

        //const amount = this.props.value;
        console.log('amount1=', gaugeProps.amount);

        gaugeProps.boxSize = (gaugeProps.radius + gaugeProps.padding) * 2;
        gaugeProps.ratio = gaugeProps.amount / gaugeProps.total;
    }

    //componentDidMount() {
    componentDidUpdate(prevProps) {    
    //UNSAFE_componentWillReceiveProps(newProps) {
        const amount = this.props.value;
        console.log('amount2=', amount);
        //const amount = newProps.value,

        //var Pila = null;

        const instantAngle = prevProps.value;

        const total = 45,
              //amount = 75,
              tau = Math.PI,
              radius = 80,
              padding = 30,
              //instantAngle = Math.PI/3, //mi valor inicial
              boxSize = (radius + padding) * 2,
              ratio = amount / total;

        //Pila[1] = Pila[0];
        //var instantAngle = Pila[1] * Math.PI/180;
        //Pila[0] = amount;
        console.log("La Pila=", amount, instantAngle);

        /*const {
            tau,
            radius,
            padding,
            amount = 75,
            total,
            boxSize,
            ratio
        } = this.props; //no tiene sentido, sólo paso "value" ????
        */

        //const value = this.props.value; //para cuando le pase y no 33 fijo

        this.renderSVG(radius, boxSize, tau, instantAngle, ratio);
        this.renderText(amount, total);
    }

    renderSVG(radius, boxSize, tau, instantAngle, ratio) {

        // Transition function
        const arcTween = function (newAngle) {
        return function (d) {
            const interpolate = d3.interpolate(d.endAngle, newAngle);
            
            
            console.log("endAngle=", d.endAngle);

            return function (t) {
            d.endAngle = interpolate(t);
            //instantAngle = endAngle;
            //console.log("endAngle=", endAngle);

            return arc(d);
            };
        };
        };


        // Arc function
        const arc = d3
            .arc()
            .innerRadius(radius)
            .outerRadius(radius - 30)
            .startAngle(0);

        //Initial SVG render
        this.svg = d3
            .select(this.refs.container)
            .attr("width", boxSize)
            .attr("height", boxSize)
            .append("g")
            .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);
       
        //Background Arc
        this.svg
            .append("path")
            .datum({ endAngle: tau })
            .style("fill", "#dfe3e6")
            .attr("transform", "rotate(-90)") //mi giro
            .attr("d", arc);

        //Foreground Arc
        this.svg
            .append("path")
            //.datum({ endAngle: 0 })
            //.datum({ endAngle: Math.PI / 2 })
            .datum({ endAngle: instantAngle })
            .style("fill", "#00a68f")
            .attr("transform", "rotate(-90)") //mi giro
            .transition()
            .duration(1000)
            //.delay(1000)
            .delay(0)
            .attrTween("d", arcTween(ratio * tau));

    }

    renderText(amount, total) {
        const amountText = d3.select(".amount");
        const totalText = d3.select(".total");
        amountText
            .style("opacity", 0)
            .transition()
            .duration(1000)
            .delay(1500)
            .style("opacity", 1)
            .text(`${amount}°C`);

        totalText
            .style("opacity", 0)
            .transition()
            .duration(1000)
            .delay(1700)
            .style("opacity", 1)
            .text(`/${total}°C`);
    }

    render() {
        return (
            <div className="bx">
                <svg ref="container"></svg>
                <div className="text">
                    <p className="amount"></p>
                    <p className="total"></p>
                </div>
            </div>
        )
    }
}
