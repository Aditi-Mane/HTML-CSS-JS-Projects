document.querySelector("button").addEventListener("click",()=>{
  let randomNum_r = Math.floor(Math.random() * 256);
  let randomNum_g = Math.floor(Math.random() * 256);
  let randomNum_b = Math.floor(Math.random() * 256);
  document.querySelector(".box").style.backgroundColor = `rgb(${randomNum_r}, ${randomNum_g}, ${randomNum_b})`;
})
