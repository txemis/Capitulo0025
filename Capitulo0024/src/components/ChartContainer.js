import React, { Component } from 'react';
//import ReactEnvironmentChart  from 'react-environment-chart';
//import { Temperature }  from 'react-environment-chart';
//import { Humidity }  from 'react-environment-chart';
//import { Tvoc }  from 'react-environment-chart';
//import { Electricity }  from 'react-environment-chart';
//import { PM }  from 'react-environment-chart';
//import { Intensity }  from 'react-environment-chart';
import { conexion } from '../resources/source1';
//import { Donut } from './Donut';
//import { DonutChart } from './DonutChart';
import  Gauge  from './Gauge';




//var misDatos = conexion().temperatura();
//console.log('temperatura recibida:', misDatos);

    //var abrirPuertoDeNuevo = true;
    //conexion(abrirPuertoDeNuevo)


export default class ChartContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartDataTemp: [],
            chartDataHumi: [],
            chartDataBatt: [] 
        }
        //var abrirPuerto = this.abrirPuerto
        this.abrirPuerto = true;

        this.MisValores = {};
        this.MiTemperatura = {};
        this.MiHumedad = {};
        this.MiBateria = {};

        setInterval(() => {
            console.log('Hola desde Interval!!')
        },3000)

        setInterval(() => {
            //var dataArray = [];
            //this.MisValores.valores = document.getElementById("log").textContent;
            this.MisValores.valores = document.getElementById("muestras").textContent;
            //console.log('valores=', this.MisValores.valores)
            //console.log('primer carácter =',this.MisValores.valores[Math.floor(Math.random() * 9)])
            //console.log('primer carácter =',this.MisValores.valores[9*Math.random()])
            //var valores = document.getElementById("log").textContent;
            //console.log('valores=',valores)
            //console.log('primer carácter =',valores[0])

            this.MisValores.valores = this.MisValores.valores.replace(/(\r\n|\n|\r)/gm,"");
            var dataArray = this.MisValores.valores.split(',');   //Ojo hay un problema q junta la última cifra de una cadena con la primera
            dataArray = dataArray.filter(function(value) {
            return value !== "";
            });

            console.log('valores=', this.MisValores.valores);
            console.log('vector=', dataArray);

            if (dataArray.length =3 ) {
                //this.MiTemperatura.temperatura = dataArray[0]; //filtro los mayores de 45
                this.MiHumedad.humedad = dataArray[1];
                this.MiBateria.bateria = dataArray[2];
                dataArray[0] > 45 ? this.MiTemperatura.temperatura = 0 : this.MiTemperatura.temperatura = dataArray[0];
            }

            console.log('mi_temperatura=', this.MiTemperatura.temperatura);


        },6000)
    

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
                //const sensorData = this.MisValores.valores[Math.floor(Math.random() * 6)];
                const sensorDataTemp = this.MiTemperatura.temperatura;
                const sensorDataHumi = this.MiHumedad.humedad;
                const sensorDataBatt = this.MiBateria.bateria;

                this.setState({ chartDataTemp: sensorDataTemp, chartDataHumi: sensorDataHumi, chartDataBatt: sensorDataBatt });
                console.log('sensorDataTemp=', sensorDataTemp);
                },5000);
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

        //const Misdatos = [ Logro=100, Madrid=200, Paris=300, Roma=400 ]

        const miestilo = {
            display: "flex",
            slignItems: "center",
            justifyContent: "center",
        }
        return (
            <div>
                {/*<div>
                    <Temperature value={this.state.chartData}/>
                </div>*/}
                <div style={miestilo}>
                    {/*<h1>Hola desde ChartContainer!!</h1>
                    //<PM value={80} />*/}

                    <Gauge value={this.state.chartDataTemp}/>
                    {/*<Gauge value={75} />*/}

                    
                    {/*<Temperature height="225" value={this.state.chartDataTemp/2}/>*/}
                    {/*<Electricity height="175" value={this.state.chartDataHumi}/>*/}
                    {/*<Electricity  value={this.state.chartDataTemp}/>*/}
                    {/*<Tvoc height="175" value={this.state.chartDataBatt/100}/>*/}
                
                    {/*<Donut data={30} text="Hola" />*/}

                    {/*<DonutChart data={this.state.data} />*/}
                    {/*<DonutChart data={Misdatos} />*/}

                    {/*<Humidity value={this.state.chartData}/>*/}
                    {/*<PM style={miestilo} height="125" value={this.state.chartData}/>*/}
                    {/*<Intensity height="125" rotate={this.state.chartData}/>*/}

                    {/*<p style={{"text-align": "center"}}>{this.state.chartData}/280</p>*/}
                    {/*<p>{this.state.chartData}/280</p>*/}
                    {/*<p style={{textAlign: "center"}}>{this.state.chartData}/280</p>*/}
                    {/*</PM>/*<ChartComponent chartData={chartData} />*/}
                    {/*<p style={{textAlign: "center"}}>{this.state.chartData}/280</p>*/}
                {/*</div>
                <p style={{textAlign: "center"}}>{this.state.chartData}/280</p>
                <div>*/}
                    {/*<button className="red" id="connect" onClick={() => conexion(this.abrirPuerto)}>Connect</button>*/}
                </div>
                <div>
                    <button className="red" id="connect" onClick={() => conexion(this.abrirPuerto)}>Connect</button>
                </div>
                <div>
                    <div id="log" style={{display: "none"}}></div>
                    {/*<div id="muestra" style={{color: "red"}}>{(MisValores && MisValores.valores && MisValores.valores.length > 0) ? MisValores.valores[0] : <div>None</div>}</div> */}
                    <div id="muestras" style={{display: "none"}}></div>
                </div>
            </div>
        )
    }
}