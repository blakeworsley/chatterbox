import React, { Component } from "react";
import "./styles.scss";
import Home from '../Home';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>This is the top</header>
        <Home/>

      </div>
    );
  }
}

export default App;
