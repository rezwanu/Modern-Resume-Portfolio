// Word Trasition Effect
document.addEventListener("DOMContentLoaded", () => {
    const roles = [
        "Web Developer",
        "Software Engineer",
        "Full Stack Developer",
    ];
    const roleElement = document.getElementById("role");
    let roleIndex = 0;
    let letterIndex = 0;
    let typingInterval;

    function typeRole() {
        roleElement.style.opacity = 0;
        setTimeout(() => {
            roleElement.textContent = "";
            letterIndex = 0;
            typingInterval = setInterval(() => {
                if (letterIndex < roles[roleIndex].length) {
                    roleElement.textContent += roles[roleIndex].charAt(letterIndex);
                    letterIndex++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        roleIndex = (roleIndex + 1) % roles.length;
                        typeRole();
                        roleElement.style.opacity = 1;
                    }, 1000);
                }
            }, 150);
            roleElement.style.opacity = 1;
        }, 500);
    }

    // start typing the first role
    typeRole();
});

// project filter
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".project-list li");
    const projects = document.querySelectorAll(".project-box");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            projects.forEach((project) => {
                if (
                    filter === "all" ||
                    project.getAttribute("data-category") === filter
                ) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});


// testimonials slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
    },
});

// Dark light mode
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".dark-light-btn");
    const htmlElement = document.documentElement;

    const currentMode = localStorage.getItem("mode");

    if (currentMode === "light") {
        htmlElement.classList.add("light-mode");
        toggleButton.innerHTML = '<i class="fa-regular fa-moon"></i>';
    }

    toggleButton.addEventListener("click", () => {
        htmlElement.classList.toggle("light-mode");

        // update the button icon
        const isLightMode = htmlElement.classList.contains("light-mode");
        toggleButton.innerHTML = isLightMode ? '<i class="fa-regular fa-moon"></i>' : '<i class="fa-regular fa-sun"></i>';

        // Store the current mode in local storage
        localStorage.setItem("mode", isLightMode ? "light" : "dark");
    });
});

// nav auto active on their section
const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("ul li a");

function setActiveLink() {
    let currentSection = "";

    section.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", setActiveLink);


// AOS instal
AOS.init();