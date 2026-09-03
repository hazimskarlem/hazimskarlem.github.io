---
layout: splash
permalink: /
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/karel-img.jpg
excerpt: "Vítejte na mém webu o házení muškařským prutem."
---

## O mně
<div id="profil"></div>
Tady bude tvůj text o tobě, tvé koníčky atd.

---

## Ceník
<div id="cenik"></div>
Tady vypíšeš své ceny...

---

## Rezervační systém
<div id="rezervace"></div>
Tady můžeš vložit odkaz na rezervační formulář nebo externí systém (např. Calendly, Google Form apod.).

---

## Kontakt a IČO
<div id="kontakt"></div>
* **Jméno:** Karel 
* **IČO:** 12345678
* **E-mail:** karel@email.cz

<script>
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".greedy-nav a");

    window.addEventListener("scroll", function() {
        let scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100; // Rezerva pro výšku menu
            const sectionId = section.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.parentElement.classList.remove("active");
                    if (link.getAttribute("href") === "#" + sectionId || link.getAttribute("href") === "/#" + sectionId) {
                        link.parentElement.classList.add("active");
                    }
                });
            }
        });
    });
});
</script>
