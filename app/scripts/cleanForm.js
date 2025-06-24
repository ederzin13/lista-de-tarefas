let clear = document
    .querySelector("#clear")
    .addEventListener("click", function () {
        document.getElementById("form").reset();
        console.log("funciona");
    });

export { clear };
