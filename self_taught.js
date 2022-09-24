var myNumbr = 88;
myNumbr = myNumbr--;
console.log(myNumbr);

let x = 10;
x += 5;
console.log(x);

let p = 20,
  q = 40;
let r = (p /= q);
console.log(r);

let text1 = "Simon";
let text2 = "Peter";
let text3 = text1 + " " + text2;
console.log(text3);

let text4 = "What a very ";
text4 += "nice day!";
console.log(text4); // how do I declare this so I can get an answer in the terminal?

//Adding strings and numbers
let a = 5 + 5;
let b = "5" + 5;
let c = "Hello" + 5;
console.log(a);
console.log(b);
console.log(c);

// how do I see this in the terminal

//if (condition)
//  block of code to be executed if the condition is true
//} else
//  block of code to be executed if the condition is false

let rabbits = "16" + "Volvo"; //When adding a number and a string, JavaScript will treat the number as a string.
console.log(rabbits);

let cathy = 16 + "Volvo";
console.log(cathy);

let hannah = "Volvo" + 16;
console.log(hannah);

let liz = 16 + 4 + "Volvo";
console.log(liz);

var difference = 45 - 10;
console.log(difference);

var product = 8 * 10;
console.log(product);
var quotient = 66 / 33;
console.log(quotient);

var myDecimal = 4.8 * 2;
console.log(myDecimal);

var remainder;
remainder = 11 % 3;
console.log(remainder);

var bread = 3;
var nuts = 17;
var peanut = 12;
var myString = "firstLine\n\t\\secondLine\nThirdLine";
console.log(myString);

var ourStr = "I come first." + "I come second.";
console.log(ourStr);

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);

var myName = "Owakubariho";
var myOther = "My name is " + myName + " and I am well!";
console.log(myOther);

var anAdjective = "Awesome!";
var ourStr = "FreeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);
//Strings are immutable. They cannot be altered once they are created.
var firstName = "Ada";
var lastLetterOffFirstName = firstName[firstName.length - 1];
var lastName = "LoveLace";
var lastLetterofLastName = lastName[lastName.lenght - 1];
console.log(lastName);

// var myString = 'https://www.youtube.com/"watch"?v=PkZNo7MFNFg'//

/*var myVar = 87;
    myVar = myVar + 1;
    console.log (myVar);*/

//var myVar =87;
//myVar = myVar ++;
//console.log (myVar)//

//let x = 5;
//let y = 5;
//let z = 6;
//(x == y)       // Returns true
//(x == z)       // Returns false

//Coaching with Steve!
//keyword class. then class name <Car>
//special function inside of a class- a constructor
class Car {
  constructor(year, brand, color, origin) {
    this.year = year;
    this.brand = brand;
    this.color = color;
    this.origin = origin;
  }
  performance() {
    console.log("Race car performance");
  }
}

class Truck extends Car {
  constructor(year, brand, color, origin, numberOfWheels, capacity) {
    super(year, brand, color, origin);
    this.numberOfWheels = numberOfWheels;
    this.capacity = capacity;
  }
}
let car2 = new Truck(2006, "Toyota", "Grey", "Japan", 4, 10);
console.log(car2);
let car1 = new Car(2022, "Benz", "Silver", "Germany");
console.log(car2);

//While Loops
var age = 5;
while (age < 10) {
  console.log("your age is less than 10");
  age++;
}
document.write("you are now over 10");

//for loop
for (age = 5; age < 10; age++) {
  console.log("your age is less than 10");
}
document.write("you are now over 10");

var links = document.getElementsByTagName("a");
for (i = 1; i <= links.length; i++) {
  console.log("this is link number" + i);
}
document.write("all links are now looped");
