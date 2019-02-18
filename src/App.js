import React, { Component } from "react";
import "moment";
import moment from "moment-business-days";
import "./config/dkLocale";
import DisplayBusinessDays from "./components/DisplayBusinessDays";
import DisplayBusinessDaysPercentage from "./components/DisplayBusinessDaysPercentage";
import Container from "./components/Container";

class App extends Component {
  state = {
    month: moment()
      .format("MMMM")
      .toUpperCase(),
    remainingBusinessDays: moment().businessDiff(moment().endOf("month")),
    remainingBusinessDaysPercentage:
      (moment().businessDiff(moment().endOf("month")) /
        moment()
          .startOf("month")
          .businessDiff(moment().endOf("month"))) *
      100,
  };

  render() {
    return (
      <Container>
        <DisplayBusinessDays
          month={this.state.month}
          remainingBusinessDays={this.state.remainingBusinessDays}
        />
        <DisplayBusinessDaysPercentage
          month={this.state.month}
          remainingBusinessDays={this.state.remainingBusinessDaysPercentage}
        />
      </Container>
    );
  }
}
export default App;
