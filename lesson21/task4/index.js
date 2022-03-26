export function getTitle() {
  const elemTitle = document.querySelector(".title");
  return elemTitle.textContent;
}

export function getDescription() {
  const elemDescription = document.querySelector(".about");
  return elemDescription.innerText;
}

export function getPlans() {
  const elemPlans = document.querySelector(".plans");
  return elemPlans.innerHTML;
}

export function getGoal() {
  const elemGoal = document.querySelector(".goal");
  return elemGoal.outerHTML;
}
