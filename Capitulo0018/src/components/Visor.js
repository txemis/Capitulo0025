//crear con "function-bassed component"
import React, { Component } from 'react';
//require('../resources/source.js');
//import Source from '../resources/source'; //funciona antes cuando instancias clase
import { conexion } from '../resources/source1';
    

const Visor = () => {


    var aviso = "Sorry, Web Serial is not supported on this device, make sure you're running Chrome 78 or later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags";

    if ( 'serial' in navigator ) {
    let Serie = true;
    console.log('Si soporta puerto serie');
    var aviso = '';
    }

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
                    <button className="red" id="connect" onClick={conexion()}>Connect</button>
                    {/*<button className="red" id="connect" onClick="handleConnect()">Connect</button>*/}
                    {/*<button className="red" id="connect" onClick="handleConnect()">Connect</button>*/}
                    {/*<button className="red" id="connect" onClick={this.handleConnect}>Connect</button>*/} {/*Si fuera un componente Class*/}
                </div>
                <div id="log"></div>
                <div>
                    {/*<input id="input" type="text" onKeyPress="handle(event)" disabled />*/}
                    {/*<button className="red" id="sendButton" onClick="send()" disabled>Send</button>*/}
                </div>
            </div>
    );

};

export default Visor;