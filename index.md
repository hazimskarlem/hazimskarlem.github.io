---
layout: splash
permalink: /
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/karel-img.jpg
excerpt: "Vítejte na mém webu o házení muškařským prutem."
---

## O mně {#profil}
Tady bude tvůj text o tobě, tvé koníčky atd.

---

## Ceník {#cenik}
Tady vypíšeš své ceny...

---

## Rezervační systém {#rezervace}
Tady můžeš vložit odkaz na rezervační formulář nebo externí systém (např. Calendly, Google Form apod.).

---

## Kontakt a IČO {#kontakt}
* **Jméno:** Karel 
* **IČO:** 12345678
* **E-mail:** karel@email.cz

<script>
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("h2[id]");
    const navLinks = document.querySelectorAll(".greedy-nav a");

    window.addEventListener("scroll", function() {
        let scrollY = window.pageYOffset;
        let currentSectionId = "";

        // Zjistíme, která sekce je právě v zorném poli
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100; // Rezerva pro horní lištu
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight + 200) {
                currentSectionId = sectionId;
            }
        });

        // Projdeme menu a nastavíme třídu active-link jen tomu správnému odkazu
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
