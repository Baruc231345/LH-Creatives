const carouselSlide = document.querySelector('.imageslider');
const carouselImages = document.querySelectorAll('.imageslider img');
const prev = document.querySelector('#prevBtn');
const next = document.querySelector('#nextBtn');

// Counter
let counter = 1;
let size = carouselImages[counter].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
window.addEventListener('resize', () => {
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

next.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastImage') {
        carouselSlide.style.transition = "none"; 
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstImage') {
        carouselSlide.style.transition = "none"; 
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

window.addEventListener("DOMContentLoaded", function() {
    // Remove the checkbox and label from the DOM initially
    const check = document.getElementById("check");
    const checkbtn = document.querySelector(".checkbtn");

    // Function to add elements back when screen is 320px or less
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

    // Run on load and resize
    toggleHamburgerMenu();
    window.addEventListener("resize", toggleHamburgerMenu);
});

function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    drawer.style.display = drawer.style.display === "flex" ? "none" : "flex";
  }