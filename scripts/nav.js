// Make sure we wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Elements
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const menuClose = document.getElementById("menu-close");

    
    // Toggle mobile menu
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", function() {
            mobileNav.classList.add("active");
            document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
        });
    }
    
    // Close mobile menu
    if (menuClose && mobileNav) {
        menuClose.addEventListener("click", function() {
            mobileNav.classList.remove("active");
            document.body.style.overflow = ""; // Re-enable scrolling
        });
    }
});



