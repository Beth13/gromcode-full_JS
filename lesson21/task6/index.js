export function setButton(buttonText) {
  const elemBody = document.querySelector("body");
  elemBody.innerHTML = `<button>${buttonText}</button>`;
}
setButton("Hi");
