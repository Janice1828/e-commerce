function createElement(elementName) {
  return document.createElement(elementName);
}
let sn = 1;
let tableBody = document.querySelector("tbody");
let totalQty = 0;
fetch("../products.json")
  .then((res) => res.json())
  .then((result) => {
    const response = result.data;
    response.forEach((item) => {
      let fetchQty = sessionStorage.getItem(`product${item.id}`);
      totalQty += Number(fetchQty);
      if (fetchQty >= 1) {
        let tr = createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let img = createElement("img");
        img.id = "cart-product-img";
        img.src = item.image;
        td2.appendChild(img);
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        const increaseQty = createElement("button");
        increaseQty.id = "increaseOrder";
        const qtyValue = createElement("span");
        qtyValue.innerHTML = fetchQty;
        const decreaseQty = createElement("button");
        decreaseQty.id = "decreaseOrder";
        decreaseQty.textContent = "-";
        increaseQty.textContent = "+";
        let td6 = createElement("td");
        td6.className = "quantityContainer";
        td6.append(decreaseQty, qtyValue, increaseQty);
        let btn = createElement("button");
        btn.className = "delete-order-button";
        btn.value = item.id;
        btn.innerHTML = "Delete";
        td1.innerHTML = sn++;
        td3.innerHTML = item.title;
        td4.innerHTML = item.discountedPrice;
        tr.append(td1, td2, td3, td4, td6);
        tableBody.appendChild(tr);
        decreaseQty.addEventListener("click", () => {
          // sessionStorage.setItem(`product${item.id}`,)
        });
        increaseQty.addEventListener("click", () => {
          let initialQty = sessionStorage.getItem(`product${item.id}`);
          initialQty++;
          sessionStorage.setItem(`product${item.id}`, initialQty);
          location.reload();
        });
        decreaseQty.addEventListener("click", () => {
          let initialQty = sessionStorage.getItem(`product${item.id}`);
          initialQty--;
          sessionStorage.setItem(`product${item.id}`, initialQty);
          location.reload();
        });
      }
    });
    orderedNumber.innerHTML = totalQty;
  });
let id = localStorage.getItem("added_product_id");
// function filterData(num) {
//   const convertedArr = JSON.parse("[" + id + "]");
//   for (let i = 0; i < convertedArr.length; i++) {
//     if (convertedArr[i] == num.id) {
//       let tr = createElement("tr");
//       let td1 = document.createElement("td");
//       let td2 = document.createElement("td");
//       let img = createElement("img");
//       img.id = "cart-product-img";
//       img.src = num.image;
//       td2.appendChild(img);
//       let td3 = document.createElement("td");
//       let td4 = document.createElement("td");
//       let td5 = createElement("td");
//       let btn = createElement("button");
//       btn.className = "delete-order-button";
//       btn.value = num.id;
//       btn.innerHTML = "Delete";
//       td5.appendChild(btn);
//       td1.innerHTML = sn++;
//       td3.innerHTML = num.title;
//       td4.innerHTML = num.discountedPrice;
//       tr.append(td1, td2, td3, td4, td5);
//       tableBody.appendChild(tr);
//       btn.addEventListener("click", function () {
//         let buttonId = this.value;
//         let findId = localStorage.getItem("added_product_id");
//         const arr = findId.split(",");
//         for (let i = 0; i < arr.length; i++) {
//           if (buttonId == arr[i]) {
//             let ind = arr.indexOf(arr[i]);
//             arr.splice(ind, 1);
//             localStorage.setItem("added_product_id", arr);
//             i = 25;
//             location.reload();
//           }
//         }
//       });
//     }
//   }
// }

let loggedIn = sessionStorage.getItem("loggedIn");
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "http://127.0.0.1:5500/login.html";
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
} else {
  orderedNumber.innerHTML = 0;
}
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "http://127.0.0.1:5500/login.html";
}
