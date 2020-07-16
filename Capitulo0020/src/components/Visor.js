//crear con "function-bassed component"
import React, { Component } from 'react';
//require('../resources/source.js');
//import Source from '../resources/source'; //funciona antes cuando instancias clase
import { conexion } from '../resources/source1';
//require('../resources/valoresDelDom');    

const Visor = () => {

/*
    var MisValores = {};
    var traerDatos = function () {
                setInterval(() => {
                    MisValores.valores = document.getElementById("log").textContent;
                    //valores = valores.height;
                    //var datos = valores.getAttribute("textContent");
                    console.log('valores=',MisValores.valores)
                    console.log('primer carácter =',MisValores.valores[0])
                    //console.log('datos=',datos)
                },3000)
            }

    traerDatos()
    //console.log('nuevos valores=', valores);
*/



    var aviso = "Sorry, Web Serial is not supported on this device, make sure you're running Chrome 78 or later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags";

    if ( 'serial' in navigator ) {
    let Serie = true;
    console.log('Si soporta puerto serie');
    var aviso = '';
    }

    var abrirPuerto = true;

    //var valores = document.getElementById("log");
    //console.log('valores=', valores);

    //var connex = require('../resources/source');

    return (
            <div className="wrapper">
                {/*<div id="notSupported" >Sorry, Web Serial is not supported on this device, make sure you're running Chrome 78 or
                    later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags</div>
                */}
                    {/*
                    <div>
                    {connex.check()}
                    </div>
                    */}                    
                    <div id="notSupported">
                    <h1>{aviso}</h1>
                    </div>                  
                <div>
                    {/*<button className="red" id="connect" onClick={conexion}>Connect</button>*/}
                    {/*<button className="red" id="connect" onClick={conexion(abrirPuerto)}>Connect</button>*/}
                    <button className="red" id="connect" onClick={() => conexion(abrirPuerto)}>Connect</button>
                </div>
                <div id="log"></div>
                {/*<div id="muestra" style={{color: "red"}}>{(MisValores && MisValores.valores && MisValores.valores.length > 0) ? MisValores.valores[0] : <div>None</div>}</div>*/}
                <div id="muestras" style={{display: "none"}}></div>
                <div>
                    {/*<input id="input" type="text" onKeyPress="handle(event)" disabled />*/}
                    {/*<button className="red" id="sendButton" onClick="send()" disabled>Send</button>*/}
                </div>
            </div>
    );

};

export default Visor;