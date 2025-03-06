document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll("#tecs img");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show-icon");
                } else {
                    entry.target.classList.remove("show-icon");
                }
            });
        },
        { threshold: 0.3 }
    );

    icons.forEach((icon) => {
        observer.observe(icon);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animação para os ícones em #tecs
    const icons = document.querySelectorAll("#tecs img");

    if (icons.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show-icon");
                    } else {
                        entry.target.classList.remove("show-icon");
                    }
                });
            },
            { threshold: 0.3 }
        );

        icons.forEach((icon) => {
            observer.observe(icon);
        });
    }

    // Animação para as seções ao rolar a página
    const sections = document.querySelectorAll("section");

    function checkScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        });
    }

    if (sections.length > 0) {
        window.addEventListener("scroll", checkScroll);
        checkScroll(); 
    }

    const elements = document.querySelectorAll(".animar-topo");

    if (elements.length > 0) {
        const observerTopo = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.boundingClientRect.top < 50) {
                        entry.target.classList.add("hidden");
                    } else {
                        entry.target.classList.remove("hidden");
                    }
                });
            },
            { root: null, threshold: 0.1 }
        );

        elements.forEach((el) => observerTopo.observe(el));
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link

            const targetId = this.getAttribute("href").substring(1); // Pega o ID da seção
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

document.getElementById('logo').addEventListener("click", () => {
    alert("Por que está clicando aqui?");
});
