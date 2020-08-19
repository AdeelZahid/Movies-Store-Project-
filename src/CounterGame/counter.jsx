import React, { Component } from "react";

class Counter extends Component {
  render() {
    const {onIncrement, onDelete, counter, onDecrement} = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-1">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          
          </div>

          <div className="col-2">
          <button onClick={() => onIncrement(counter)}className="btn btn-secondary btn-sm">+</button>
        <button onClick={() => onDecrement(counter)}className="btn btn-secondary btn-sm m-2" disabled={counter.value === 0 ? "disabled" : ""}>-</button>
        <button onClick={() => onDelete(counter.id)}className="btn btn-danger btn-sm">x</button>
          </div>
        </div>
      </div>
    );
  } 

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
