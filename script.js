/* ─── DOM refs ─────────────────────────────── */
const body = document.querySelector("body");
const colorInput = document.getElementById("color-picker");
const colorDiv = document.querySelector(".color-div");
const hiddenText = document.querySelector(".color-div p");
const resetBtn = document.querySelector(".color-div button");
const playBtn = document.getElementById("play-game");

/* ─── Game functions ───────────────────────── */
function playGame() {
  colorDiv.style.display = "flex";
  playBtn.style.display = "none";
}

function changeColor() {
  const selectedColor = colorInput.value;
  body.style.backgroundColor = selectedColor;
  resetBtn.style.display = "inline-flex";
  hiddenText.style.display = "block";
  colorInput.style.display = "none";
}

function resetColor() {
  body.style.backgroundColor = ""; /* fall back to CSS var --bg */
  hiddenText.style.display = "none";
  resetBtn.style.display = "none";
  colorInput.style.display = "block";
  playBtn.style.display = "inline-flex";
  colorDiv.style.display = "none";
}
