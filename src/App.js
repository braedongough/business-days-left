import React, { Component } from "react";
import "moment";
import moment from "moment-business-days";
import styled from "styled-components";
import BusinessDays from "./components/BusinessDays";
import BusinessDaysPercentage from "./components/BusinessDaysPercentage";
import dkMoment from "./Utils/fixHolidays";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  p {
    font-size: 200px;
    margin: 0 auto;
  }
`;

class App extends Component {
  state = {
    month: moment()
      .format("MMMM")
      .toUpperCase(),
    remainingBusinessDays: moment().businessDiff(moment().endOf("month")),
  };
  componentDidMount() {
    console.log(dkMoment);
  }

  render() {
    return (
      <Container>
        <BusinessDays
          month={this.state.month}
          remainingBusinessDays={this.state.remainingBusinessDays}
        />
        <BusinessDaysPercentage
          month={this.state.month}
          remainingBusinessDays={this.state.remainingBusinessDays}
        />
      </Container>
    );
  }
}
export default App;
