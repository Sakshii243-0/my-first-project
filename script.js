// Dark Mode Toggle

const themeBtn = document.getElementById("themeBtn");

let darkMode = true;

themeBtn.addEventListener("click", () => {

    if (darkMode) {

        document.body.style.background = "#f8fafc";
        document.body.style.color = "#111827";

        document.querySelector("header").style.background = "rgba(255,255,255,0.9)";

        document.querySelectorAll(".card").forEach(card => {
            card.style.background = "#ffffff";
            card.style.color = "#111827";
        });

        document.querySelectorAll(".project-card").forEach(card => {
            card.style.background = "#ffffff";
            card.style.color = "#111827";
        });

        document.querySelector("footer").style.background = "#e5e7eb";
        document.querySelector("footer").style.color = "#111827";

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        darkMode = false;

    } else {

        document.body.style.background = "#0f172a";
        document.body.style.color = "#ffffff";

        document.querySelector("header").style.background = "rgba(15,23,42,.9)";

        document.querySelectorAll(".card").forEach(card => {
            card.style.background = "#1e293b";
            card.style.color = "#ffffff";
        });

        document.querySelectorAll(".project-card").forEach(card => {
            card.style.background = "#1e293b";
            card.style.color = "#ffffff";
        });

        document.querySelector("footer").style.background = "#020617";
        document.querySelector("footer").style.color = "#94a3b8";

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        darkMode = true;

    }

});


// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.boxShadow = "none";

    }

});


// Fade In Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});


// Greeting

console.log("Welcome to Sakshi's Portfolio 🚀");