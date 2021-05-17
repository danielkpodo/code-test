const { weeks } = require("../app");

test("Extract weeek numbers into array given start date and months", () => {
  const startDate = "2020-09-23";
  const months = 2;

  expect(weeks(startDate, months)).toEqual([
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  ]);
});
