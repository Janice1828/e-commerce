let title = selectById("title_value");
let description = selectById("description_value");
let price = selectById("price_value");
let image = document.querySelector(".zoom-image");
let rate = document.getElementById("rating");
let addToCart = selectById("add-to-cart-button");
let addtoCart = selectById("add-tocart-number");
const searchParams = new URLSearchParams(window.location.search);
const product_id = searchParams.get("productId");
function convertingToNumber(n) {
  return Number(n);
}
var num = 1;
let loggedIn = sessionStorage.getItem("loggedIn");
let orderedNumber = document.querySelector(".cart-order-number");
let totalAddToCart = localStorage.getItem("added_product_id");
if (totalAddToCart) {
  let cartNumberConverting = totalAddToCart.split(",");

  const cartArr = cartNumberConverting.map(convertingToNumber);
} else {
  orderedNumber.innerHTML = 0;
}
function convertedNumber(num) {
  return Number(num);
}
function selectById(idName) {
  return document.getElementById(idName);
}
try {
  let totalqty = 0;
  async function getSingleDetail() {
    let fetchData = await fetch(`../products.json`);
    let result = await fetchData.json();
    for (let i = 1; i < result.data.length; i++) {
      let qtyId = sessionStorage.getItem(`product${i}`);
      if (!qtyId) {
        sessionStorage.setItem(`product${i}`, 0);
      } else {
        totalqty += Number(qtyId);
      }
    }
    result.data.forEach((item) => {
      let ratingProduct = sessionStorage.getItem(`ratingProduct${item.id}`);
      if (!ratingProduct) {
        sessionStorage.setItem(`ratingProduct${item.id}`, item.rating);
      }
    });
    orderedNumber.innerHTML = totalqty;
    function filterById(jsonObject, id) {
      return jsonObject.filter(function (jsonObject) {
        return jsonObject["id"] == id;
      })[0];
    }
    let response = filterById(result["data"], product_id);
    title.innerHTML = response.title;
    description.innerHTML = response.description;
    price.innerHTML = `$ ${response.price}`;
    let fetchingRate = sessionStorage.getItem(`ratingProduct${response.id}`);
    rate.innerHTML = getStarss(fetchingRate);
    image.src = response.image;
    var options = {
      width: 500,
      height: 300,
      zoomWidth: 200,
      offset: { vertical: 0, horizontal: 10 },
      scale: 1,
    };
    new ImageZoom(document.getElementById("img-container"), options);

    addToCart.addEventListener("click", () => {
      let addedProductsID = localStorage.getItem("added_product_id");
      if (addedProductsID) {
        let arr = localStorage.getItem("added_product_id");
        let arr2 = arr.split(" ");
        arr2.push(response.id);
        localStorage.setItem("added_product_id", arr2);
      } else {
        let id = response.id;
        localStorage.setItem("added_product_id", id);
      }
      let fetchQty = sessionStorage.getItem(`product${product_id}`);
      let num = localStorage.getItem("num");
      let totalQty = Number(num) + Number(fetchQty);
      sessionStorage.setItem(`product${product_id}`, totalQty);
      window.location.href = "./addedproducts.html";
    });
  }
  getSingleDetail();
} catch (error) {
  console.log(error.message);
}
localStorage.setItem("num", 1);
function increaseOrder() {
  if (num < 10) {
    num++;
    addtoCart.innerHTML = num;
    localStorage.setItem("num", num);
  }
}
function decreaseOrder() {
  if (num > 1) {
    --num;
    addtoCart.innerHTML = num;
    localStorage.setItem("num", num);
  }
}
if (loggedIn != "true") {
  document.querySelector(".order-adding-section").style.display = "none";
}
let purchasedProducts = localStorage.getItem("purchasedProducts");
const purchasedProductsArr = purchasedProducts.split(",");
let purchasedProductsNumber = purchasedProductsArr.map(convertingToNumber);

function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "http://127.0.0.1:5500/login.html";
}
if (loggedIn == "true") {
  document.querySelector(".nav_login_register").style.display = "none";
}
if (loggedIn != "true") {
  document.querySelector(".cart").style.display = "none";
  document.querySelector("#logout").style.display = "none";
}
function getStarss(rating) {
  let value = Math.round(rating * 2) / 2;
  let output = [];
  for (var i = value; i >= 1; i--)
    output.push(`<i class="fa-solid fa-star" style="color:#a0a004"></i>`);
  if (i == 0.5) {
    output.push(
      `<i class="fa-regular fa-star-half-stroke" style="color:#a0a004"></i>`
    );
  }
  for (i = 5 - value; i >= 1; i--)
    output.push(`<i class="fa-regular fa-star" style="color:#a0a004"></i>`);
  let result = output.join("");
  return result;
}
let errmsg = document.querySelector(".errMessage");
if (!loggedIn) {
  errmsg.style.display = "block";
} else {
  errmsg.style.display = "none";
}
let stars = document.getElementsByClassName("star");
let ratingStar = 0;
function gfg(n) {
  remove();
  for (let i = 0; i < n; i++) {
    if (n == 1) {
      cls = "one";
      ratingStar = 1;
    } else if (n == 2) {
      cls = "two";
      ratingStar = 2;
    } else if (n == 3) {
      cls = "three";
      ratingStar = 3;
    } else if (n == 4) {
      cls = "four";
      ratingStar = 4;
    } else if (n == 5) {
      cls = "five";
      ratingStar = 5;
    }
    stars[i].className = "star " + cls;
  }
  console.log(ratingStar);
}
function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}
function rateIt() {
  let fetchRating = sessionStorage.getItem(`ratingProduct${product_id}`);
  if (ratingStar >= 1 && ratingStar <= 2) {
    if (fetchRating > 1) {
      sessionStorage.setItem(
        `ratingProduct${product_id}`,
        Number(fetchRating) - Number(0.5)
      );
    }
  } else if (ratingStar >= 4 && ratingStar <= 5) {
    if (fetchRating < 5) {
      sessionStorage.setItem(
        `ratingProduct${product_id}`,
        Number(fetchRating) + Number(0.5)
      );
    }
  }
  location.reload();
}
if (
  purchasedProductsNumber.includes(Number(product_id)) &&
  loggedIn == "true"
) {
  document.getElementById("product-rating-section").style.display = "block";
} else {
  document.getElementById("product-rating-section").style.display = "none";
}