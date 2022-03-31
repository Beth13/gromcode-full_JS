"use strict";

const checkBoxElem = document.querySelector(".task-status");

function checkClick() {
  console.log(checkBoxElem.checked);
  //   console.log(checkBoxElem.value);
}

checkBoxElem.addEventListener("change", checkClick);
