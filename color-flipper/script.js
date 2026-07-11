const hex = "0123456789ABCDEF";

const res = document.getElementById("result");
const btn = document.getElementById("btn");


function updateBgColor() {
  let color = "#";
  
  for (let i = 0; i<6; i++) {
    randomIdx = Math.floor(Math.random()*hex.length);
    color = color+hex.charAt(randomIdx);
  }
  
  document.body.style.backgroundColor = color;
  res.textContent = color;
  res.style.backgroundColor = color;
}

btn.addEventListener("click", updateBgColor);