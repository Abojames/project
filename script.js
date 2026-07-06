// ================================
// HAMBURGER MENU
// ================================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ================================
// DARK / LIGHT MODE
// ================================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeToggle.textContent = "☀️";
    }else{
        themeToggle.textContent = "🌙";
    }

});

// ================================
// CONTACT FORM VALIDATION
// ================================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === ""){
        alert("Please enter your name.");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    if(subject === ""){
        alert("Please enter a subject.");
        return;
    }

    if(message === ""){
        alert("Please enter your message.");
        return;
    }

    alert("✅ Message submitted successfully!");

    form.reset();

});

// ================================
// HIGHLIGHT ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active-link");
        }

    });

});