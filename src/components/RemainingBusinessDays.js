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
      (moment().businessDiff(moment().endOf("month")) /
        moment()
          .startOf("month")
          .businessDiff(moment().endOf("month"))) *
      100,
  };
  render() {
    return <div />;
  }
}
