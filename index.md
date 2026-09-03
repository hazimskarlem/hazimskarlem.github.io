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

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            // Odečítáme horní odsazení menu (65px) + menší rezervu
            const sectionTop = section.offsetTop - 120; 
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight + 150) {
                navLinks.forEach(link => {
                    if (link.parentElement) {
                        link.parentElement.classList.remove("active");
                    }
                    const href = link.getAttribute("href");
                    if (href === "#" + sectionId || href === "/#" + sectionId) {
                        if (link.parentElement) {
                            link.parentElement.classList.add("active");
                        }
                    }
                });
            }
        });
    });
});
</script>
