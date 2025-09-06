let currentImage = "";

document.querySelectorAll(".images img").forEach((image)=>{
  image.addEventListener("click", ()=>{
    currentImage = image.src;
    document.querySelector(".image-display img").src=currentImage;
  })
})
