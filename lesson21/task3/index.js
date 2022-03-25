export function getItemsList() {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
}
getItemsList();

export function getItemsArray() {
  const elementsArray = document.querySelectorAll(".tool");
  const arr = Array.from(elementsArray);
  console.dir(arr);
  return arr;
}

getItemsArray();
