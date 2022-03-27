"use strict";

export function squaredNumbers() {
  const elemLi = document.querySelectorAll(".number");
  const elemArr = Array.from(elemLi);

  elemArr.forEach((elem) => {
    const elemNumber = elem.dataset.number;
    elem.dataset.squaredNumber = elemNumber * elemNumber;
  });
}
