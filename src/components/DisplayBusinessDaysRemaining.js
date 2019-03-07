import React, { Component } from "react";

export default class BusinessDays extends Component {
  render() {
    return (
      <div>
        <h1>HOW MANY BUSINESS DAYS ARE LEFT IN {this.props.month}?</h1>
        <p>
          {`          ${this.props.remainingBusinessDays} days or
          ${Math.floor(this.props.remainingBusinessDaysPercentage)}%`}
        </p>
      </div>
    );
  }
}
