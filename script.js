const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput(){
  let usernameInput = username.value.trim();
  let emailInput = email.value.trim();
  let passwordInput = password.value.trim();
  let confirmPasswordInput = confirmPassword.value.trim();

  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if (usernameInput === ""){
    setError(username, "Username cannot be blank");
  } 
  else {
    setSuccess(username);
  }
  if (emailInput === ""){
    setError(email, "Email cannot be blank");
  } 
  else if (!isEmailValid.test(emailInput)){
    setError(email, "Email is not valid");
  }
  else {
    setSuccess(email);
  }
  if (passwordInput === ""){
    setError(password, "Password cannot be blank");
  } 
  else {
    setSuccess(password);
  }
  if (confirmPasswordInput === ""){
    setError(confirmPassword, "Confirm password cannot be blank");
  } 
  else if (passwordInput !== confirmPasswordInput){
    setError(confirmPassword, "Password does not match")
  }
  else {
    setSuccess(confirmPassword);
  }

  SubmitEvent(usernameInput, isEmailValid, emailInput, passwordInput, confirmPasswordInput);
};

function setError(input, message){
  let parent = input.parentElement;
  let small = parent.querySelector("#errorText");

  parent.className = "formControl error";
  small.innerText = message;
}

function setSuccess(input){
  let parent = input.parentElement;
  parent.className = "formControl success";
}

function SubmitEvent(usernameInput, isEmailValid, emailInput, passwordInput, confirmPasswordInput){
  if(usernameInput !== "" && isEmailValid.test(emailInput) && passwordInput !== "" && passwordInput === confirmPasswordInput && confirmPasswordInput !== ""){
    document.querySelector(".title").textContent = "Account Created Successfully!";
    form.style.display = "none";
  }
}