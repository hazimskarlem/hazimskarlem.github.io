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

    // 2. Logika pro scrollování a kotvy na hlavní stránce
    const sections = document.querySelectorAll("div[id]");
    
    // Ošetření kliknutí na menu (funguje i při přechodu z jiné podstránky na kotvu)
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (!href) return;

            // Pokud jsme na jiné stránce a klikáme na kotvu směřující na hlavní stránku
            const isHome = (currentPath === "/" || currentPath.endsWith("/index.html"));
            if (!isHome && (href.startsWith("#") || href.includes("/#"))) {
                // Necháme prohlížeč přejít na hlavní stránku s kotvou, plynulé scrollování se o zbytek postará samo
                return;
            }

            if (href.startsWith("#") || href.includes("/#")) {
                // Pokud jsme na hlavní stránce, zajistíme plynulý skok a aktivní stav
                const targetId = href.substring(href.indexOf("#"));
                const targetElement = document.querySelector(targetId);

                if (targetElement && isHome) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: "smooth" });

                    // Aktualizace URL bez nutnosti reloadu
                    history.pushState(null, null, href);

                    // Nastavení aktivní třídy
                    navLinks.forEach(l => {
                        l.classList.remove("active-link");
                        if (l.parentElement) l.parentElement.classList.remove("active");
                    });
                    this.classList.add("active-link");
                    if (this.parentElement) this.parentElement.classList.add("active");
                }
            }
        });
    });

    if (sections.length > 0 && (currentPath === "/" || currentPath.endsWith("/index.html"))) {
        let isClickScrolling = false;

        window.addEventListener("scroll", function() {
            if (isClickScrolling) return;

            let scrollY = window.pageYOffset;
            let currentSectionId = "";

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 120; 
                const sectionId = section.getAttribute("id");

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight + 100) {
                    currentSectionId = sectionId;
                }
            });

            navLinks.forEach(link => {
                const href = link.getAttribute("href");
                if (!href) return;

                // Práce s kotvovými odkazy (sekce)
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
                // Speciální pravidlo pro "Domů": Zhasni ho, jakmile uživatel sjede dolů do sekcí
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
