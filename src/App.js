import React, { Component } from "react";
import "./App.css";
import Plants from "./components/Plants";

class App extends Component {
  state = {
    data: null,
    activePlantId: null,
    activeCardId: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => {
        console.log(res);
        this.setState({ data: res.plants });
      })
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    console.log("I'm at the server!");
    const response = await fetch("/plants");
    const body = await response.json();
    console.log(response);
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  handlePlantClick = (activePlantId) => {
    this.setState({ activePlantId, activeCardId: 1 });
  };

  handleCardClick = (activeCardId) => {
    this.setState({ activeCardId });
  };

  maybeRenderPlants = () => {
    if (this.state.data) {
      return (
        <Plants
          plants={this.state.data}
          onPlantClick={this.handlePlantClick}
          onCardClick={this.handleCardClick}
        />
      );
    }
    return null;
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.activePlantId}
        {this.maybeRenderPlants()}
        <p className="App-intro">{JSON.stringify(this.state.data)}</p>
      </div>
    );
  }
}

export default App;
