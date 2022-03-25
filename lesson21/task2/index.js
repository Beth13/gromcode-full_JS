export function getTitleElement() {
  const titleElem = document.querySelectorAll(".title");
  console.dir(titleElem);
  return titleElem;
}

getTitleElement();

export function getInputElement() {
  const inputElem = document.querySelectorAll("input[type = 'text']");
  console.dir(inputElem);
  return inputElem;
}

getInputElement();
