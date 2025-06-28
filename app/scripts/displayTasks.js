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
        card.className = "card bg-orange shadow p-6 text-bg";

        card.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${task.title}</h3>
            <p><i class="fa-solid fa-calendar-days"></i> ${task.date}</p>
            <p><i class="fa-solid fa-clock"></i> ${task.time}</p>
            <p class="mt-2">${task.content}</p>
            `;

        div.appendChild(card);
    });
});
