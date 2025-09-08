document.querySelector(".button").addEventListener("click", () => {
  // hide all images
  document.querySelectorAll(".images img").forEach(img => {
    img.style.display = "none";
  });

  // check selected fruit directly
  if (document.querySelector(".fruits").value === "apple") {
    document.querySelectorAll(".images img")[0].style.display = "block";
  } else if (document.querySelector(".fruits").value === "banana") {
    document.querySelectorAll(".images img")[1].style.display = "block";
  } else if (document.querySelector(".fruits").value === "cherry") {
    document.querySelectorAll(".images img")[2].style.display = "block";
  }
});
