// //get Elements by ID
// const title = document.getElementById("page-title");
// console.log(title);

// //get elements by their class Name
// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[0]);

// //get elements by their tag names
// const paragra = document.getElementsByTagName("p");
// console.log(paragra);
// console.log(paragra[2]);

const para = document.querySelector("p");
console.log(para.innerText);
para.innerText += " It is so sweet to trust in Jesus"; //+= append

const paras = document.querySelectorAll("p");

paras.forEach(para =>{
  console.log(para.innerText);
  para.innerText += 'new text';
})