
// JavaScript for Navbar Toggle and Active Navigation Item
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if (nav.classList.contains("open")) {
      nav.style.maxHeight = nav.scrollHeight + "px";
   } else {
      nav.removeAttribute("style");
   }
}

const navItems = document.querySelectorAll(".nav ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
   let current = "";
   sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
         current = section.getAttribute("id");
      }
   });

   navItems.forEach((navItem) => {
      navItem.classList.remove("active-nav-item");
      if (navItem.getAttribute("href").slice(1) === current) {
         navItem.classList.add("active-nav-item");
      }
   });
});

// JavaScript to make the navbar sticky

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
   if (window.scrollY > headerHeight) {
      header.classList.add("sticky");
   } else {
      header.classList.remove("sticky");
   }
});