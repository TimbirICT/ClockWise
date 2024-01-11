// js for handling logout button on portal.handlebars

const logout = document.getElementById("logout");

const functionHandlerLogout = async (event) => {
  event.preventDefault();
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok)
  {
    setTimeout(() => {document.location.replace("/login");}, 200);
  }
};

document
  .getElementById("logout")
  .addEventListener("click", functionHandlerLogout);