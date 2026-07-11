const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "pink",
  "violet",
  "cyan",
  "brown",
  "black"
];

const res = document.getElementById("result");
const btn = document.getElementById("btn");


function updateBgColor() {
  const randomIndx = Math.floor(Math.random()*colors.length);
  const color = colors[randomIndx];
  document.body.style.backgroundColor = color;
  res.textContent = color;
  res.style.backgroundColor = color;
}

btn.addEventListener("click", updateBgColor);