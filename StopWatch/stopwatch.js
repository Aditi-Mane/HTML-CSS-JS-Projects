//initializing all as 0
let seconds = 0;
let minutes = 0;
let hours = 0;

//adding an extra padding for single digit numbers
let padSeconds = seconds.toString().padStart(2, '0');
let padMinutes = minutes.toString().padStart(2, '0');
let padHours = hours.toString().padStart(2, '0');

//initial display
document.querySelector(".box").innerText = `${padHours}:${padMinutes}:${padSeconds}`;

//toggle between play and pause
let image = document.querySelector(".btns img");
let isTicking = true;
let timerId;

image.addEventListener("click",()=>{
  if(isTicking){
    image.src = "pause.png";
    timerId = setInterval(stopWatchStart, 1000);
    stopWatchStart();
  } else {
    image.src = "play.png";
    clearInterval(timerId);
  }
  isTicking = !isTicking;
})

function stopWatchStart() {
  // increase seconds
  seconds++;

  // rollover seconds → minutes
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  // rollover minutes → hours
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // pad values
  let padSeconds = seconds.toString().padStart(2, '0');
  let padMinutes = minutes.toString().padStart(2, '0');
  let padHours   = hours.toString().padStart(2, '0');

  // update display once
  document.querySelector(".box").innerText = `${padHours}:${padMinutes}:${padSeconds}`;
}

//reset button
document.querySelector(".btns button").addEventListener("click",()=>{
  seconds = 0;
  minutes = 0;
  hours = 0;

  // stop the interval if running
  clearInterval(timerId);
  isTicking = false;
  image.src = "play.png"; // reset icon too

  // pad values
  let padSeconds = seconds.toString().padStart(2, '0');
  let padMinutes = minutes.toString().padStart(2, '0');
  let padHours   = hours.toString().padStart(2, '0');

  // update display once
  document.querySelector(".box").innerText = `${padHours}:${padMinutes}:${padSeconds}`;
})




