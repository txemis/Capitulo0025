//crear con "function-bassed component" :descarto -> no anido funciones en funciones ???
//crear con "class-bassed component" :
import React, { Component } from 'react';
require('../resources/source.js');
//import Source from '../resources/source'; //funciona antes cuando instancias clase


    

export default class Visor extends Component
{    

   /*
    handleConnect = () => {
        navigator.serial.requestPort()
        .then((port) => {
            console.log('Open', $port);
            port.open({ baudrate: 9600});
            console.log('Open', $port);

            let decoder = new TextDecoderStream();
            inputDone = port.readable.pipeTo(decoder.writable);
            inputStream = decoder.readable;

        });
        // - Wait for the port to open.
        //await port.open({ baudrate: 115200 });
        //await port.open({ baudrate: 9600 });



        //let decoder = new TextDecoderStream();
        //inputDone = port.readable.pipeTo(decoder.writable);
        //inputStream = decoder.readable;

        //reader = inputStream.getReader();
        //readLoop();
        


    };
*/
    var mi_source = require('../resources/source');
    connect(){
        console.log('Hola')
    }

    render () {
        return (
                <div className="wrapper">
                    <div id="notSupported">Sorry, Web Serial is not supported on this device, make sure you're running Chrome 78 or
                        later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags</div>
                    <div>
                        <button className="red" id="connect" onClick={this.connect()}>Connect</button>
                        {/*<button className="red" id="connect" onClick="handleConnect()">Connect</button>*/}
                        {/*<button className="red" id="connect" onClick={this.handleConnect}>Connect</button>*/}
                        {/*<button className="red" id="connect" onClick={this.handleConnect}>Connect</button>*/} {/*Si fuera un componente Class*/}
                    </div>
                    <div id="log"></div>
                    <div>
                        {/*<input id="input" type="text" onKeyPress="handle(event)" disabled />*/}
                        {/*<button className="red" id="sendButton" onClick="send()" disabled>Send</button>*/}
                    </div>
                    <script src="../resources/source.js"></script>
                </div>
        );
    }

};
