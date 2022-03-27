"use strict";

export function manageClasses() {
  const elemLi1 = document.querySelector(".one");
  elemLi1.classList.add("selected");

  const elemLi2 = document.querySelector(".two");
  elemLi2.classList.remove("selected");

  const elemLi3 = document.querySelector(".three");
  elemLi3.classList.toggle("three_done");

  const elemLi4 = document.querySelector(".four");
  if (elemLi4.classList.contains("some-class")) {
    elemLi4.classList.add("another-class");
  }
}
