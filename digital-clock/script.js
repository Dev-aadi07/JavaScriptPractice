const clck = document.querySelector(".clock");
const dayElement = document.querySelector(".day");
const dinank = document.querySelector(".date");
const toggleBtn = document.querySelector(".toggle");
const greetingElement = document.querySelector(".greet");
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

const greet = [
  "Good Morning ☀️",
  "Good Afternoon 🌤️",
  "Good Evening 🌆",
  "Good Night 🌙"
];

function updateTime() {
  const now = new Date();
  const currentHour = now.getHours();
  if(currentHour < 12) {
    greetingElement.textContent = greet[0];
    document.body.style.backgroundColor = "Light Yellow";
    greetingElement.style.backgroundColor = "Light Yellow";
  } else if(currentHour < 17) {
    greetingElement.textContent = greet[1];
    document.body.style.backgroundColor = "Sky Blue";
    greetingElement.style.backgroundColor = "Sky Blue";
  } else if(currentHour < 21) {
    greetingElement.textContent = greet[2];
    document.body.style.backgroundColor = "Orange";
    greetingElement.style.backgroundColor = "Orange";
  } else {
    document.body.style.backgroundColor = "Dark Blue";
    greetingElement.textContent = greet[3];
    greetingElement.style.backgroundColor = "Dark Blue";
  }

  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  let day = now.getDay();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  
  const separator = now.getSeconds() % 2 === 0 ? ":" : " ";

  if (is24Hour) {
    clck.textContent = `${hours}${separator}${minutes}${separator}${seconds}`;
  }
  else {
    const amPm = hours>=12 ? "PM" : "AM";
    hours = hours%12;
    hours = hours === 0 ? 12 : hours;
    clck.textContent = `${hours}${separator}${minutes}${separator}${seconds} ${amPm}`;
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