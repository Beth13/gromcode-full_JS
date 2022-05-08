const baseUrl = "https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users";

const formElem = document.querySelector(".login-form");
const buttonElem = document.querySelector(".submit-button");
const emailInput = document.querySelector('.form-input[name = "email"]');
const userNameInput = document.querySelector('.form-input[name = "name"]');
const userPassInput = document.querySelector('.form-input[name = "password"]');

// ----------------------------------------------------
const isFormValidCheck = () => {
  const isFormDone = formElem.reportValidity();

  if (isFormDone) {
    buttonElem.removeAttribute("disabled");
  }
};

// ----------------------------------------------------
formElem.addEventListener("input", isFormValidCheck);
// ----------------------------------------------------
function createUser(userData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

// ----------------------------------------------------
const onCreateUserHandler = (event) => {
  event.preventDefault();

  const newUser = {
    email: emailInput.value,
    userName: userNameInput.value,
    password: userPassInput.value,
  };

  const newUserStr = JSON.stringify(newUser);
  // console.log(newUserStr);

  createUser(newUserStr)
    .then((response) => response.json())
    .then((response) => alert(JSON.stringify(response)))
    .then(() => {
      emailInput.value = "";
      userNameInput.value = "";
      userPassInput.value = "";
    });
};

buttonElem.addEventListener("click", onCreateUserHandler);
