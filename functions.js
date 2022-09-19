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
//  // function call aslo technically referred to as function invocation
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

function netPay(){
    var gross =1000000; //static value
    var tax =1000000 * 0.3
    var actualPay =gross - tax;
return actualPay;
}

function welfare(){
    var welFare =50000;
    var takeHome =netPay() - welFare;
    console.log(takeHome);
}
welfare();

