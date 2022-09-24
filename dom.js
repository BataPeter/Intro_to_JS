// document.body.style.backgroundColor = "fuchsia";
// const html = document.documentElement;
// console.log(html.parentNode);
// //console.log(document.getElementsByTagName("ul").childNodes);

const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const ul = document.getElementsByTagName("ul")[0];
console.log(p.parentNode);

console.log(p.parentNode);
console.log(p.parentNode.parentNode.parentNode.parentNode);
console.log(ul.childNodes);

ul.firstElementChild.style.background = "yellow";
for (let Element of ul.children) {
  Element.style.background = "gold";
}
document.body.children[3].lastElementChild.style.background = "fuchsia";
const tiger = ul.children[1];
tiger.nextElementSibling.style.background = "coral";
tiger.previousElementSibling.style.background = "aquamarine";

//Add other sharks
for (let element of ul.children) {
  const sharkList = document.querySelector("ul");
}
const newShark = document.createElement("li");
newShark.textContent = "Serah Shark";
sharkList.appendChild(newShark);
