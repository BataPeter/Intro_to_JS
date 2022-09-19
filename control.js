//If a condition is false what should the computer do. Flow control statement.
var weight = 10;
if (weight < 50) {}//pair of parenthesis {} whatever you put in the braces will be executed depending on the condition
console.log ("you are under weight to donate blood") // an if statement
//block of codes- group of statements e.g from line 3 to 4
//read about terminating

var salary = 700000;
var PAYE = 30;
if (salary < 300000)
{console.log ( "you are not taxable");}
if ( salary >300000)
{console.log ( 0.3*salary)}

//do else if, instead of writing many if's
let price1 = 2000
if( price1<= 2000) {
    console.log( 'This product is entitled for VAT')
}
else{
    console.log('This product is not entitled for VAT')
}

var boy ="Elishama";
if ( boy = "Elishama") {
    console.log ('This guy is a man')

}
else {
    console.log ('He is something else, may be?')
}

const number = -1;
    if (number >=0) 
    if(number ==0) { //nested if. conditions that are based on other conditions
        console.log ('Your number is 0')
    }
    else { 
    console.log ('You number is positive');
}  

else {
    console.log ('your number is negative');
} 
//if else if
var mySal = 400000;
var yourSal = 700000;
if( mySal > yourSal) {
    console.log ('I am richer than you')
}
else if ( mySal < yourSal) {
    console.log('You are better than me!')
} //don't break parenthesis
else if (mySal == yourSal)
{ console.log ('We are together in this. All lower class fellas')}

var mySchool = 'Mubiru peter memorial school';
var yourSchool = 'Good samaritan school';
if ( mySchool == yourSchool) {
    console.log ('We are doing ple together')
}
else if ( mySchool > yourSchool){ console.log ('I am still in p6')}
