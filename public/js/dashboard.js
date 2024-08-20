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

  document.addEventListener('DOMContentLoaded', function() {
    const signOutButton = document.getElementById('sign-outButton');

    signOutButton.addEventListener('click', function() {
        console.log(req.session.status)
        window.location.href = '/logout';
    });
});