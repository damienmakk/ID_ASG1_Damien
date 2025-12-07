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



  const scrollBanner = document.querySelector(".scroll-banner");

  const scrollText = document.querySelector(".scroll-text");



  if (scrollBanner && scrollText) {

    const viewHeight = window.innerHeight || document.documentElement.clientHeight;



    const updateScrollText = () => {

      const sectionTop = scrollBanner.offsetTop;

      const sectionHeight = scrollBanner.offsetHeight;

      const totalRange = sectionHeight + viewHeight;

      const y = window.scrollY;

      const progressRaw = (y + viewHeight - sectionTop) / totalRange;

      let progress = progressRaw;

      if (progress < 0) progress = 0;

      if (progress > 1) progress = 1;

      const offset = -60 + progress * 80;

      scrollText.style.transform = `translateX(${offset}%)`;

    };



    updateScrollText();

    window.addEventListener("scroll", updateScrollText);

    window.addEventListener("resize", updateScrollText);

  }



  const tourSection = document.querySelector(".tour-section");



  if (tourSection) {

    const tourObserver = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            tourSection.classList.add("tour-visible");

          }

        });

      },

      { threshold: 0.4 }

    );



    tourObserver.observe(tourSection);

  }



  const datesBtn = document.getElementById("view-dates-btn");



  if (datesBtn) {

    datesBtn.addEventListener("click", () => {

      alert("More dates coming soon.");

    });

  }

});
