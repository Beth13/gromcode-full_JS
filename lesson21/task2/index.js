export function getTitleElement() {
  const titleElem = document.querySelectorAll(".title");
  console.dir(titleElem);
  return titleElem;
}

getTitleElement();

export function getInputElement() {
  const inputElem = document.getElementsByTagName("input")[0].value;
  console.dir(inputElem);
  return inputElem;
}

getInputElement();
