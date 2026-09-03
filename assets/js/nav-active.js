document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".greedy-nav a");
    const currentPath = window.location.pathname;

    // 1. Základní kontrola při načtení stránky
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (!href) return;

        if ((currentPath === "/" || currentPath.endsWith("/index.html")) && (href === "/" || href === "")) {
            link.classList.add("active-link");
            if (link.parentElement) link.parentElement.classList.add("active");
        } 
        else if (currentPath !== "/" && href !== "/" && currentPath.includes(href)) {
            link.classList.add("active-link");
            if (link.parentElement) link.parentElement.classList.add("active");
        }
    });

    // 2. Logika pro aktivní stavy v menu při kliknutí a scrollování
    const sections = document.querySelectorAll("div[id], section[id]");
    const isHome = (currentPath === "/" || currentPath.endsWith("/index.html"));

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            const href = this.getAttribute("href");
            if (!href) return;

            // Pokud jsme na hlavní stránce a klikáme na kotvu
            if (isHome && (href.startsWith("#") || href.includes("/#"))) {
                navLinks.forEach(l => {
                    l.classList.remove("active-link");
                    if (l.parentElement) l.parentElement.classList.remove("active");
                });
                this.classList.add("active-link");
                if (this.parentElement) this.parentElement.classList.add("active");
            }
        });
    });

    if (sections.length > 0 && isHome) {
        window.addEventListener("scroll", function() {
            let scrollY = window.pageYOffset;
            let currentSectionId = "";

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 140; 
                const sectionId = section.getAttribute("id");

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    currentSectionId = sectionId;
                }
            });

            navLinks.forEach(link => {
                const href = link.getAttribute("href");
                if (!href) return;

                if (href.startsWith("#") || href.includes("/#")) {
                    const isMatch = (href === "#" + currentSectionId || href === "/#" + currentSectionId);
                    if (isMatch) {
                        link.classList.add("active-link");
                        if (link.parentElement) link.parentElement.classList.add("active");
                    } else {
                        link.classList.remove("active-link");
                        if (link.parentElement) link.parentElement.classList.remove("active");
                    }
                } 
                else if (href === "/" || href === "") {
                    if (scrollY > 200 || currentSectionId !== "") {
                        link.classList.remove("active-link");
                        if (link.parentElement) link.parentElement.classList.remove("active");
                    } else {
                        link.classList.add("active-link");
                        if (link.parentElement) link.parentElement.classList.add("active");
                    }
                }
            });
        });
    }
});
