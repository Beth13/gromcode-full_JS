"use strict";

const divElem = document.querySelector([".rect_div"]);
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

const divArea = document.querySelector(".events-list");
const buttonClear = document.querySelector(".clear-btn");
const buttonAttach = document.querySelector(".attach-handlers-btn");
const buttonRemove = document.querySelector(".remove-handlers-btn");

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector(".events-list");

  eventsListElem.innerHTML += `<span style ="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

//CLEAR
const clearElements = () => {
  divArea.innerHTML = "";
};

buttonClear.addEventListener("click", clearElements);

//ATTACH
const attachHandlers = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);

  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);

  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};

document.addEventListener("DOMContentLoaded", () => {
  attachHandlers();
});

buttonAttach.addEventListener("click", attachHandlers);

//REMOVE
const removeHandlers = () => {
  divElem.removeEventListener("click", logGreyDiv, true);
  divElem.removeEventListener("click", logGreenDiv);

  pElem.removeEventListener("click", logGreyP, true);
  pElem.removeEventListener("click", logGreenP);

  spanElem.removeEventListener("click", logGreySpan, true);
  spanElem.removeEventListener("click", logGreenSpan);
};

buttonRemove.addEventListener("click", removeHandlers);
