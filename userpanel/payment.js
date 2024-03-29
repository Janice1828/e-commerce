function createElement(elementName) {
  return document.createElement(elementName);
}
function selectById(idName) {
  return document.getElementById(idName);
}
let itemsPrice = selectById("itemsPrice");
let deliveryFee = selectById("deliveryFee");
let totalPayment = selectById("totalPayment");

let payBtn = document.getElementById("payButton");
payBtn.addEventListener("click", () => {
  let makePayment = confirm("Are you Sure?");
  if (makePayment == true) {
    alert("Payment Successfull");
    localStorage.removeItem("added_product_id");
    window.location.href = "home.html";
  }
});
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
  function convertNumber(num) {
    return Number(num);
  }
  const numberproductIdArr = productIdArr.map(convertNumber);
  orderedNumber.innerHTML = numberproductIdArr.length;

  function filterProduct(data) {
    for (let i = 0; i < numberproductIdArr.length; i++) {
      if (numberproductIdArr[i] == data.id) {
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
        let qtyContainer = createElement("div");
        qtyContainer.className = "payment-qty-container";
        let price = createElement("p");
        price.innerHTML = `<b>Price :</b> $ ${data.price}`;
        image.id = "paymentId";
        image.src = data.image;
        title.innerHTML = data.title;
        qtyContainer.append(price);
        imgContainer.append(image, title);
        flexContainer.append(imgContainer, qtyContainer);
        cardBody.appendChild(flexContainer);
        card.appendChild(cardBody);
        col.appendChild(card);
        productsListContainer.appendChild(col);
        totalCosts += data.price;
      }
      const deliverCharge = 100;
      const totalAmount = deliverCharge + totalCosts;
      itemsPrice.innerHTML = Math.round(totalCosts);
      deliveryFee.innerHTML = deliverCharge;
      totalPayment.innerHTML = Math.round(totalAmount);
    }
  }
} else {
  orderedNumber.innerHTML = 0;
}
let productsListContainer = document.getElementById("productList");
fetch("../products.json")
  .then((res) => res.json())
  .then((data) => {
    let result = data.data;
    let filteredProducts = result.filter(filterProduct);
  })
  .catch((err) => console.log(err.message));
let totalCosts = 0;
