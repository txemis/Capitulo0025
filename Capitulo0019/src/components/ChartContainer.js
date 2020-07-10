import React, { Component } from 'react';
import {PM}  from 'react-environment-chart';
import { conexion } from '../resources/source1';



//var misDatos = conexion().temperatura();
//console.log('temperatura recibida:', misDatos);

    //var abrirPuertoDeNuevo = true;
    //conexion(abrirPuertoDeNuevo)


export default class ChartContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: [] 
        }
        //var abrirPuerto = this.abrirPuerto
        this.abrirPuerto = true;

        this.MisValores = {};

        setInterval(() => {
            console.log('Hola desde Interval!!')
        },3000)

        setInterval(() => {
            this.MisValores.valores = document.getElementById("log").textContent;
            console.log('valores=', this.MisValores.valores)
            //console.log('primer carácter =',this.MisValores.valores[Math.floor(Math.random() * 9)])
            //console.log('primer carácter =',this.MisValores.valores[9*Math.random()])
            //var valores = document.getElementById("log").textContent;
            //console.log('valores=',valores)
            //console.log('primer carácter =',valores[0])
        },3000)
    

    //traerDatos()


    };

/*
    MisValores = {};
    traerDatos = function () {
                setInterval(() => {
                    MisValores.valores = document.getElementById("log").textContent;
                    console.log('valores=',MisValores.valores)
                    console.log('primer carácter =',MisValores.valores[0])
                },3000)
            }

    traerDatos()

*/


    componentDidMount() {
                setInterval(() => {
                //const sensorData = MisValores.valores[0];
                const sensorData = this.MisValores.valores[Math.floor(Math.random() * 15)];
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
                <div>
                    <button className="red" id="connect" onClick={() => conexion(this.abrirPuerto)}>Connect</button>
                </div>
                <div>
                    <div id="log" style={{display: "none"}}></div>
                    {/*<div id="muestra" style={{color: "red"}}>{(MisValores && MisValores.valores && MisValores.valores.length > 0) ? MisValores.valores[0] : <div>None</div>}</div> */}
                    {/*<div id="muestra2" style={{display: "none"}}></div> */}
                </div>
            </div>
        )
    }
}