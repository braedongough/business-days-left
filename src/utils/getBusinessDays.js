import "moment";
import moment from "moment-business-days";

export const month = () => moment().format("MMMM");

export const total = () =>
  moment()
    .startOf("month")
    .businessDiff(moment().endOf("month"));

export const remaining = () => moment().businessDiff(moment().endOf("month"));

export const remainingPercentage = () => (remaining() / total()) * 100;

export const elapsed = () =>
  moment()
    .startOf("month")
    .businessDiff(moment());

export const elapsedPercentage = () => (elapsed() / total()) * 100;
