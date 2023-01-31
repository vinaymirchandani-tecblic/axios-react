import React, { Component } from "react";
import "./Taptap.css";

export class Taptap extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Log-in" };
  }

  nameChangeHandler() {
    this.setState({ name: "Welcome" });
  }

  render() {
    return (
      <div>
        <i className="Taptap">{this.state.name} to TapTap</i>
        <div>
          <button onClick={this.nameChangeHandler.bind(this)}>Hit me</button>
        </div>
      </div>
    );
  }
}

export default Taptap;
