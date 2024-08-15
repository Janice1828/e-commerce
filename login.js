let show_hide = document.getElementById("show_or_hide");
let password = document.getElementById("password");
let showHideIcon = document.getElementById("showHide");
show_hide.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    showHideIcon.className = "fa-solid fa-eye-slash";
  } else {
    password.type = "password";
    showHideIcon.className = "fa-solid fa-eye";
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
    sessionStorage.setItem("newRegister", "false");
    window.location.href = "./userpanel/index.html";
  } else {
    document.getElementById("loginErr").style.display = "block";
  }
}
const newRegister = sessionStorage.getItem("newRegister");

// console.log(newRegister);
if (newRegister != "true") {
  document.querySelector(".w-half").style.display = "none";
}
function removeNewRegister() {
  sessionStorage.setItem("newRegister", "false");
  document.querySelector(".w-half").style.display = "none";
}
