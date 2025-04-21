function checkEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkPassword(password) {
  const minLength = 8;
  const maxLength = 20;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9\s]/.test(password);

  const isValidLength =
    password.length >= minLength && password.length <= maxLength;

  return (
    isValidLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar
  );
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // ✅ Get references to input fields
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("errorMsg");

  // ✅ Reset styles and messages
  errorMsg.classList.add("d-none");
  emailInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-invalid");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const isEmailValid = checkEmail(email);
  const isPasswordValid = checkPassword(password);

  if (isEmailValid && isPasswordValid) {
    sessionStorage.setItem("isLoggedIn", "true"); // store login flag for this session
    errorMsg.textContent = "Login successful. Redirecting...";
    errorMsg.classList.remove("d-none");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    errorMsg.classList.remove("d-none");

    if (!isEmailValid) {
      emailInput.classList.add("is-invalid");
    } else if (!isPasswordValid) {
      passwordInput.classList.add("is-invalid");
    }

    // Auto-reload after 2 seconds
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});
