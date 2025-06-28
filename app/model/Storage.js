export class Storage {
    existingTasks = JSON.parse(localStorage.getItem("tarefas")) || [];

    addTask(task) {
        this.existingTasks.push(task);
    }

    save() {
        localStorage.setItem("tarefas", JSON.stringify(this.existingTasks));
    }

    clear() {
        localStorage.clear();
    }
}
