//crear con "function-bassed component"
//para actualizar valores necesitamos
//un cambio de estado que actualizará el DOM
//Creo que no actualiza los hijos.
import React, { Component } from 'react';
import {PM}  from 'react-environment-chart';
import Header from './Header';
//import Panel from './Panel';

import { Link } from 'react-router-dom';


// A function that returns a random number from 0 to 280
const randomNum     = () => Math.floor(Math.random() * 280);

/*
var sensor;
setInterval(() => {
    var sensor = randomNum();
    console.log('sensor:', sensor);       
}, 3000);
*/


export default class Pag4 extends Component {
    //valor inicial
//    state = {valor : 80};
    //Mejor meter en un constructor ???
    constructor(props) {
        super(props);
        this.state = {valor: 80};
        //this.state = {valor: sensor};
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DidUpdate")
        console.log("PrevProps.value", prevProps.value);
        console.log("PrevState.valor", prevState.valor);
        console.log("this.props.value", this.props.value);
        console.log("this.state.valor", this.state.valor);

//        if (prevProps.data !== this.props.data){
//            data = this.props.data;
//        }
        //this.setState({valor:randomNum()});
    }

//    componentDidMount() {
//        this.setState({valor:randomNum()});
//    }

    //para destruir el componente al salir de la página:
/*
    componentWillUnmount() {
        if (this.chart) {
        this.chart.dispose();
        }
    }
*/


    componentDidMount(){
    setInterval(() => {
        this.setState({ valor: randomNum()});        
    }, 1000);
    }

/*
    componentDidMount(){
        console.log("DidMount");

        setInterval(() => {
        this.setState({ valor: sensor});        
    }, 5000);
    }
*/

    randomizeData() {
    this.setState({ valor: randomNum() });
  }

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
                {/*<h1>Hola desde Página 4!</h1>*/}
                {/*<ReactStoreIndicator
                    value={30}
                    maxValue={100}
                />*/}
                {/*<PM value={80} />*/}
                {/*<PM value={sensor} />*/}
                <PM value={this.state.valor} />
                <button className="red" onClick={() => this.randomizeData()}>
                Randomize Data
                </button>
                {/*{this.randomizeData()}*/}

            </div>
        )
    }
}
