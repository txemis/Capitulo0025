//crear con "function-bassed component"
//para actualizar valores necesitamos
//un cambio de estado que actualizará el DOM
//Creo que no actualiza los hijos.
import React, { Component } from 'react';
import Header from './Header';
import ChartContainer from './ChartContainer';

import { Link } from 'react-router-dom';

//inicialmente era función y no clase, creo que se
//podría haber dejado.

export default class Pag4 extends Component {


    render() {
        return (
            <div id="ChatContainer">
                <Header>
                    <Link to="/">
                        <button className="red">
                            Back Pag
                        </button>
                    </Link>
                </Header>
                <ChartContainer />
                {/*<h1>Hola desde Página 4!</h1>*/}
            </div>
        )
    }
}
