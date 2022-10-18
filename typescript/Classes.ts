class Employee {
    public Name:string;
    public Email:string;
    public Designation:string;
    public EmployID: string;
    protected Salary :number;
    public Work : string;
    public Increments: number;
    

    public Details (...details) {
        console.log( "Employee details are:");
        for(var i=0; i<details.length; i++){
            console.log(details[i]);
        }
    }


    public AssignWork(work:string){
    console.log(this.Name+"likes to assign the following work");
        for(var i=0; i<work.length; i++){
            console.log(work[i]);
        }
        
       
    }
    public AssignIncrements(increments:number){
        this.Increments = increments;
        console.log(this.Name+"gets increment of");
        if(this.Salary>70000)
        {
            console.log("INR 10000");
        }
        else{
            console.log("INR 5000");
        }
}
}




 var Jon = new Employee();
 Jon.Name= "Jon";
 Jon.Email = "jon@123.com";
 Jon.Designation ="Analst";
 Jon.EmployID= "123456";
 Jon.Details ("Jon", "jon@123.com", "Analyst","123456", "Jon gets promotion based on his performance","Jon gets increment of 10000");

 var Don = new Employee();
 Don.Name= "Don";
 Don.Email = "Don@123.com";
 Don.Designation="Associate Consultant";
 Jon.EmployID= "7891011";
 Don.Details("Don", "don@123.com" , "Associate Consultant ", "7891011", "Don gets promotion based on his performance","Don gets increment of 5000");
