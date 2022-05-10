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

const onSearchUser = async () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;

  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }
};

showUserByElem.addEventListener("click", onSearchUser);
