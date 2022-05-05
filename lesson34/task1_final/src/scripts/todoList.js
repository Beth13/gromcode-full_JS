import { onCreateTask } from "./createTask.js";
import { onToggleTask } from "./updateTask.js";
import { onDeleteTask } from "./deleteTask.js";
import { deleteTask } from "./tasksGateway.js";

const todoListElem = document.querySelector(".list");

export const onClickTask = (event) => {
  if (event.target.classList.contains("list-item__checkbox")) {
    todoListElem.addEventListener("click", onToggleTask);
  } else if (event.target.classList.contains("list-item__delete-btn")) {
    const deleteBtnElem = document.querySelector(".list-item__delete-btn");
    deleteBtnElem.addEventListener("click", onDeleteTask);
  }
};

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector(".create-task-btn");
  createBtnElem.addEventListener("click", onCreateTask);

  todoListElem.addEventListener("click", onClickTask);
};
