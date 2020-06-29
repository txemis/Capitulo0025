//importar un CSS ????
import React, { Component } from 'react';
import DonutChart from './Donut';


const Panel = () => {

    var temperature = new DonutChart();
    temperature.setSensorDomain([-6,50]);
    temperature.setSvgDiv('#donut1');
    temperature.createChart('/u00B0'+"C", "temp");

    var tempura;
    var connex2 = require('../resources/source');
    tempura = connex2.PaGraficoDonut.temperatura;

    //temperature.updateChart(data.temp.current);
    temperature.updateChart(tempura);

    return(
        <main>
            <h1>PANEL DE SENSORES</h1>
            <h2>temperatura humedad luz</h2>
            <div className="container">
                <div id="donut1" className="donut flex-child"></div>
                <div id="donut2" className="donut flex-child"></div>
                <div id="donut3" className="donut flex-child"></div>
            </div>
        </main>

    )
}
export default Panel;