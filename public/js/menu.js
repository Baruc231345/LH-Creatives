const carouselSlide = document.querySelector(".imageslider");
const carouselImages = document.querySelectorAll(".imageslider img");
const prev = document.querySelector("#prevBtn");
const next = document.querySelector("#nextBtn");

// Counter
let counter = 1;
let size = carouselImages[counter].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
window.addEventListener("resize", () => {
  size = carouselImages[0].clientWidth;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

next.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prev.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastImage") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselImages[counter].id === "firstImage") {
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const check = document.getElementById("check");
  const checkbtn = document.querySelector(".checkbtn");

  function toggleHamburgerMenu() {
    if (window.innerWidth <= 320) {
      if (!document.body.contains(check)) {
        document.body.appendChild(check);
        document.body.appendChild(checkbtn);
      }
    } else {
      if (document.body.contains(check)) {
        check.remove();
        checkbtn.remove();
      }
    }
  }

  toggleHamburgerMenu();
  window.addEventListener("resize", toggleHamburgerMenu);
});

function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  drawer.style.display = drawer.style.display === "flex" ? "none" : "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const serviceSection = document.getElementById("serviceSection");
  const aboutSection = document.getElementById("aboutSection");
  const newsSection = document.getElementById("newsSection");
  const contactSection = document.getElementById("contactSection");

  function handleScroll(targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  }

  // Attach click event listeners to drawer links
  const drawerLinks = document.querySelectorAll(".drawer a");
  drawerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      switch (link.className) {
        case "active":
          handleScroll(serviceSection);
          break;
        case "about":
          handleScroll(aboutSection);
          break;
        case "news":
          handleScroll(newsSection);
          break;
        case "contact":
          handleScroll(contactSection);
          break;
        default:
          window.location.href = "/login";
      }
      toggleDrawer();
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      switch (link.className) {
        case "active":
          handleScroll(serviceSection);
          break;
        case "about":
          handleScroll(aboutSection);
          break;
        case "news":
          handleScroll(newsSection);
          break;
        case "contact":
          handleScroll(contactSection);
          break;
        default:
          window.location.href = "/login";
      }
    });
  });
});