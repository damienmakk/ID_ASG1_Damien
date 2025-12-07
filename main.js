document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const navList = document.querySelector(".nav-list");

  if (navToggle && nav && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navList.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const shopBtn = document.getElementById("shop-now-btn");
  const shopSection = document.getElementById("shop");

  if (shopBtn && shopSection) {
    shopBtn.addEventListener("click", () => {
      alert("This is a demo shop. Scroll to see more sections of the page.");
      shopSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  const datesBtn = document.getElementById("view-dates-btn");
  const showsSection = document.getElementById("shows");

  if (datesBtn && showsSection) {
    datesBtn.addEventListener("click", () => {
      alert("Tour dates are coming soon.");
      showsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  const form = document.getElementById("signup-form");
  const formMessage = document.getElementById("form-message");

  if (form && formMessage) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("full-name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!name || !email) {
        formMessage.textContent = "Please fill in your name and email.";
        formMessage.className = "form-message error";
        return;
      }

      formMessage.textContent = `Thanks, ${name}! You’re signed up for updates.`;
      formMessage.className = "form-message success";
      form.reset();
    });
  }
});
