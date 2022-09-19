function sum(){
    var a=10;
    var b=12;
    var c=a + b;
    console.log(c);
}
sum();        //calling a function.........returning is within the function
sum(); 

function sum2(a, b){
    var c=a +b;
    console.log(c);
    
}
sum2(10, 20);
sum2(100, 200);
sum2(25);

//Dynamic function or parameterized function. gross , tax are parameters/formal parameters/formal arguments. All functions are self-contained.
//A return statement marks the end of execution. 
function paye(gross, tax){           
    var netPay= gross - (gross*tax);
    console.log(netPay);
}
//1000000, 0.2 are arguments/actual parameters
paye(1000000, 0.2);

