let currentInput = "";
document.querySelector(".enter").innerHTML = "ENTER INPUT";

document.querySelectorAll(".grid button").forEach((btn)=>{
  btn.addEventListener("click" ,()=>{

    //for the CLEAR button
    if (btn.innerText === "CLEAR"){
      currentInput = "";
      document.querySelector(".enter").innerHTML = "ENTER INPUT";
      document.querySelector(".answer").innerHTML = currentInput;

    //for the DELETE button
    } else if(btn.innerText === "DEL"){
      currentInput = currentInput.slice(0, -1);
      document.querySelector(".enter").innerHTML = currentInput;

    //for the equal to button - main computation part
    } else if(btn.innerText === "="){
      try {
        // Use Function constructor to safely evaluate math expression
        currentInput = Function(`"use strict"; return (${currentInput})`)();
        document.querySelector(".answer").innerHTML = currentInput;
      } catch (error) {
        document.querySelector(".answer").innerHTML = "Error";
        currentInput = "";
      }
    } else {

      //for rest of the buttons
      currentInput=currentInput + btn.innerText;
      document.querySelector(".enter").innerHTML = currentInput;
    }
  })
})

