function f1(p1:boolean=true){
    console.log("Value of p1:"+ p1);
}
f1();
f1(false);

function f2(p1?:string){
    console.log(p1);
}
f2();
f2("hello");

//using rest parameters
function f3(...p1:number[]){
    for(var i=0; i<p1.length; i++){
        console.log(p1[i]);
    }
}
console.log("Rest Params: 1 param=====");
f3(100);
console.log("Rest Params: 2 params=====");
f3(200,300);
console.log("Rest Params: 5 params=====");
f3(400,500,600,700,800);

var f4 = function(){
    console.log("Function using variable syntax");
}
f4();

//arrow functions or Lambda functions
var f5 = () => console.log("A simple arrow function");
var add= (x:number,y:number) => x+y;
f5();
console.log(add(999,111));