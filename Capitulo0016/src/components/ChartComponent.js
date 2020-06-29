import React, { Component } from 'react';
import {PM}  from 'react-environment-chart';


export class ChartComponent extends Component {

    constructor(props){
        super(props)
        this.state = { chart : null }
    }

    chart = React.createRef();

    componentDidMount(){
        // pass chartData to Chart below as this.props.chartData
        let theChart = new Chart(...)
        // set chart to state
        this.setState({ chart: theChart })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // update chart according to prop change
        this.state.chart.data.datasets.forEach((dataset) => {
            dataset.data.push(nextProps.chartData);
        });
        this.state.chart.update();
    }

    render(){
        return (
            <canvas id="myChart" ref={this.chart} />
                {/*
                    <PM value={this.state.valor} />
                    <button className="red" onClick={() => this.randomizeData()}>
                    Randomize Data
                    </button>
                */}
        );
  }

}