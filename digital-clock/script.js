const clck = document.querySelector(".clock");
const dayElement = document.querySelector(".day");
const dinank = document.querySelector(".date");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

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
    "December"
  ];

function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let day = now.getDay();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  const amPm = hours>=12 ? "PM" : "AM";

  hours = hours%12;
  hours = hours === 0 ? 12 : hours;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  clck.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
  dayElement.textContent = days[day];
  dinank.textContent = `${date} ${months[month]} ${year}`;
}

updateTime();
setInterval(updateTime, 1000);