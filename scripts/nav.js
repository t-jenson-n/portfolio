document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const menuClose = document.getElementById("menu-close");

    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", function() {
            mobileNav.classList.add("active");
            document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
        });
    }
    
    if (menuClose && mobileNav) {
        menuClose.addEventListener("click", function() {
            mobileNav.classList.remove("active");
            document.body.style.overflow = ""; // Re-enable scrolling
        });
    }
});



