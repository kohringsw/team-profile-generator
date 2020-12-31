const Employee = require("../lib/Employee");

test("creates the employee object", () => {
  const employee = new Employee();

  expect(typeof employee).toBe("object");
});

test("Set Employee Name", () => {
  const name = "Bob Vance";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Set Employee ID", () => {
  const testId = "123";
  const employee = new Employee("Bob Vance", testId);
  expect(employee.id).toBe(testId);
});

test("Set Employee Email", () => {
  const testEmail = "bobvance@vancerefrigeration.com";
  const employee = new Employee("Bob Vance", 123, testEmail);
  expect(employee.email).toBe(testEmail);
});

test("Get name from getName()", () => {
  const testName = "Bob Vance";
  const employee = new Employee(testName);
  expect(employee.getName()).toBe(testName);
});

test("Get id from getId()", () => {
  const testId = "123";
  const employee = new Employee("Bob Vance", testId);
  expect(employee.getId()).toBe(testId);
});

test("Get email from getEmail()", () => {
  const testEmail = "bobvance@vancerefrigeration.com";
  const employee = new Employee("Bob Vance", 123, testEmail);
  expect(employee.getEmail()).toBe(testEmail);
});

test("Get role from getRole()", () => {
  const testRole = "Employee";
  const employee = new Employee(
    "Bob Vance",
    123,
    "bobvance@vancerefrigeration.com"
  );
  expect(employee.getRole()).toBe(testRole);
});
