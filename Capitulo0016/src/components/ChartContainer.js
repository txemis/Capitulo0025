import React, { Component } from 'react';
import {PM}  from 'react-environment-chart';
//import ChartComponent from './ChartComponent';

// A function that returns a random number from 0 to 280
const randomNum     = () => Math.floor(Math.random() * 280);


export class ChartContainer extends Component {

/*
    constructor(props) {
        super(props);
        this.state = {
            chartData: []
        }
    }

        componentDidMount() {
            const sensorData = randomNum;
            this.setState({ chartData: sensorData });
            console.log('sensorData=', sensorData);
        }
*/    

/*
    componentDidMount() {
        fetch(
            "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD"
        )
            .then(response => {
            return response.json();
            })
            .then(myJson => {
            const bitcoinPrice = myJson.BTC.USD;
            this.setState({ chartData: bitcoinPrice });
            console.log(JSON.stringify(myJson));
            });
    }
*/

    render() {
        //const { chartData } = this.state;
        return (
                <h1>Hola desde ChartContainer!!</h1>
        )
    }
}