document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("currentTasks");
    const tasks = JSON.parse(localStorage.getItem("tarefas")) || [];

    if (!div) return;

    if (tasks.length === 0) {
        div.innerHTML =
            "<p class='text-cream-dark md:text-h3'>Não há nenhuma tarefa -.-</p>";
        return;
    }

    tasks.forEach((task) => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow p-4";

        card.innerHTML = `
            <h2 class="text-xl font-bold">${task.title}</h2>
            <p>Data: ${task.date}</p>
            <p>Hora: ${task.time}</p>
            <p class="mt-2">${task.content}</p>
            `;

        div.appendChild(card);
    });
});
