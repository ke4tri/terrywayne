// This file keeps the site interactive while staying simple.

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");

// Customize: You can remove this block if you do not want the mobile menu.
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Closes the mobile menu after clicking a navigation link.
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Customize: The footer year updates automatically.
year.textContent = new Date().getFullYear();
