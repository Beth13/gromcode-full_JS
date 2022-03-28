"use strict";

export function getSection(num) {
  const elemSpan = document.querySelector(`span[data-number="${num}"]`);

  if (elemSpan) {
    const elemDiv = elemSpan.closest(".box");
    return elemDiv.getAttribute("data-section");
  }
}
