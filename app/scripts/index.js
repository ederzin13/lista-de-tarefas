import { Task } from "./Task.js";

const form = document.getElementById("form");

function newTask(title, date, time, content) {
    let task = new Task(title, date, time, content);

    return task;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    let task = newTask(title, date, time, content);

    console.log(task);
});
