import React, { Component } from "react";
export default class BusinessDays extends Component {
  render() {
    return (
      <div>
        <h1>WHAT IS THAT AS A PERCENTAGE??</h1>
        <p>{this.props.remainingBusinessDays}%</p>
      </div>
    );
  }
}
