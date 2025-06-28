//import { storage } from "/app/scripts/index.js";
import { Storage } from "../model/Storage.js";

const storage = new Storage();

const modalClear = document.getElementById("modalClear");

const displayModal = document
    .querySelector("#trashCan")
    .addEventListener("click", function () {
        modalClear.showModal();
    });

const cleanStorage = document
    .querySelector("#clearList")
    .addEventListener("click", function () {
        storage.clear();
        location.reload();
    });

export { modalClear, displayModal, cleanStorage };
