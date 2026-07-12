const clck = document.querySelector(".clock");
const dayElement = document.querySelector(".day");
const dinank = document.querySelector(".date");
const toggleBtn = document.querySelector(".toggle");
let is24Hour = false;

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

  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  let day = now.getDay();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  
  if (is24Hour) {
    clck.textContent = `${hours}:${minutes}:${seconds}`;
  }
  else {
    const amPm = hours>=12 ? "PM" : "AM";
    hours = hours%12;
    hours = hours === 0 ? 12 : hours;
    clck.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
  }

  dayElement.textContent = days[day];
  dinank.textContent = `${date} ${months[month]} ${year}`;
}

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;

  if (is24Hour) {
    toggleBtn.textContent = "12H";
  } else {
    toggleBtn.textContent = "24H";
  }

  updateTime();
});

updateTime();
setInterval(updateTime, 1000);