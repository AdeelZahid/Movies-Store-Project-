import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   

    render() {  
        return (
          <React.Fragment>
              <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
              {this.props.counters.map(c => ( <Counter key={c.id} onDelete={this.props.onDelete} counter={c} onDecrement={this.props.onDecrement} onIncrement={this.props.onIncrement} selected/>))}
          </React.Fragment>
        );
    }
}
 
export default Counters;