const tasks = [
  { text: "Buy milk", done: false, id: 1 },
  { text: "Pick up Tom from airport", done: false, id: 2 },
  { text: "Visit party", done: false, id: 3 },
  { text: "Visit doctor", done: true, id: 4 },
  { text: "Buy meat", done: true, id: 5 },
];

const listElem = document.querySelector(".list");
const checkbox = document.querySelector(".list__item-checkbox");
const buttonELem = document.querySelector(".create-task-btn");

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add("list__item-checkbox");
      listItemElem.append(checkbox, text);

      if (done) {
        listItemElem.classList.add("list__item_done");
      }

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const changeTaskStatus = (event) => {
  const taskId = Number(event.target.dataset.id);
  const currentTask = tasks.find((task) => task.id === taskId);
  currentTask.done = !currentTask.done;
  renderTasks(tasks);
};

listElem.addEventListener("change", changeTaskStatus);

const addTasks = () => {
  const inputElem = document.querySelector(".task-input");
  const obj = {};
  const newInput = inputElem.value;

  if (!newInput) {
    return;
  }

  obj.text = newInput;
  obj.done = false;
  obj.id = tasks.length + 1;
  tasks.unshift(obj);
  inputElem.value = "";
  renderTasks(tasks);
};

buttonELem.addEventListener("click", addTasks);

// algo

// Добавить id

// 1
// Добавить addEventListener("click", addTasks) на кнопку чтобы добавлять эл.
// В addTasks создавать новый объект в который записывать значение с инпута и по дефолту проставлять сатус false
// Если в инпут не передают ничего то выходить из функции
// inputElem.value = "";
// Вызываю renderTasks(tasks)

// 2
// Добавить addEventListener("change", changeFunc) чтобы менялся статус чекбокса при клике на него
// Создаю переменную и переобразовываю значение event.target.dataset.id со стринга в число
// Создаю currentTask и прохожусь по массиву тасков и ищу первую айди что совпала со значением
// Меняю currentTask.done = !currentTask.done
// Опять вызываю renderTasks(tasks)
