let firstname; 
firstname = "peterson";
let lastname;
lastname = "Onebi Hesed Veritas"
console.log (firstname)
console.log (lastname);
var num1 =10;
var num2 =20;
console.log (num1 + num2)


//assignment operators
var moses_age1 =12;
var joshua_age2 =43;
//moses_age1 =moses_age1 plus 1o
console.log (moses_age1 +=10);
console.log (moses_age1 -=2);
console.log (moses_age1 *=2);

//logical operators
var numbr = 5;
var numbr1 = 10;
var gender = "female"
console.log (numbr != numbr1);
//! means not
//&& means and. if one side is false, all is false
// || means or. if one side is true, all is true
console.log (numbr < numbr1) && (numbr1 > numbr);
console.log (numbr < numbr1) || (numbr1 > numbr);

//comparison operators
var number = 100;
var number2 = 200;
console.log ( number == number2);
console.log (numbr ==gender)
//==equal
//=== strict equal operator.
console.log (numbr === numbr1);
console.log ( numbr <= numbr1);//greater than equal to
console.log (numbr != numbr1)// not equal to


//Ternary operator
//var a = 10, b = 5; 
//var c = a > b? a:b;//: otherwise ? is it true
//console.log (c);
var a = 10, b = 5;
var c = a < b? a:b;
console.log (c);
//Expression evaluates something

//INCREAMENT OPERATORS
let xNum = 7;
let dNum = 14;
console.log (xNum++);//first use the value of xNUM then add later. post increament. xNum++ literally means xNum + 1
console.log (xNum);//the next time xNum is used, there will be a plus one. 
//console.log (++xNum);//pre increament
console.log (xNum++);
console.log (xNum);

console.log (xNum--);//decreament
console.log (xNum);
console.log (xNum+=10)