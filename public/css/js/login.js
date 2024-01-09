// handler function for login
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // get values of name and password input
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (username && password) {
      const response = await fetch("api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log in.");
      }
    }
  };
  
  document
    .getElementById("login-form")
    .addEventListener("submit", loginFormHandler);