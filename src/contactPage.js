import { gsap } from "gsap";

const contactLoad = function() {
    const mainContent = document.querySelector("#content");
    mainContent.innerHTML = "";
    mainContent.setAttribute("class", "");
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("contactLoad");
    const h2 = document.createElement("h2");
    h2.textContent = "Contact us:";

    const p = document.createElement("p");
    p.innerHTML = `Phone: <a href="tel:123456789">+48 12345678</a><br>
    Mail: <a href="mailto:sopel.sob19@wp.pl">sopel.sob19@wp.pl</a><br><br>
    <b>Monday</b>: 11:00 AM - 9:00 PM<br>
    <b>Tuesday</b>: 11:00 AM - 9:00 PM<br>
    <b>Wednesday</b>: 11:00 AM - 9:00 PM<br>
    <b>Thursday</b>: 11:00 AM - 9:00 PM<br>
    <b>Friday</b>: 11:00 AM - 10:00 PM<br>
    <b>Saturday</b>: 11:00 AM - 10:00 PM<br>
    <b>Sunday</b>: 11:00 AM - 9:00 PM`;
    mainDiv.appendChild(h2);
    mainDiv.appendChild(p);
    mainContent.appendChild(mainDiv);
    gsap.from(".contactLoad", {duration: 1, opacity: 0, y: 50})
    console.log("module work!")
}

export default contactLoad;