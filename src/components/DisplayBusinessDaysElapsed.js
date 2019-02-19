import React, { Component } from "react";
export default class BusinessDays extends Component {
  render() {
    return (
      <div>
        <h1>HOW MANY OF THOSE DAYS HAVE ALREADY PASSED??</h1>
        <p>
          {`          ${this.props.elapsedBusinessDays} days or
          ${this.props.elapsedBusinessDaysPercentage}%`}
        </p>
      </div>
    );
  }
}
