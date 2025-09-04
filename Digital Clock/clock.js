let is24hour = true;

const showTime = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  if (!is24hour) {
    let suffix = "am";

    if (hours === 0) {
      hours = 12;
      suffix = "am";
    } else if (hours === 12) {
      suffix = "pm";
    } else if (hours > 12) {
      hours = hours - 12;
      suffix = "pm";
    }

    hours = hours.toString().padStart(2, '0');
    document.querySelector(".clock").innerHTML = `${hours}:${minutes}:${seconds} ${suffix}`;
  } else {
    hours = hours.toString().padStart(2, '0');
    document.querySelector(".clock").innerHTML = `${hours}:${minutes}:${seconds}`;
  }
};

setInterval(showTime, 1000);
showTime();

document.querySelector(".btn12").addEventListener("click", () => {
  is24hour = false;
  showTime();
});

document.querySelector(".btn24").addEventListener("click", () => {
  is24hour = true;
  showTime();
});


