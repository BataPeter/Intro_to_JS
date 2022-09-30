// //pay attention to your condition
// //full instruction to the computer is called a statement. number of statements is code. block meaning- search
// //a file of code in js is called a module
// //
//  // the function name should be related to what the function is doing
//  function add (){
//     let num1 = 20;
//     let num2 = 30;
//     let ans = num1 + num2;
//    console.log (ans)
//    return num2;
//    return ans;

//  }
//  // function call also technically referred to as function invocation
//  add ();
//  //console.log ( add())

//  function evenNumbers (){
//     for(num = 0;num <= 100; num+=10){
//         if (num% 2 ==0){
//             console.log(num)
//         }
//     }
//  }
//  evenNumbers ();

//  //Tomorrow
//  //Parameters, objects. read about that

// function testExample(){
//     var greeting = 'Hi brother';

//     console.log(greeting);
// }
// testExample();

function netPay() {
  var gross = 1000000; //static value
  var tax = 1000000 * 0.3;
  var actualPay = gross - tax;
  return actualPay;
}

function welfare() {
  var welFare = 50000;
  var takeHome = netPay() - welFare;
  console.log(takeHome);
}
welfare();

//Define 7 classes with at least 5 properties using <this> keyword and write at least 5 instances using the <new> keyword

// -ratings, name, location, stars.
class Hotel {
  constructor(ratings, name, location, stars, owner) {
    this.name = name;
    this.ratings = ratings;
    this.location = location;
    this.owner = owner;
    this.stars = stars;
  }
  checkRating() {
    if (this.ratings >= 4) {
      console.log("excellent");
    } else if (this.ratings >= 2 && this.ratings < 4) {
      console.log("average");
    } else {
      console.log("poor");
    }
  }
}
let sheraton = new Hotel(4, "sheraton", "kampala", "5 star", "janet");
let jeju = new Hotel(1, "jeju", "nansana", "1 star", "mategyero");
console.log(sheraton.name);
console.log(sheraton.owner);
sheraton.checkRating();
jeju.checkRating();
