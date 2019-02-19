import React, { Component } from "react";
import "./config/dkLocale";
import DisplayBusinessDaysRemaining from "./components/DisplayBusinessDaysRemaining";
import DisplayBusinessDaysElapsed from "./components/DisplayBusinessDaysElapsed";
import Container from "./components/Container";
import * as getBusinessDays from "./utils/getBusinessDays";

class App extends Component {
  state = {
    month: getBusinessDays.month().toUpperCase(),
    remainingBusinessDays: getBusinessDays.remaining(),
    remainingBusinessDaysPercentage: getBusinessDays.remainingPercentage(),
    elapsedBusinessDays: getBusinessDays.elapsed(),
    elapsedBusinessDaysPercentage: getBusinessDays.elapsedPercentage(),
  };
  componentDidMount() {
    console.log(getBusinessDays.total());
  }

  render() {
    return (
      <Container>
        <DisplayBusinessDaysRemaining
          month={this.state.month}
          remainingBusinessDays={this.state.remainingBusinessDays}
          remainingBusinessDaysPercentage={
            this.state.remainingBusinessDaysPercentage
          }
        />
        <DisplayBusinessDaysElapsed
          elapsedBusinessDays={this.state.elapsedBusinessDays}
          elapsedBusinessDaysPercentage={
            this.state.elapsedBusinessDaysPercentage
          }
        />
      </Container>
    );
  }
}
export default App;
