import React, { Component } from "react";

class Plant extends Component {
  render() {
    return (
      <div className="App">
        <h2> {this.props.name}</h2>
      </div>
    );
  }
}

export default Plant;
