export function setButton(buttonText) {
  const elemBody = document.body;
  elemBody.innerHTML = `<button> ${buttonText} </button>`;
}
setButton("Hi");

// export function setButtonText(buttonText) {
//   const elemBodyText = document.body;
//   elemBodyText.textContent = `<button> ${buttonText} </button>`;
// }
// setButtonText("Hi");
