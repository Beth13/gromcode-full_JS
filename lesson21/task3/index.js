export function getItemList() {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
}
getItemList();

export function getItemsArray() {
  const elementsArray = document.querySelectorAll(".tool");
  const arr = Array.from(elementsArray);
  console.dir(arr);
  return arr;
}

getItemsArray();
