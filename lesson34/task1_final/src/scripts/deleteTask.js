// import { renderTasks } from "./renderer.js";
// import { getItem, setItem } from "./storage.js";
import { deleteTask, getTasksList } from "./tasksGateway.js";

export const onDeleteTask = (event) => {
  const listItemElem = document.querySelector(".list-item");
  const taskId = event.target.dataset.id;
  //   console.log(taskId);

  const deletedData = deleteTask(taskId).then((response) => response.json());

  if (deletedData) {
    listItemElem.remove();
  }

  //   console.log("Clicked");
};
