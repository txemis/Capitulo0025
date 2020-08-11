import React, { Component } from 'react'
//import styled from 'styled-components'
import { select } from 'd3-selection'
import { scaleOrdinal } from 'd3-scale'
import { schemePaired } from 'd3-scale-chromatic'
//import { pie } from 'd3-shape'
import { arc } from 'd3'

export default class Gauge extends Component {
    constructor() {
        super()
        const gaugeProps = {
            tau: Math.PI,
            radius: 80,
            padding: 30,
            //amount: this.props.value,
            amount: 75,
            total: 100
        };
        gaugeProps.boxSize = (gaugeProps.radius + gaugeProps.padding) * 2;
        gaugeProps.ratio = gaugeProps.amount / gaugeProps.total;
    }
    
    componentDidMount() {
        const amount = 75,
              total = 100,
              tau = Math.PI,
              radius = 80,
              padding = 30,
              boxSize = (radius + padding) * 2,
              ratio = amount / total;

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

        const value = this.props; //para cuando le pase y no 33 fijo

        this.renderSVG(radius, boxSize, tau, ratio);
        this.renderText(amount, total);
    }

    renderSVG(radius, boxSize, tau, ratio) {

        // Transition function
        const arcTween = function (newAngle) {
        return function (d) {
            const interpolate = d3.interpolate(d.endAngle, newAngle);

            return function (t) {
            d.endAngle = interpolate(t);

            return arc(d);
            };
        };
        };


        // Arc function
        const arc = d3
            .arc()
            .innerRadius(radius)
            .outerRadius(radius - 10)
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
            .datum({ endAngle: 0 })
            .style("fill", "#00a68f")
            .attr("transform", "rotate(-90)") //mi giro
            .transition()
            .duration(1000)
            .delay(1000)
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
            .text(`${amount}GB`);

        totalText
            .style("opacity", 0)
            .transition()
            .duration(1000)
            .delay(1700)
            .style("opacity", 1)
            .text(`/${total}GB`);
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
