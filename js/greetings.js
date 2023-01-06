const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const button = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginInput.classList.add(HIDDEN_CLASSNAME);
  button.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  button.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
  loginInput.classList.add(HIDDEN_CLASSNAME);
  button.classList.add(HIDDEN_CLASSNAME);
}
