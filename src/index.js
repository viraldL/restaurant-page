import mainLoad from "./mainPage.js";
import { menuLoad, menuAnimation } from "./menuPage.js";
import contactLoad from "./contactPage.js";

const load = (function(){
    window.addEventListener("DOMContentLoaded", () => {
        mainLoad();
    });
})();

const displayController = (function(){
    const homeBtn = document.querySelector("#homeBtn");
    const menuBtn = document.querySelector("#menuBtn");
    const contactBtn = document.querySelector("#contactBtn");
    const dishMenu = document.querySelector(".menuLoad");

    homeBtn.addEventListener("click", () => {
        mainLoad();
    })
    menuBtn.addEventListener("click", () => {
        menuLoad();
        setTimeout(() => {
            menuAnimation();
        }, 500);
    })
    contactBtn.addEventListener("click", () => {
        contactLoad();
    })
})();

