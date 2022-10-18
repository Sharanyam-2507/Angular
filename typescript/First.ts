var n1=100;
var n2= 200;
var n3=n1+n2;
console.log("value of n3="+n3);

var hername: string = "Meena";
var obj: any = {
    k1:100,
    k2:"ABC",
    k3: [10,20,30]

};
var isTrue: boolean = true;
var arrNames:string[]= ["Ena", "Meena","Nina"];

function Greet(pName:string) : void{
    console.log("Namaste"+ pName);

}

Greet("Meena");
console.log(hername);
console.log(obj);
console.log("value of k3 is :"+ obj.k3[1]);
console.log(isTrue);
console.log(arrNames);
