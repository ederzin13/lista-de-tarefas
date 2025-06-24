import { Task } from "./Task.js";

const form = document.getElementById("form");
const modalAlert = document.getElementById("modalAlert");

function newTask(title, date, time, content) {
    let task = new Task(title, date, time, content);

    return task;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const content = document.getElementById("content").value;

    if (!title || !date || !time || !content) {
        modalAlert.showModal();
        return;
    }

    let task = newTask(title, date, time, content);

    console.log(task);
});
