interface IEmpContract{
 WorkHoursClause();
CheckInTimeClause();
}

class kpmgEmp implements IEmpContract{
    public EmpID : number;
    public EmpName:string;
    public Designation: string;
    public ShiftTimeStarts: string;

    WorkHoursClause() {
        console.log(`${this.EmpName} should work for 8hrs a day in a week`);
    }
    CheckInTimeClause() {
      console.log(`${this.EmpName} should check-in by ${this.ShiftTimeStarts}`);
    }
}

var Sharanya = new kpmgEmp;
Sharanya.EmpID= 123456;
Sharanya.EmpName="Sharanya";
Sharanya.Designation="Analyst";
Sharanya.ShiftTimeStarts="9am";
Sharanya.CheckInTimeClause();
Sharanya.WorkHoursClause();