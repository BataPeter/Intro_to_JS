// // // A JavaScript function is a block of code designed to perform a particular task.

// // // A JavaScript function is executed when "something" invokes it (calls it).

// // // JavaScript Function Syntax
// // // A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// // // Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// // // The parentheses may include parameter names separated by commas:
// // // (parameter1, parameter2, ...)

// // // The code to be executed, by the function, is placed inside curly brackets: {}


// // // Function parameters are listed inside the parentheses () in the function definition.

// // // Function arguments are the values received by the function when it is invoked.

// // // Inside the function, the arguments (the parameters) behave as local variables.

// // // Why Functions?
// // // You can reuse code: Define the code once, and use it many times.

// // // You can use the same code many times with different arguments, to produce different results.

// // //Example given
// // function greet(){
// //     console.log('hello my friend Ozzy. Who is your best friend in the Catalyst12 class so far?');
// // }
// // greet();
// // greet();
// // greet();
// // greet();
// // greet();

// function testExample(){
//     var greeting = 'Hi brother'
    
//     console.log(greeting);
// }
// testExample();

// // let food ={
// //            tempo:any,
// //            age: fifty,
// //            type: local,
// //            origin: ntungamo,
// //        }
// //       //log is a function that belongs to console class
// //        console.log(food.type);

//Objects have behviours and methods. 
//Methods define what an object does to itseelf or others
let school ={
    teachers: 15,
    students: 30,
    subjects: 4,
    buildings: 7,
    name: "bishop",
    performance:() => {
        console.log("we always pass our students in first class")
        
    },
    //functions inside a class are called methods
    sports: function(){
        console.log('we are the current champions of wakiso district')
    }
}
console.log(school.name)
console.log (school.subjects)
console.log(school.teachers)
console.log(school.sports());


