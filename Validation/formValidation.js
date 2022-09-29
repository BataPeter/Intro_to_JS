const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPwd = document.querySelector("#confirm-password");
const form = document.querySelector("#signup");

const checkUserName = () => {
  let valid = false;
  const min = 3;
  const max = 25;
  let user_name = userName.value.trim();
  if (user_name == "") {
    alert("Your user name is Empty");
    userName.style.border = "1px solid red";
    return false;
  }
};
