"use strict";

const buttonElem = document.querySelectorAll(".btn");

function handleClick(event) {
  console.log(event.target.textContent);
}

const buttonsArrays = Array.from(buttonElem);
buttonsArrays.map((button) => button.addEventListener("click", handleClick));
