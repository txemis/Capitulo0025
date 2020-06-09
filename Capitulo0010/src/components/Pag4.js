//crear con "function-bassed component"
import React, { Component } from 'react';
import Header from './Header';

import { Link } from 'react-router-dom';


/*
handleLogout = () => {
    this.props.history.push('/');
}
*/

const Pag4 = () => {
    return (
            <div id="ChatContainer">
                <Header>
                    {/*
                    <button className="red" onClick={this.handleLogout}>
                        Pag anterior
                    </button>
                    */}
                    <Link to="/">
                        <button className="red">
                            Back Pag
                        </button>
                    </Link>
                </Header>
                <h1>Hola desde Página 4!</h1>
            </div>
        );

};

export default Pag4;