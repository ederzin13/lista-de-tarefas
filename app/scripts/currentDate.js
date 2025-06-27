const input = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];

input.min = today;

export { input };
