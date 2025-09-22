let count = parseInt(document.querySelector("p").innerText.split(" ")[2]);
let increment = document.querySelectorAll("button")[0];
let decrement = document.querySelectorAll("button")[1];
let reset = document.querySelectorAll("button")[2];

increment.addEventListener("click",()=>{
  count++;
  document.querySelector("p").innerHTML = document.querySelector("p").innerText.split(" ").slice(0,-1).concat(count).join(" ");
})

decrement.addEventListener("click",()=>{
  count--;
  document.querySelector("p").innerHTML = document.querySelector("p").innerText.split(" ").slice(0,-1).concat(count).join(" ");
})

reset.addEventListener("click",()=>{
  count = 0;
  document.querySelector("p").innerHTML = document.querySelector("p").innerText.split(" ").slice(0,-1).concat(count).join(" ");
})