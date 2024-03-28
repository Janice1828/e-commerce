let register_show_hide = document.querySelector("#registration_show_or_hide");
let register_password = document.getElementById(
  "registration_confirm_password"
);
let email = document.getElementById("registration_email");
let password = document.getElementById("registration_password");
let passwordError = document.getElementById("passwordErr");
let cPasswordError = document.getElementById("cPasswordErr");
let emailError = document.getElementById("emailErr");
const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
try {
  register_show_hide.addEventListener("click", () => {
    if (register_password.type == "password") {
      register_password.type = "text";
      register_show_hide.textContent = "Hide";
    } else {
      register_password.type = "password";
      register_show_hide.textContent = "Show";
    }
  });
} catch (err) {
  console.error(err.message);
}
function Register() {
  if (email_regex.test(email.value)) {
    if (password.value === register_password.value) {
      if (password_regex.test(register_password.value)) {
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", register_password.value);
        alert("User Registered successfully!");
        event.preventDefault();
        localStorage.removeItem("added_product_id");

        window.location.href = "login.php";
      } else {
        passwordError.style.display = "block";
      }
    } else {
      cPasswordError.style.display = "block";
    }
  } else {
    emailError.style.display = "block";
  }
}
function errorTracker(varName, regex, errorVarName) {
  varName.addEventListener("input", function (e) {
    const targetValue = e.target.value;
    console.log(targetValue);
    if (regex.test(targetValue)) {
      errorVarName.style.display = "none";
    } else {
      errorVarName.style.display = "block";
    }
  });
}
errorTracker(email, email_regex, emailError);
errorTracker(password, password_regex, passwordError);
register_password.addEventListener("change", function () {
  if (password.value == register_password.value) {
    cPasswordError.style.display = "none";
  } else {
    cPasswordError.style.display = "block";
  }
});
