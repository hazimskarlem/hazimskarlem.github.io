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
    let isClickScrolling = false; // Ochrana proti přepisování při kliknutí

    // Kliknutí na menu okamžitě rozsvítí danou položku a pozastaví scroll detekci
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            const href = this.getAttribute("href");
            if (href.startsWith("#") || href.includes("/#")) {
                isClickScrolling = true;
                
                navLinks.forEach(l => {
                    l.classList.remove("active-link");
                    if (l.parentElement) l.parentElement.classList.remove("active");
                });

                this.classList.add("active-link");
                if (this.parentElement) this.parentElement.classList.add("active");

                // Počkej, než dojede animace scrollování, a pak zase povol detekci
                setTimeout(() => {
                    isClickScrolling = false;
                }, 600);
            }
        });
    });

    // Detekce scrollování pro zbytek případů
    window.addEventListener("scroll", function() {
        if (isClickScrolling) return; // Pokud uživatel kliknul, nesahat do toho

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
        });
    });
});
</script>
