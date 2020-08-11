import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { arc } from 'd3-shape'
import { select } from 'd3-selection'

export default class Donut extends Component {
    constructor(props){
        super(props)
        this.createDonut = this.createDonut.bind(this)
        const margin = {top: 10, right: 10, bottom: 10, left: 10}
        const width = 240 - margin.left - margin.right
        const height = 200

    }
    componentDidMount(){
        this.createDonut()
    }
    componentDidUpdate(){
        this.createDonut()
    }

    createDonut(){
        var pi = Math.PI
        const node = this.node
        const sensorText = this.props.text
        //const margin = {top: 10, right: 10, bottom: 10, left: 10}
        //const width = 240 - margin.left - margin.right
        //const height = 200
        const sensorScale = scaleLinear().range([0, 180])
        const arc = arc()
            .innerRadius(70)
            .outerRadius(100)
            .startAngle(0)

            
        //Primero evito los textos por simplicidad

        select(node)
            .selectAll('path')
            .data(this.props.data)
            .enter()
            .append('path')

        select(node)
            .selectAll('path')
            .data(this.props.data)
            .exit()
            .remove()

        //background
        select(node)
            .selectAll('path')
            .datum({endAngle: pi}) 
            .style("fill", "#ddd")
            .attr("d", arc)
            .attr("transform", "rotate(-90)")
/*
        //foreground
        select(node)
            .selectAll('path')
            .datum({endAngle: 0.5 * pi})
            .style("fill", "#FE8402")
            .attr("d", arc)
            .attr("transform", "rotate(-90)")
*/
    }
    render(){
        return <svg
                    ref={node => this.node = node}
                    width={500}
                    height={500}>
                </svg>
    }
}
//export default Donut

                //width={width + margin.left + margin.right}
                //height={height + margin.top + margin.bottom}
