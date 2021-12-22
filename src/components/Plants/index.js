import React, { Component } from "react";
import "./style.css";
import Plant from "../Plant";

class Plants extends Component {
  render() {
    return (
      <div className="App">
        <h2> Plants </h2>
        {this.props.plants.map((plant, index) => {
          return (
            <Plant
              key={`plant-${index}`}
              {...plant}
              onPlantClick={this.props.onPlantClick}
              onCardClick={this.props.onCardClick}
            />
          );
        })}
      </div>
    );
  }
}

export default Plants;
