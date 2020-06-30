import React, { Component } from 'react';
import {PM}  from 'react-environment-chart';
//import ChartComponent from './ChartComponent';


var connex = require("../resources/source"); //Un array de funciones ????
var misDatos = connex.losDatos();
//connex.hola();
console.log('connex:', connex);
console.log('misDatos=', misDatos);

// A function that returns a random number from 0 to 280
const randomNum     = () => Math.floor(Math.random() * 280);

/*setInterval(() => {
    const randomNum  = () => Math.floor(Math.random() * 280);
}, 3000);
*/
/*
var azar

setInterval(() => {
    const azar = randomNum();
}, 3000);
*/


export default class ChartContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            chartData: [] 
        }
    }

    componentDidMount() {
                setInterval(() => {
                //const sensorData = randomNum();
                const sensorData = misDatos;
                //const sensorData = connex.conexion();
                this.setState({ chartData: sensorData });
                console.log('sensorData=', sensorData);
                },1000);
            }
    

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
/*
        const miestilo = {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",            
        }
*/
        const miestilo = {
            display: "flex",
            slignItems: "center",
            justifyContent: "center",
        }

        return (
            <div>
                <div style={miestilo}>
                    {/*<h1>Hola desde ChartContainer!!</h1>
                    //<PM value={80} />*/}
                    <PM style={miestilo} value={this.state.chartData} />
                    {/*<p style={{"text-align": "center"}}>{this.state.chartData}/280</p>*/}
                    {/*<p>{this.state.chartData}/280</p>*/}
                    {/*<p style={{textAlign: "center"}}>{this.state.chartData}/280</p>*/}
                    {/*</PM>/*<ChartComponent chartData={chartData} />*/}
                    {/*<p style={{textAlign: "center"}}>{this.state.chartData}/280</p>*/}
                </div>
                <p style={{textAlign: "center"}}>{this.state.chartData}/280</p>
            </div>
        )
    }
}