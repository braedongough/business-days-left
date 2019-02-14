import "moment";
import moment from "moment-business-days";
const holidays = [
  "2019-04-18",
  "2019-04-19",
  "2019-04-22",
  "2019-05-17",
  "2019-05-30",
  "2019-06-10",
  "2019-12-24",
  "2019-12-25",
  "2019-12-26",
];

moment.updateLocale("en", {
  holidays,
});
const dkMoment = moment("2019-03-01");
export default dkMoment;
