//crear con "function-bassed component"
import React, { Component } from 'react';
//require('../resources/source.js');
//import Source from '../resources/source'; //funciona antes cuando instancias clase

/*
handleLogout = () => {
    this.props.history.push('/');
}
*/

/*
handleConnect() {
    navigator.serial.requestPort()
    .then((d) => {
        d.open({ baudrate: 9600});
    })
    // - Wait for the port to open.
    //await port.open({ baudrate: 115200 });
    //await port.open({ baudrate: 9600 });
    console.log('Open');
};
*/

/*
async function connect() {
    port = await navigator.serial.requestPort();
    // - Wait for the port to open.
    //await port.open({ baudrate: 115200 });
    await port.open({ baudrate: 9600 });
    console.log('Open');
}
*/

/*
handleConnect() {
        console.log('Hola');
    };
    
*/

    

const Visor = () => {

    /*
    handleConnect() {
        console.log('Hola');
    };
    */

    /*
    handleConnect()  {
        navigator.serial.requestPort()
        .then((d) => {
            d.open({ baudrate: 9600});
        })
        // - Wait for the port to open.
        //await port.open({ baudrate: 115200 });
        //await port.open({ baudrate: 9600 });
        console.log('Open');
    };
    */

    /*
    function connect(){
        console.log('Hola!');
    };
    */

    var aviso = "Sorry, Web Serial is not supported on this device, make sure you're running Chrome 78 or later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags";

    if ( 'serial' in navigator ) {
    //const notSupported = document.getElementById('notSupported');
    //console.log('No soportado',notSupported);
    //notSupported.classList.add('hidden');
    //notSupported.style.visibility(hidden);
    //notSupported.style('visibility', 'hidden');
    //notSupported.style="display:none";
    //notSupported.style="visibility:hidden";
    let Serie = true;
    console.log('Si soporta puerto serie');
    var aviso = '';
    }
//const log = document.getElementById("log")



    var connex = require('../resources/source');
    //connex.hola();


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
                    <button className="red" id="connect" onClick={connex.conexion}>Connect</button>
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