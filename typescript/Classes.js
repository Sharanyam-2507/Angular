var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Details = function () {
        var details = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            details[_i] = arguments[_i];
        }
        console.log("Employee details are:");
        for (var i = 0; i < details.length; i++) {
            console.log(details[i]);
        }
    };
    Employee.prototype.AssignWork = function (work) {
        this.Work = work;
        console.log(this.Name + "gets promotion based on the performance ");
    };
    Employee.prototype.AssignIncrements = function (increments) {
        this.Increments = increments;
        console.log(this.Name + "gets increment of");
        if (this.Salary > 70000) {
            console.log("INR 10000");
        }
        else {
            console.log("INR 5000");
        }
    };
    return Employee;
}());
var Jon = new Employee();
Jon.Name = "Jon";
Jon.Email = "jon@123.com";
Jon.Designation = "Analst";
Jon.EmployID = "123456";
Jon.Details("Jon", "jon@123.com", "Analyst", "123456", "Jon gets promotion based on his performance", "Jon gets increment of 10000");
var Don = new Employee();
Don.Name = "Don";
Don.Email = "Don@123.com";
Don.Designation = "Associate Consultant";
Jon.EmployID = "7891011";
Don.Details("Don", "don@123.com", "Associate Consultant ", "7891011", "Don gets promotion based on his performance", "Don gets increment of 5000");
