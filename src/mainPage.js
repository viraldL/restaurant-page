import { gsap } from "gsap";

const mainLoad = function() {
    const mainContent = document.querySelector("#content");
    mainContent.innerHTML = "";
    mainContent.setAttribute("class", "");
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("mainLoad");
    const h2 = document.createElement("h2");
    h2.textContent = "Sapore Italiano";

    const p = document.createElement("p");
    p.textContent = "Welcome to Sapore Italiano, where the warm ambiance of an authentic Italian trattoria meets the flavors of a traditional Italian kitchen. Our menu features classic dishes made with the freshest and most authentic ingredients, from handmade pasta to wood-fired pizzas and the finest wines from all regions of Italy.";
    mainDiv.appendChild(h2);
    mainDiv.appendChild(p);
    mainContent.appendChild(mainDiv);
    gsap.from(".mainLoad", {duration: 1, opacity: 0, y: 50})
    console.log("module work!")
}

export default mainLoad;