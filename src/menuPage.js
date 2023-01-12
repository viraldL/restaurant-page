import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuLoad = function() {
    const mainContent = document.querySelector("#content");
    mainContent.innerHTML = "";
    mainContent.classList.add("menu");
    const div = document.createElement("div");
    div.classList.add("menuLoad")
    const content = `<div class="dish">
    <img src="./images/pizza/margarita.png" alt="Pizza image">
    <div class="right">
        <h4>Margherita Pizza</h4>
        <p class="desc">Tomato sauce, mozzarella, basil, and olive oil</p>
        <div class="sizes">
            <span>
                <p>12"</p>
                <p>10$</p>
            </span>
            <span>
                <p>14"</p>
                <p>13$</p>
            </span>
            <span>
                <p>16"</p>
                <p>14$</p>
            </span>
        </div>
    </div>
</div>

<div class="dish">
    <img src="./images/pizza/pepperoni.png" alt="Pizza image">
    <div class="right">
        <h4>Pepperoni Pizza</h4>
        <p class="desc">Tomato sauce, mozzarella, pepperoni, and oregano</p>
        <div class="sizes">
            <span>
                <p>12"</p>
                <p>12$</p>
            </span>
            <span>
                <p>14"</p>
                <p>15$</p>
            </span>
            <span>
                <p>16"</p>
                <p>18$</p>
            </span>
        </div>
    </div>
</div>

<div class="dish">
    <img src="./images/pizza/hawaii.png" alt="Pizza image">
    <div class="right">
        <h4>Hawaiian Pizza</h4>
        <p class="desc">Tomato sauce, mozzarella, pineapple, bacon and ham</p>
        <div class="sizes">
            <span>
                <p>12"</p>
                <p>11$</p>
            </span>
            <span>
                <p>14"</p>
                <p>14$</p>
            </span>
            <span>
                <p>16"</p>
                <p>16$</p>
            </span>
        </div>
    </div>
</div>

<div class="dish">
    <img src="./images/pizza/hot_pepperoni.png" alt="Pizza image">
    <div class="right">
        <h4>Hot Pepperoni Pizza</h4>
        <p class="desc">Tomato sauce, mozzarella, pepperoni, and oregano, chilli pepper</p>
        <div class="sizes">
            <span>
                <p>12"</p>
                <p>14$</p>
            </span>
            <span>
                <p>14"</p>
                <p>17$</p>
            </span>
            <span>
                <p>16"</p>
                <p>20$</p>
            </span>
        </div>
    </div>
</div>`
    div.innerHTML = content;
    mainContent.appendChild(div);
    gsap.from(".menuLoad", { delay: 0.5, duration: 0.5, opacity: 0});
}

const menuAnimation = function() {
    const dishes = gsap.utils.toArray('.dish');
    dishes.forEach(dish => {
        gsap.from(dish, {duration: 0.5, opacity: 0, x: -20, scrollTrigger: {
            scroller: ".menuLoad",
            trigger: dish,
            toggleActions: "play reverse restart reverse",
            start: "top center",
            end: "bottom",
        }})
    })
}

export { menuLoad, menuAnimation };