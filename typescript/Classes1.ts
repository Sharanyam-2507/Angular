class Person {
    public Name:string;
    public Age:number;
    public Email:string;
    private Secrets:string[];
    protected Income:number;

    public Eat(...food:string[]) {
        console.log(this.Name+ " likes to eat:");
        for(var i=0; i<food.length; i++){
            console.log(food[i]);
        }
    }


    public AssignIncome(income:number){
        this.Income = income;
    }
}

class ITOfficer extends Person{
    public PrintTotalRefund(){
        console.log(this.Name = "has received a total refund of");
        if(this.Income> 300000)
        {
            console.log("INR 10000");
        }
    else{
        console.log("INR 5000");
    }
    }
}

var auditor = new ITOfficer();
auditor.Name = "Prakash";
auditor.Eat("Chapati","Sabji","Dessert");
auditor.AssignIncome(1000000);
auditor.PrintTotalRefund();


 //constructing real person
 var shar = new Person();
 shar.Name= "shar";
 shar.Email = "shar@123.com";
 shar.Eat ("Junk foods","vegetables");

 var shiv = new Person();
 shiv.Name= "shiv";
 shiv.Email = "shiv@123.com";
 shiv.Eat("Fruits","Chocolates");