"use strict";

const buttonElem = document.querySelectorAll(".pagination__page");
const buttonArr = Array.from(buttonElem);

function handleClick(event) {
  console.log(event.target.dataset.pageNumber);
}

buttonArr.map((button) => button.addEventListener("click", handleClick));
