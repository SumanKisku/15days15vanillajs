const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// const futureDate = new Date(2023, 1, 14, 12, 30, 00);

let year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
let date = futureDate.getDate();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let weekday = weekdays[futureDate.getDay()];

giveaway.innerText = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${format(hours)}:${format(minutes)}am`

let countdown = setInterval(setTimeRemaining, 1000)

function setTimeRemaining() {
  let futureTime = futureDate.getTime();
  let currentTime = new Date().getTime();
  
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  
  let millisecondsLeft = futureTime - currentTime;
  
  let daysLeft = Math.floor(millisecondsLeft / day);
  let hoursLeft = Math.floor(millisecondsLeft % day / hour);
  let minutesLeft = Math.floor(millisecondsLeft % hour / minute);
  let secondsLeft = Math.floor(millisecondsLeft % minute / 1000);
  
  const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  })

  if(millisecondsLeft < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4>Sorry deadline passed</h4>`;
  }

}

function format(item) {
  if(item < 10) {
    return `0${item}`
  }
  return item;
}

setTimeRemaining();