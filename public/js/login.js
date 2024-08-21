document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    const loginIndicator = document.querySelector(".login-indicator");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const name = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;
        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ name, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                loginIndicator.textContent = "Login Succeed";
                loginIndicator.classList.add("success");
                loginIndicator.classList.remove("failure");
                loginIndicator.style.display = "block";
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 2000); // 2000 ms = 2 seconds
            } else {
                loginIndicator.textContent = "Login Failed";
                loginIndicator.classList.add("failure");
                loginIndicator.classList.remove("success");
            }
            loginIndicator.style.display = "block";
        })
        .catch(error => {
            loginIndicator.textContent = "An error occurred. Please try again.";
            loginIndicator.classList.add("failure");
            loginIndicator.style.display = "block"; 
        });
    });
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