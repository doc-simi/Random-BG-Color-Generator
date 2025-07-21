/////
//// Select elements

const btnGenerate = document.querySelector(".generate");
const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");

let currentBgColor = document.querySelector("body");

// DEFAULTS
btnNext.disabled = true;
btnPrevious.disabled = true;

// Global Variables
let activeBgColorCounter = 0;
let activeBgColor;
let randomBgColor = [];

////////// FUNCTIONS

// Generate random bgColors
const generateBgColor = function () {
  const color = () =>
    Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));

  // Code did not work because i used the let keyword
  // let randomBgColor = Array.from({ length: 10 }, () => color());
  randomBgColor = Array.from({ length: 10 }, () => color());

  // Dsiable previous counter
  btnPrevious.disabled = true;

  // Reset counter
  activeBgColorCounter = 0;

  // Change bgColor
  changeBgColor();

  // Enable next button
  btnNext.disabled = false;
};

const nextColor = function () {
  if (activeBgColorCounter < 9) {
    // Increae counter
    activeBgColorCounter++;

    // change bgcolor
    changeBgColor();
  }
  if (activeBgColorCounter === 9) btnNext.disabled = true;
  btnPrevious.disabled = false;
};

const previousColor = function () {
  if (activeBgColorCounter > 0) {
    // Increae counter
    activeBgColorCounter--;

    // change bgcolor
    changeBgColor();
  }
  if (activeBgColorCounter === 0) btnPrevious.disabled = true;
  btnNext.disabled = false;
};

const changeBgColor = function () {
  activeBgColor = randomBgColor[activeBgColorCounter];
  currentBgColor.style.backgroundColor = `rgb(${activeBgColor.join(",")})`;
  document.querySelector(".text").textContent = `Color ${
    activeBgColorCounter + 1
  }`;
};

///// EVENT LISTENERS
btnGenerate.addEventListener("click", generateBgColor);
btnNext.addEventListener("click", nextColor);
btnPrevious.addEventListener("click", previousColor);
