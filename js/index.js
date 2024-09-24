const navbarSticky = document.getElementById('sticky-navbar');


window.addEventListener("scroll", function() {
  if (window.scrollY > 20) {
    navbarSticky.classList.add("sticky", "fixed", "top-0", "w-full", "shadow-sm");
  } else {
    navbarSticky.classList.remove("sticky", "fixed", "top-0", "w-full", "shadow-sm");
  }
});