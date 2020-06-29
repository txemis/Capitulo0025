//crear con "class-bassed component"
// Pag2 == ChatContainer
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default class Pag2 extends Component
{
/*    handleLogout = () => {
        this.props.history.push('/');
    };
*/    
    render() {
        return (
            <div id="ChatContainer">
                <Header>
                    {/*<button className="red" onClick={this.handleLogout}>
                         Pag anterior
                    </button>*/}
                    <Link to="/">
                        <button className="red">
                            Back Pag
                        </button>
                    </Link>
                </Header>
                <h1>Hola desde Página 3!</h1>
            </div>
        );
    }
}