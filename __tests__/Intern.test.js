const Intern = require("../lib/Intern");

test("Set school", () => {
  const testSchool = "Dunder Mifflin";
  const employee = new Intern(
    "Bob Vance",
    123,
    "bobvance@vancerefrigeration.com",
    testSchool
  );
  expect(employee.school).toBe(testSchool);
});

test("Get role from getRole()", () => {
  const testRole = "Intern";
  const employee = new Intern("Bob Vance", 123, "bobvance@vancerefrigeration.com", testRole);
  expect(employee.getRole()).toBe(testRole);
});

test("Get school from getSchool()", () => {
  const testSchool = "Dunder Mifflin";
  const employee = new Intern(
    "Bob Vance",
    123,
    "bobvance@vancerefrigeration.com",
    testSchool
  );
  expect(employee.getSchool()).toBe(testSchool);
});
