const result = document.getElementById("display");
const dec = document.getElementById("decre");
const inc = document.getElementById("incre");
const rst = document.getElementById("reset");


result.innerText = isNaN(localStorage.getItem("result"))?"0":localStorage.getItem("result");

function updateColor() {
  const num = parseInt(result.innerText);

  if (num > 0) {
    result.style.color = "green";
  } else if (num < 0) {
    result.style.color = "red";
  } else {
    result.style.color = "black"; // Color for zero
  }
}


function increase() {
  result.innerText = (isNaN(parseInt(result.innerText)) ? 0 : parseInt(result.innerText)) + 1;
  updateColor();
  localStorage.setItem("result", result.innerText);
}
function decrease() {
  result.innerText = (isNaN(parseInt(result.innerText)) ? 0 : parseInt(result.innerText)) - 1;
  updateColor();
  localStorage.setItem("result", result.innerText);
}
function reset() {
  result.innerText = 0;
  updateColor();
  localStorage.setItem("result", result.innerText);
}

inc.addEventListener("click", increase);
dec.addEventListener("click", decrease);
rst.addEventListener("click", reset);

//keyboard shortcuts
document.addEventListener("keydown", function(event){
  if (event.key === "ArrowUp") {
    increase();
  } else if(event.key === "ArrowDown") {
    decrease();
  } else if (event.code === "Space") {
    event.preventDefault();
    reset();
  }
});
