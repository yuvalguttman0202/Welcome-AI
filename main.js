// DOM queries 
const yearEl = document.querySelector("#year");
const navToggle = document.querySelector("#navToggle");
const siteNav = document.querySelector("#siteNav");
const statusText = document.querySelector("#statusText");

// Footer year
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle 
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (statusText) statusText.textContent = open ? "Menu opened." : "Menu closed.";
  });
}

// FAQ 
const accordion = document.querySelector("[data-accordion]");
if (accordion) {
  const btns = accordion.querySelectorAll(".acc-btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      // Close all
      btns.forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        const p = b.nextElementSibling;
        if (p) p.hidden = true;
      });


      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        if (panel) panel.hidden = false;
      }
    });
  });

  // Ensure first is open
  const firstBtn = btns[0];
  const firstPanel = firstBtn?.nextElementSibling;
  if (firstBtn && firstPanel) {
    firstBtn.setAttribute("aria-expanded", "true");
    firstPanel.hidden = false;
  }
}
const themeToggle = document.querySelector("#themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    themeToggle.textContent = isLight ? "Dark mode" : "Light mode";

    localStorage.setItem("theme", isLight ? "light" : "dark");
  });


  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "Dark mode";
  }
}

