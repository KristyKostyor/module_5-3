"use strict";

const getUserInput = () => {
  return prompt("Введите строку");
};

const addItemToList = (item) => {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
};

const removeLastItem = () => {
  const list = document.getElementById("list");
  const lastItem = list.lastChild;
  list.removeChild(lastItem);
};

const clearList = () => {
  const list = document.getElementById("list");
  list.innerHTML = "";
};

const program = () => {
  while (true) {
    const input = getUserInput();

    if (input === null || input.toLowerCase() === "exit") {
      break;
    }

    if (input.toLowerCase() === "del") {
      removeLastItem();
    } else if (input.toLowerCase() === "clear") {
      clearList();
    } else if (input.trim() !== "") {
      addItemToList(input);
    }
  }
};

program();
