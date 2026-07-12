const clck = document.querySelector(".clock");

function updateTime() {
  const now = new Date();

  const time = now.toLocaleTimeString();

  clck.textContent = time;
}

updateTime();

setInterval(updateTime, 1000);