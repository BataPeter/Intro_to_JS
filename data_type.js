//A computer needs to know the kind of data it is dealing with so that it can prepare just enough space without wastage of memory because it is limited
//Data types defines the grouping of data to be stored in memory e.g C int c = 10 (int refers to integer)

let firstname = "Serah"; //string. a comb of characters. This is a string data type
var lastname ="Benitah Mwesigye";
let myAge =16; //number data type
console.log (typeof(firstname));
console.log (typeof(myAge));
console.log (firstname);
console.log (lastname);
console.log ( firstname / myAge); //You cannot add strings and numbers. NaN- Means Not a Number data type

//Big Int data type. Any values that are more than 53 (in length) are called big interger numbers. And you cannot add Big Int and Numbers together like 7,000,000,000 plus one. The computer won't compute that. 
const dataChecked = false
console.log (typeof(dataChecked)); //boolean dataType. You cannot declare a word called true or false because those words have a big meaning in JavaScript

var name;
console.log (typeof(name)); //any variable not declared yet used in the code will be undefined. A variable is a memory space in a computer.

var notEmpty = null;
console.log (typeof(notEmpty)); //Object is another data type. One of them is null