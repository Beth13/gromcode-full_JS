"use strict";

export function finishForm() {
  const elemInput1 = document.querySelector("input");
  elemInput1.setAttribute("type", "password");

  const elemInput = document.createElement("input");
  elemInput.setAttribute("name", "login");
  const elemForm = document.querySelector(".login-form");
  elemForm.prepend(elemInput);
}

finishForm();
