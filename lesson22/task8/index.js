"use strict";

const elemInput = document.querySelector(".text-input");

function infoInput(event) {
  console.log(event.target.value);
}

elemInput.addEventListener("change", infoInput);
