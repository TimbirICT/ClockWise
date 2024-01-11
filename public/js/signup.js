const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.getElementById("name-signup").value.trim();
    const email = document.getElementById("email-signup").value.trim();
    const password = document.getElementById("password-signup").value.trim();
  
    if (name && email && password) {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(name, email, password);
  
      if (response.ok) {
        setTimeout(() => {document.location.replace("/portal");}, 500);
      } else {
        alert("Failed to sign up.");
      }
    }
  };
  
  document
    .getElementById("signup-form")
    .addEventListener("submit", signupFormHandler);