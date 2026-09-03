---
layout: splash
permalink: /
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/karel-img.jpg
excerpt: "Vítejte na mém webu o házení muškařským prutem."
---

<div id="profil"></div>
## O mně
Tady bude tvůj text o tobě, tvé koníčky atd.

---

<div id="cenik"></div>
## Ceník
Tady vypíšeš své ceny...

---

<div id="rezervace"></div>
## Rezervační systém
Tady můžeš vložit odkaz na rezervační formulář nebo externí systém (např. Calendly, Google Form apod.).

---

<div id="kontakt"></div>
## Kontakt a IČO
* **Jméno:** Karel 
* **IČO:** 12345678
* **E-mail:** karel@email.cz

<script>
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".greedy-nav a");
    let isClickScrolling = false;

    // 1. Automatické rozsvícení položek podle toho, na jaké jsme stránce (Domů / Články)
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        // Pokud jsme na hlavní stránce a odkaz je kořenový
        if (currentPath === "/" && (href === "/" || href === "")) {
            link.classList.add("active-link");
            if (link.parentElement) link.parentElement.classList.add("active");
        } 
        // Pokud jsme na podstránce (např. články) a odkaz na ni sedí
        else if (currentPath !== "/" && href && currentPath.includes(href) && href !== "/") {
            link.classList.add("active-link");
            if (link.parentElement) link.parentElement.classList.add("active");
        }
    });

    // 2. Kliknutí na menu v rámci jedné stránky (kotvy)
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            const href = this.getAttribute("href");
            if (href.startsWith("#") || href.includes("/#")) {
                isClickScrolling = true;
                
                navLinks.forEach(l => {
                    // Necháme vyčištěné ostatní kotvy, ale nemazat případně jiné hlavní stránky
                    if (l.getAttribute("href").startsWith("#") || l.getAttribute("href").includes("/#")) {
                        l.classList.remove("active-link");
                        if (l.parentElement) l.parentElement.classList.remove("active");
                    }
                });

                this.classList.add("active-link");
                if (this.parentElement) this.parentElement.classList.add("active");

                setTimeout(() => {
                    isClickScrolling = false;
                }, 600);
            }
        });
    });

    // 3. Detekce scrollování pro kotvy na hlavní stránce
    if (currentPath === "/") {
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
                if (href && (href.startsWith("#") || href.includes("/#"))) {
                    const isMatch = (href === "#" + currentSectionId || href === "/#" + currentSectionId);

                    if (isMatch) {
                        link.classList.add("active-link");
                        if (link.parentElement) {
                            link.parentElement.classList.add("active");
                        }
                    } else {
                        link.classList.remove("active-link");
                        if (link.parentElement) {
                            link.parentElement.classList.remove("active");
                        }
                    }
                }
            });
        });
    }
});
</script>
