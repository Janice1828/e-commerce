let orderedNumber = document.querySelector(".cart-order-number");
function createElement(elementName) {
  return document.createElement(elementName);
}
let tableBody = document.querySelector("tbody");
let qty = 0;
function ab() {
  let sn = 1;
  fetch("../products.json")
    .then((res) => res.json())
    .then((result) => {
      const response = result.data;
      let getNum = 0;
      response.forEach((item) => {
        let getQty = sessionStorage.getItem(`product${item.id}`);
        getNum += Number(getQty);
        let fetchQty = sessionStorage.getItem(`product${item.id}`);
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
          qtyValue.id = "quantityValue";
          qtyValue.innerHTML = fetchQty;
          const decreaseQty = createElement("button");
          decreaseQty.id = "decreaseOrder";
          decreaseQty.textContent = "-";
          increaseQty.textContent = "+";
          let td6 = createElement("td");
          let td5 = createElement("td");
          let deleteCart = createElement("button");
          deleteCart.className = "btn btn-delete";
          deleteCart.id = "deleteProduct";
          deleteCart.innerHTML = "Delete";
          deleteCart.value = item.id;
          td5.append(deleteCart);
          td6.className = "quantityContainer";
          td6.append(decreaseQty, qtyValue, increaseQty);
          let btn = createElement("button");
          deleteCart.addEventListener("click", () => {
            let proNum = 0;
            if (proNum === 0) {
              let a = document.querySelector("tbody");
              a.innerHTML = "";
              sessionStorage.setItem(`product${item.id}`, 0);
              ab();
              let initValue = 0;
              for (let i = 0; i < response.length; i++) {
                let fetchedId = sessionStorage.getItem(
                  `product${response[i].id}`
                );
                initValue += Number(fetchedId);
              }
              orderedNumber.innerHTML = initValue;
            }
          });
          btn.className = "delete-order-button";
          btn.value = item.id;
          btn.innerHTML = "Delete";
          td1.innerHTML = sn++;
          td3.innerHTML = item.title;
          td4.innerHTML = item.discountedPrice;
          tr.append(td1, td2, td3, td4, td6, td5);
          tableBody.appendChild(tr);
          increaseQty.addEventListener("click", () => {
            let initialQty = sessionStorage.getItem(`product${item.id}`);
            initialQty++;
            sessionStorage.setItem(`product${item.id}`, initialQty);
            qtyValue.innerHTML = initialQty;
            let initValue = 0;
            for (let i = 0; i < response.length; i++) {
              let fetchedId = sessionStorage.getItem(
                `product${response[i].id}`
              );
              initValue += Number(fetchedId);
            }
            orderedNumber.innerHTML = initValue;
          });
          decreaseQty.addEventListener("click", () => {
            let initialQty = sessionStorage.getItem(`product${item.id}`);
            if (initialQty > 1) {
              initialQty--;
            }
            sessionStorage.setItem(`product${item.id}`, initialQty);
            qtyValue.innerHTML = initialQty;
            let initValue = 0;
            for (let i = 0; i < response.length; i++) {
              let fetchedId = sessionStorage.getItem(
                `product${response[i].id}`
              );
              initValue += Number(fetchedId);
            }
            orderedNumber.innerHTML = initValue;
          });
        }
      });
      // console.log(getNum);
      orderedNumber.innerHTML = getNum;
    });
}
ab();
let id = localStorage.getItem("added_product_id");
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
