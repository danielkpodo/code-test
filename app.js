const moment = require("moment");

const startDate = "2020-09-23";
const months = 6;

const getWeeks = (weekRanges) => {
  const weekNumbers = [];
  weekRanges.forEach((date) => {
    weekNumbers.push(moment(date.begin, date.end).week());
  });
  return weekNumbers;
};

const extractWeekRanges = (startDate, endDate) => {
  let dates = [];
  const addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  //now our Sunday check
  let currentDate = formatDate(startDate);
  if (currentDate.getDay() > 0) {
    // console.log("not a sunday...adjusting");
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());
  }

  while (currentDate <= formatDate(endDate)) {
    let endWeekDate = addDays.call(currentDate, 6);
    dates.push({ begin: currentDate, end: endWeekDate });
    currentDate = addDays.call(currentDate, 7);
  }
  return dates;
};

const formatDate = (dte) => {
  return new Date(`${dte}`);
};

const addMonths = (startDate, n) => {
  const date = new Date(`${startDate}`);
  date.setMonth(date.getMonth() + n);
  return date;
};

const weeks = (startDate, months) => {
  const endDate = addMonths(startDate, months);
  const weekRanges = extractWeekRanges(startDate, endDate);
  return getWeeks(weekRanges);
};

console.log(weeks(startDate, months));

module.exports = {
  weeks,
};
