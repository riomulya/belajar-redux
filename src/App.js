import React, { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <center>
          <Counter count="0" />
        </center>
      </div>
    );
  }
}

export default App;
