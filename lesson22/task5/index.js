"use strict";

const buttonElem = document.querySelector(".search__btn");
const inputElem = document.querySelector(".search__input");

function text() {
  console.log(inputElem.value);
}

buttonElem.addEventListener("click", text);
