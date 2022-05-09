import { fetchUserData, fetchRepositories } from "./src/scripts/gateways.js";
import { renderUserData } from "./src/scripts/user.js";
import { cleanReposList, renderRepos } from "./src/scripts/repos.js";
import { showSpinner, hideSpinner } from "./src/scripts/spinner.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};

renderUserData(defaultUser);

const showUserByElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;

  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => renderRepos(reposList))
    .catch((err) => alert(err.message))
    .finally(() => hideSpinner());
};

showUserByElem.addEventListener("click", onSearchUser);
