"use strict";

const buttonElem = document.querySelector(".single-use-btn");

function Info() {
  console.log("clicked");
  buttonElem.removeEventListener("click", Info);
}

buttonElem.addEventListener("click", Info);
