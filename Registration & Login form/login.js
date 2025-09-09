document.querySelectorAll(".status button").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Register") {
      document.querySelector(".register").style.display = "block";
      document.querySelector(".status").style.display = "none";
    } else if (btn.innerText === "Login") {
      document.querySelector(".login").style.display = "block";
      document.querySelector(".status").style.display = "none";
    }
  });
});

document.querySelector(".go-to-register").addEventListener("click", ()=>{
  document.querySelector(".register").style.display = "block";
  document.querySelector(".login").style.display = "none";
})

document.querySelector(".go-to-login").addEventListener("click", ()=>{
  document.querySelector(".login").style.display = "block";
  document.querySelector(".register").style.display = "none";
})

document.getElementById("Submit").addEventListener("click", (event) => {
  const nameInp = document.getElementById("name").value.trim();
  const pass = document.getElementById("password_reg").value.trim();
  const c_pass = document.getElementById("confirm_pass").value.trim();

  // get all error spans
  const errors = document.querySelectorAll(".error");
  errors.forEach(err => { 
    err.innerText = "";          // clear previous text
    err.style.display = "none";  // hide errors
  });

  let isValid = true; // assume valid

  //validate name 
  if (nameInp === "") {
    errors[0].innerText = "Name is required";
    errors[0].style.display = "inline";
    isValid = false;
  } else if (nameInp.length < 4) {
    errors[0].innerText = "Minimum 4 characters required";
    errors[0].style.display = "inline";
    isValid = false;
  }

  // validate password match
  if (pass !== c_pass) {
    errors[2].innerText = "Passwords don't match";
    errors[2].style.display = "inline";
    isValid = false;
  }

  // only prevent submission if invalid
  if (!isValid) {
    event.preventDefault();
  } else {
    alert("Submission successful! ")
    document.body.innerHTML = "<h1 style='text-align:center; margin-top:20%'>Registered successful!</h1>";
  }
});

document.getElementById("loginID").addEventListener("click", (event)=>{
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  document.querySelectorAll(".login .error").forEach((err)=>{
    err.innerText="";
    err.style.display="none";
  })

  let Validity = true;

  //checking password validity
  if(password === ""){
    document.querySelectorAll(".login .error")[1].innerText = "No password entered";
    document.querySelectorAll(".login .error")[1].style.display = "inline";
    Validity = false;
  } else  if(password.length < 6){
    document.querySelectorAll(".login .error")[1].innerText = "Enter 6 characters atleast";
    document.querySelectorAll(".login .error")[1].style.display = "inline";
    Validity = false;
  } 

  if(!Validity){
    event.preventDefault();
  } else {
    alert("Login successful! ");
    document.body.innerHTML = "<h1 style='text-align:center; margin-top:20%'>Login successful!</h1>";
  }
})


