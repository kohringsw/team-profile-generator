const Manager = require("../lib/Manager");

test("Set office number", () => {
  const testOffice = "101";
  const employee = new Manager(
    "Bob Vance",
    123,
    "bobvance@vancerefrigeration.com",
    testOffice
  );
  expect(employee.officeNumber).toBe(testOffice);
});

test("Get role from getRole()", () => {
  const testRole = "Manager";
  const employee = new Manager(
    "Bob Vance",
    123,
    "bobvance@vancerefrigeration.com",
    testRole
  );
  expect(employee.getRole()).toBe(testRole);
});

