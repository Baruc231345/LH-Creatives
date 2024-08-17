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
