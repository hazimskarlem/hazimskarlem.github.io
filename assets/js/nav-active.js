document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".greedy-nav a");
    const currentPath = window.location.pathname;

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

    const sections = document.querySelectorAll("div[id]");
    if (sections.length > 0 && (currentPath === "/" || currentPath.endsWith("/index.html"))) {
        let isClickScrolling = false;

        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                const href = this.getAttribute("href");
                if (href && (href.startsWith("#") || href.includes("/#"))) {
                    isClickScrolling = true;
                    
                    navLinks.forEach(l => {
                        const lHref = l.getAttribute("href");
                        if (lHref && (lHref.startsWith("#") || lHref.includes("/#"))) {
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
                        if (!window.location.pathname.includes(href.replace('/',''))) {
                            link.classList.remove("active-link");
                            if (link.parentElement) {
                                link.parentElement.classList.remove("active");
                            }
                        }
                    }
                }
            });
        });
    }
});
