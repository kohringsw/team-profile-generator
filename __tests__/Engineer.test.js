const Engineer = require("../lib/Engineer");

test("Set Github username", () => {
  const testUsername = "bobvance";
  const employee = new Engineer(
    "Bob Vance",
    123,
    "bobvance@vancerefrigeration.com",
    testUsername
  );
});

test("Get role from getRole()", () => {
  const testRole = "Engineer";
  const employee = new Engineer(
    "Bob Vance",
    123,
    "bobvance@vancerefrigeration.com",
    testRole
  );
  expect(employee.getRole()).toBe(testRole);
});

test("Get Github username from getGithub()", () => {
  const testUsername = "bobvance";
  const employee = new Engineer(
    "Bob Vance",
    123,
    "bobvance@vancerefrigeration.com",
    testUsername
  );
});
