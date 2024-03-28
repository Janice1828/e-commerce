function createElement(elementName) {
  return document.createElement(elementName);
}
let sn = 1;
let tableBody = document.querySelector("tbody");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    let res = data.filter(filterData);
  });
let id = localStorage.getItem("added_product_id");
function filterData(num) {
  const convertedArr = JSON.parse("[" + id + "]");
  for (let i = 0; i < convertedArr.length; i++) {
    if (convertedArr[i] == num.id) {
      let tr = createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let img = createElement("img");
      img.id = "cart-product-img";
      img.src = num.image;
      td2.appendChild(img);
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = createElement("td");
      let btn = createElement("button");
      btn.className = "delete-order-button";
      btn.value = num.id;
      btn.innerHTML = "Delete";
      td5.appendChild(btn);
      td1.innerHTML = sn++;
      td3.innerHTML = num.title;
      td4.innerHTML = num.price;
      tr.append(td1, td2, td3, td4, td5);
      tableBody.appendChild(tr);
      btn.addEventListener("click", function () {
        let buttonId = this.value;
        let findId = localStorage.getItem("added_product_id");
        const arr = findId.split(",");
        for (let i = 0; i < arr.length; i++) {
          if (buttonId == arr[i]) {
            let ind = arr.indexOf(arr[i]);
            // console.log(ind);
            arr.splice(ind, 1);
            localStorage.setItem("added_product_id", arr);
            i = 25;
            location.reload();
          }
        }
      });
    }
  }
}

// deleteButton.addEventListener("click", () => {
//   console.log(this.value);
// });
let loggedIn = sessionStorage.getItem("loggedIn");
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "http://127.0.0.1:5500/login.php";
}
if (loggedIn == "true") {
  document.querySelector(".nav_login_register").style.display = "none";
}
if (!loggedIn) {
  document.querySelector(".cart").style.display = "none";
  document.querySelector("#logout").style.display = "none";
}
let orderedNumber = document.querySelector(".cart-order-number");
let totalAddToCart = localStorage.getItem("added_product_id");

if (totalAddToCart) {
  let cartNumberConverting = totalAddToCart.split(",");
  function convertingToNumber(n) {
    return Number(n);
  }
  const cartArr = cartNumberConverting.map(convertingToNumber);

  orderedNumber.innerHTML = cartArr.length;
} else {
  orderedNumber.innerHTML = 0;
}
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "http://127.0.0.1:5500/login.php";
}
