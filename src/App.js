import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Plants from "./components/Plants";

class App extends Component {
  state = {
    data: null,
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

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.data && <Plants plants={this.state.data} />}
        <p className="App-intro">{JSON.stringify(this.state.data)}</p>
      </div>
    );
  }
}

export default App;
