//crear con "class-bassed component"
// Pag2 == ChatContainer
import React, { Component } from 'react';
import Header from './Header';
import Visor from './Visor';

export default class Pag2 extends Component
{
    handleLogout = () => {
        this.props.history.push('/pag4');
    };
    render() {
        return (
            <div id="ChatContainer">
                <Header>
                    <button className="red" onClick={this.handleLogout}>
                        Next Pag
                    </button>
                </Header>
                {/*<h1>Hola desde Página 2!</h1>*/}
                <Visor>
                    <div class="wrapper">
                        <div id="notSupported" > Sorry, Web Serial is not supported on this device, make sure you're running Chrome 78 or
                            later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags</div>
                        <div>
                        </div>
                    </div>
                   
                </Visor>
            </div>
        );
    }
}