let payingProductNumber = [];
function createElement(elementName) {
  return document.createElement(elementName);
}
function selectById(idName) {
  return document.getElementById(idName);
}
function convertNumber(num) {
  return Number(num);
}
let itemsPrice = selectById("itemsPrice");
let deliveryFee = selectById("deliveryFee");
let totalPayment = selectById("totalPayment");

let payBtn = document.getElementById("payButton");

function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "../login.html";
}
let loggedIn = sessionStorage.getItem("loggedIn");
if (loggedIn == "true") {
  document.querySelector(".nav_login_register").style.display = "none";
}
if (loggedIn != "true") {
  document.querySelector(".cart").style.display = "none";
  document.querySelector("#logout").style.display = "none";
}
if (loggedIn != "true") {
  document.querySelector(".order-adding-section").style.display = "none";
}
let orderedNumber = document.querySelector(".cart-order-number");
let productIds = localStorage.getItem("added_product_id");
if (productIds) {
  const productIdArr = productIds.split(",");
} else {
  orderedNumber.innerHTML = 0;
}
let totalCosts = 0;
let payingProductsId = [];
let productsListContainer = document.getElementById("productList");
fetch("../products.json")
  .then((res) => res.json())
  .then((data) => {
    let result = data.data;

    function removeProducts() {
      for (let i = 0; i < result.length; i++) {
        sessionStorage.setItem(`product${result[i].id}`, 0);
        location.reload();
      }
    }

    let purchasedProductsstr = localStorage.getItem("purchasedProducts");
    let purchasedProductArr = purchasedProductsstr.split(",");
    let purchasedProducts = purchasedProductArr.map(function (num) {
      return Number(num);
    });
    console.log(purchasedProducts);

    payBtn.addEventListener("click", () => {
      let makePayment = confirm("Are you Sure?");
      // if (makePayment == true) {
      for (let i = 0; i < payingProductNumber.length; i++) {
        purchasedProducts.push(payingProductNumber[i]);
      }
      localStorage.setItem("purchasedProducts", purchasedProducts);
      removeProducts();
      // }
    });

    result.forEach((data) => {
      let fetchQtyId = sessionStorage.getItem(`product${data.id}`);
      if (fetchQtyId > 0) {
        payingProductsId.push(data.id);
      }
    });
    payingProductNumber = payingProductsId.map(convertNumber);
    let cartNum = 0;
    result.forEach((item) => {
      let productid = sessionStorage.getItem(`product${item.id}`);
      cartNum += Number(productid);
      if (productid >= 1) {
        let col = createElement("div");
        col.className = "col-12";
        let card = createElement("div");
        card.className = "card";
        let cardBody = createElement("div");
        cardBody.className = "card_body product-payment-card-content";
        let flexContainer = createElement("div");
        flexContainer.className = "d_flex justify-content-between payment-flex";
        let imgContainer = createElement("div");
        imgContainer.className = "payment-image-container";
        let image = createElement("img");
        let title = createElement("p");
        title.id = "productTitle";
        let qtyContainer = createElement("div");
        qtyContainer.className = "payment-qty-container";
        let price = createElement("p");
        let qty = createElement("p");
        price.innerHTML = `Price : $ ${item.discountedPrice}`;
        image.id = "paymentId";
        image.src = item.image;
        title.innerHTML = item.title;
        qtyContainer.append(price, qty);
        imgContainer.append(image, title);
        qty.innerHTML = `Quantity : ${productid}`;
        flexContainer.append(imgContainer, qtyContainer);
        cardBody.appendChild(flexContainer);
        card.appendChild(cardBody);
        col.appendChild(card);
        productsListContainer.appendChild(col);
        let p = item.discountedPrice * Number(productid);
        totalCosts += p;
      }
    });

    itemsPrice.innerHTML = totalCosts;
    deliveryFee.innerHTML = 100;
    totalPayment.innerHTML = 100 + totalCosts;
    orderedNumber.innerHTML = cartNum;
    if (cartNum <= 0) {
      document.getElementById("payButton").style.display = "none";
      document.getElementById("deliveryFee").innerHTML = 0;
      totalPayment.innerHTML = 0;
    }
  })
  .catch((err) => console.log(err.message));
