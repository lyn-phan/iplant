import React, { Component } from "react";
import "./style.css";

class Plant extends Component {
  handlePlantClick = () => {
    this.props.onPlantClick(this.props.id);
  };
  render() {
    return (
      <div className="plant" onClick={this.handlePlantClick}>
        <h2> {this.props.name}</h2>
      </div>
    );
  }
}

export default Plant;
