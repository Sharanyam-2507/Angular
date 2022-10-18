var kpmgEmp = /** @class */ (function () {
    function kpmgEmp() {
    }
    kpmgEmp.prototype.WorkHoursClause = function () {
        console.log("".concat(this.EmpName, " should work for 8hrs a day in a week"));
    };
    kpmgEmp.prototype.CheckInTimeClause = function () {
        console.log("".concat(this.EmpName, " should check-in by ").concat(this.ShiftTimeStarts));
    };
    return kpmgEmp;
}());
var Sharanya = new kpmgEmp;
Sharanya.EmpID = 123456;
Sharanya.EmpName = "Sharanya";
Sharanya.Designation = "Analyst";
Sharanya.ShiftTimeStarts = "9am";
Sharanya.CheckInTimeClause();
Sharanya.WorkHoursClause();
