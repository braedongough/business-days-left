import React, { Component } from "react";
import "./config/dkLocale";
import DisplayBusinessDays from "./components/DisplayBusinessDays";
import DisplayBusinessDaysPercentage from "./components/DisplayBusinessDaysPercentage";
import Container from "./components/Container";
import * as getBusinessDays from "./utils/getBusinessDays";

class App extends Component {
  state = {
    month: getBusinessDays.month().toUpperCase(),
    remainingBusinessDays: getBusinessDays.remaining(),
    remainingBusinessDaysPercentage: getBusinessDays.remainingPercentage(),
  };
  componentDidMount() {
    console.log(getBusinessDays.total());
  }

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
