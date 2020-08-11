//crear con "class-bassed component"
// Pag2 == ChatContainer
import React, { Component } from 'react';
import Header from './Header';

export default class Pag2 extends Component
{
    handleLogout = () => {
        this.props.history.push('/');
    };
    render() {
        return (
            <div id="ChatContainer">
                <Header>
                    <button className="red" onClick={this.handleLogout}>
                        Pag anterior
                    </button>
                </Header>
                <h1>Hola desde Página 3!</h1>
            </div>
        );
    }
}