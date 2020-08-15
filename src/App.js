import React, { Component } from 'react'
import "./App.css";
// import Movies from './components/movies';
import Counters from './components/counters';
import Navbar from './components/navbar';


class App extends Component {
    state = {counters:[
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]  }

    handleIncrement = count => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(count)
        counters[index] = {...count}
        counters[index].value++;
        this.setState({counters})
    }
    
    handleDecrement = count => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(count)
        counters[index] = {...count}
        counters[index].value--;
        this.setState({counters})
    }

    hanldeDelete = (counterId) => {
        const countersFilter = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: countersFilter})
    }

    handleReset = () =>{
        console.log("Reset Click ... ");
        const counterReset = this.state.counters.map( c =>
             { c.value = 0;
                return c;
            })
        this.setState({counters: counterReset})
    }

    render() { 
        return ( <div className="container">
        <Navbar totalCounter = {this.state.counters.filter( c => c.value > 0).length}/>
        
        <Counters 
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onDelete={this.hanldeDelete} 
            counters={this.state.counters}
        />

    </div> );
    }
}
 
export default App;