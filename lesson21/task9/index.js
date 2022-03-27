"use strict";

export function finishList() {
  const elemList = document.createElement("li");

  elemList.textContent = "1";
  const list = document.querySelector(".list");
  list.prepend(elemList);

  const elemList1 = document.createElement("li");
  elemList1.textContent = "4";
  const list5 = document.querySelector(".special");
  list5.before(elemList1);

  const elemList2 = document.createElement("li");
  elemList2.textContent = "6";
  list5.after(elemList2);

  const elemList3 = document.createElement("li");
  elemList3.textContent = "8";
  list.append(elemList3);
}

finishList();
