let title = selectById("title_value");
let description = selectById("description_value");
let price = selectById("price_value");
let image = document.querySelector(".zoom-image");
let rate = document.getElementById("rating");
let addToCart = selectById("add-to-cart-button");
let addtoCart = selectById("add-tocart-number");
var num = 1;
let loggedIn = sessionStorage.getItem("loggedIn");
// console.log(loggedIn);
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
// let single_id = localStorage.getItem("product_id");
// let array_id = single_id.split(",");
// let numberedArr = array_id.map(convertedNumber);
// console.log(numberedArr);
function convertedNumber(num) {
  return Number(num);
}
function selectById(idName) {
  return document.getElementById(idName);
}
try {
  async function getSingleDetail() {
    let product_id = sessionStorage.getItem("product_id");
    let fetchData = await fetch(`../products.json`);
    let result = await fetchData.json();
    // console.log(response);
    function filterById(jsonObject, id) {
      return jsonObject.filter(function (jsonObject) {
        return jsonObject["id"] == id;
      })[0];
    }
    let response = filterById(result["data"], product_id);
    console.log(response);
    title.innerHTML = response.title;
    description.innerHTML = response.description;
    price.innerHTML = `$ ${response.price}`;
    // rate.innerHTML = getStarss(response.rating.rate);
    console.log(response.image);
    image.src = response.image;

    // let singleProductID = response.id;
    var options = {
      width: 500,
      height: 300,
      zoomWidth: 200,
      offset: { vertical: 0, horizontal: 10 },
      scale: 1,
    };
    new ImageZoom(document.getElementById("img-container"), options);
    // let arr = localStorage.getItem;
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
      //   localStorage.setItem("productId0", 20);
      let num = localStorage.getItem("num");
      //   let cartNumber = localStorage.getItem("cartNumber");
      //   let totalCartNumber = Number(num) + Number(cartNumber);
      // console.log(localStorage.getItem("product_id"));
      //   localStorage.setItem(`product_id`, ids);
      //   localStorage.setItem("cartNumber", totalCartNumber);
      location.reload();
      //   localStorage.setItem("num", 1);
      //   console.log(singleProductID);
      //   localStorage.setItem(
      //     `productId${singleProductID}`,
      //     Number(num) + Number(num)
      //   );
      //   console.log(singleProductID);
    });
    // console.log("test");
  }
  getSingleDetail();
} catch (error) {
  console.log(error.message);
}
// function increaseOrder() {
//   if (num < 10) {
//     num++;
//     addtoCart.innerHTML = num;
//     localStorage.setItem("num", num);
//   }
// }
// function decreaseOrder() {
//   if (num > 1) {
//     --num;
//     addtoCart.innerHTML = num;
//     localStorage.setItem("num", num);
//   }
//   console.log(num);
// }

if (loggedIn != "true") {
  document.querySelector(".order-adding-section").style.display = "none";
}
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
