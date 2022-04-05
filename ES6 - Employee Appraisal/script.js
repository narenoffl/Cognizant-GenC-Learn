var Employee = class Employee {
  // DO NOT CHANGE THIS STATEMENT
  constructor(employeeId, employeeName, salary, experience) {
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.salary = salary;
    this.experience = experience;
  }
  findIncrementPercentage(experience) {
    // Fill the code to calculate and set the incremented percentage of the salary of the employees.
    if (this.experience >= 1 && this.experience <= 5) {
      return 15;
    } else if (this.experience >= 6 && this.experience <= 10) {
      return 30;
    } else if (this.experience >= 11 && this.experience <= 15) {
      return 45;
    }
  }

  calculateIncrementSalary(incrementPercentage) {
    //Fill the code to calculate the incremented salary of the employee and return the same.
    return (
      Number(this.salary) + Number((this.salary * incrementPercentage) / 100)
    );
  }
};

function display() {
  // Get the employee id, employee name, salary and experience values.
  // Create an object for the Employee class
  // Invoke the findIncrementPercentage method to calculate the incremented percentage of the salary.
  // Invoke the calculateIncrementSalary method to calculate the incremented salary of the employee and return the same in the Employee class.
  // Display the incremented salary in div tag with id as "result".
  var id = document.getElementById("employeeId").value;
  var name = document.getElementById("employeeName").value;
  var salary = document.getElementById("salary").value;
  var exp = document.getElementById("experience").value;
  var emp = new Employee(id, name, salary, exp);
  var incrementPercentage = emp.findIncrementPercentage();
  var incrementSalary = emp.calculateIncrementSalary(incrementPercentage);
  console.log(incrementSalary);
  document.getElementById("result").innerHTML = incrementSalary;
  return false;
}
var Employee = class Employee {
  // DO NOT CHANGE THIS STATEMENT
  constructor(employeeId, employeeName, salary, experience) {
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.salary = salary;
    this.experience = experience;
  }
  findIncrementPercentage(experience) {
    // Fill the code to calculate and set the incremented percentage of the salary of the employees.
    if (this.experience >= 1 && this.experience <= 5) {
      return 15;
    } else if (this.experience >= 6 && this.experience <= 10) {
      return 30;
    } else if (this.experience >= 11 && this.experience <= 15) {
      return 45;
    }
  }

  calculateIncrementSalary(incrementPercentage) {
    //Fill the code to calculate the incremented salary of the employee and return the same.
    return (
      Number(this.salary) + Number((this.salary * incrementPercentage) / 100)
    );
  }
};

function display() {
  // Get the employee id, employee name, salary and experience values.
  // Create an object for the Employee class
  // Invoke the findIncrementPercentage method to calculate the incremented percentage of the salary.
  // Invoke the calculateIncrementSalary method to calculate the incremented salary of the employee and return the same in the Employee class.
  // Display the incremented salary in div tag with id as "result".
  var id = document.getElementById("employeeId").value;
  var name = document.getElementById("employeeName").value;
  var salary = document.getElementById("salary").value;
  var exp = document.getElementById("experience").value;
  var emp = new Employee(id, name, salary, exp);
  var incrementPercentage = emp.findIncrementPercentage();
  var incrementSalary = emp.calculateIncrementSalary(incrementPercentage);
  console.log(incrementSalary);
  document.getElementById("result").innerHTML = incrementSalary;
  return false;
}
