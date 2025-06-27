import { Task } from "../model/Task.js";
import { clear } from "./cleanForm.js";
import { Storage } from "../model/Storage.js";
import { input } from "./currentDate.js";

const form = document.getElementById("form");
const modalAlert = document.getElementById("modalAlert");

const storage = new Storage();

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

    storage.addTask(task);

    storage.save();

    form.reset();
});
