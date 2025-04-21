//JS code for logged out

function logout() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    sessionStorage.removeItem("isLoggedIn");
    alert("✅ You have been logged out.");
    window.location.href = "index.html";
  } else {
    alert("⚠️ You are not logged in.");
    window.location.href = "index.html";
  }
}
