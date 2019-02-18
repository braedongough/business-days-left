import React, { Component } from "react";
import "moment";
import moment from "moment-business-days";
import "./config/dkLocale";

export default class RemainingBusinessDays extends Component {
  state = {
    month: moment()
      .format("MMMM")
      .toUpperCase(),
    remainingBusinessDays: moment().businessDiff(moment().endOf("month")),
    remainingBusinessDaysPercentage:
      this.remainingBusinessDays /
      moment()
        .startOf("month")
        .businessDiff(moment().endOf("month")),
  };

  getBusinessDaysInMonth = () => {
    return moment()
      .startOf("month")
      .businessDiff(moment().endOf("month"));
  };
  render() {
    return <div />;
  }
}
