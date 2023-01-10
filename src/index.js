import { gsap } from "gsap";
import mainLoad from "./mainPage.js";

const homeBtn = document.querySelector("#homeBtn");

homeBtn.addEventListener("click", () => {
    console.log("work");
    mainLoad();
});