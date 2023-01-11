import { gsap } from "gsap";
import mainLoad from "./mainPage.js";

const load = (function(){
    window.addEventListener("DOMContentLoaded", () => {
        // mainLoad();
    });
})();

const displayController = (function(){
    const homeBtn = document.querySelector("#homeBtn");
    const menuBtn = document.querySelector("#menuBtn");
    const contactBtn = document.querySelector("#contactBtn");

    homeBtn.addEventListener("click", () => {
        console.log("witaj");
    })
})();

