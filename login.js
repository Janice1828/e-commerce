let show_hide = document.getElementById("show_or_hide");
let password = document.getElementById("password");
show_hide.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    show_hide.textContent = "Hide";
  } else {
    password.type = "password";
    show_hide.textContent = "Show";
  }
});
let get_email = localStorage.getItem("email");
let get_password = localStorage.getItem("password");
function login_submit() {
  event.preventDefault();
  let inp_email = document.getElementById("email").value;
  let inp_password = document.getElementById("password").value;
  if (inp_email == get_email && inp_password == get_password) {
    sessionStorage.setItem("loggedIn", "true");
    event.preventDefault();
    window.location.href = "./userpanel/home.html";
  } else {
    document.getElementById("loginErr").style.display = "block";
  }
}
