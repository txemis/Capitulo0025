import React, { Component } from 'react';
import Header from './Header';

class Container1 extends Component {
    state = { email: '', password: "" };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };


    render() {
        //return <h1>Hello from Container1</h1>
        return (
            <div id="LoginContainer" className="inner-container">
                <Header/>
                <form onSubmit= {this.handleSubmit} >
                    <p>Rellena para entrar.</p>
                    <input
                        type="text"
                        onChange={this.handleEmailChange}
                        value={this.state.email}
                        placeholder="@ tu email" />
                    <input
                        type="password"
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        placeholder="tu password" />                        
                    <button className="red light" type="submit">Inscribirse</button>
                </form>
            </div>
        );
    }
}

export default Container1;