"use strict";

const checkBoxElem = document.querySelector(".task-status");

function checkClick(event) {
  console.log(checkBoxElem.checked);
  console.log(event.target.value);
}

checkBoxElem.addEventListener("change", checkClick);
