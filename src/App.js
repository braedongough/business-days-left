import React, { Component } from "react";
import moment from "moment";
import "moment-business-days";
import "./App.css";
import Headline from "./components/Headline";

class App extends Component {
  state = {
    month: moment()
      .format("MMMM")
      .toUpperCase(),
    remainingBusinessDays: moment().businessDiff(moment().endOf("month")),
  };
  componentDidMount() {
    console.log(moment().format("MMMM"));
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
