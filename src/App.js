import React, { Component } from "react";
import "moment";
import moment from "moment-business-days";
import "./App.css";
import Headline from "./components/Headline";
import dkMoment from "./Utils/fixHolidays";

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
      <div className="App">
        <Headline month={this.state.month} />
        <p className="huge">{this.state.remainingBusinessDays}</p>
      </div>
    );
  }
}
export default App;
