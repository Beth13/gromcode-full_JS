"use strict";

const buttonElem = document.querySelector(".single-use-btn");

function InfoButton() {
  console.log("clicked");
  buttonElem.removeEventListener("click", InfoButton);
}

buttonElem.addEventListener("click", InfoButton);
