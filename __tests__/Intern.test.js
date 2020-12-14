const Intern = require("../lib/Intern");

test("Set school", () => {
  const testSchool = "Dunder Mifflin";
  const employee = new Intern(
    "Ryan",
    123,
    "ryan@dundermifflin.edu",
    testSchool
  );
});

test("Get role from getRole()", () => {
  const testRole = "Intern";
  const employee = new Intern("Ryan", 123, "ryan@dundermifflin.edu", testRole);
  expect(employee.getRole()).toBe(testRole);
});

test("Get school from getSchool()", () => {
  const testSchool = "Dunder Mifflin";
  const employee = new Intern(
    "Ryan",
    123,
    "ryan@dundermifflin.edu",
    testSchool
  );
});
