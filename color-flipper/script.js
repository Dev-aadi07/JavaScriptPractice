// All possible hexadecimal characters
const HEX_CHARS = "0123456789ABCDEF";

// DOM Elements
const result = document.getElementById("result");
const changeBtn = document.getElementById("btn");

// -------------------------
// Generate a random HEX color
// -------------------------
function generateRandomColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * HEX_CHARS.length);
    color += HEX_CHARS[randomIndex];
  }

  return color;
}

// -------------------------
// Apply the color everywhere
// -------------------------
function applyColor(color) {
  document.body.style.backgroundColor = color;

  result.textContent = color;
  result.style.backgroundColor = color;

  // Save for next visit
  localStorage.setItem("bgColor", color);
}

// -------------------------
// Change to a new random color
// -------------------------
function updateBackgroundColor() {
  const color = generateRandomColor();
  applyColor(color);
}

// -------------------------
// Copy current color
// -------------------------
function copyColor() {
  const currentColor = result.textContent;

  navigator.clipboard.writeText(currentColor);

  result.textContent = "Copied!";

  setTimeout(() => {
    result.textContent = currentColor;
  }, 1000);
}

// -------------------------
// Load saved color on startup
// -------------------------
function loadSavedColor() {
  const savedColor = localStorage.getItem("bgColor");

  if (savedColor) {
    applyColor(savedColor);
  }
}

// -------------------------
// Event Listeners
// -------------------------
changeBtn.addEventListener("click", updateBackgroundColor);

result.addEventListener("click", copyColor);

// -------------------------
// Initialize App
// -------------------------
loadSavedColor();