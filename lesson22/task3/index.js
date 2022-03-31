"use strict";

const inputElem = document.querySelector(".text-input");

function changeClick() {
  const text = inputElem.value;
  console.log(text);
}

inputElem.addEventListener("change", changeClick);
