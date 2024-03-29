function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
let loggedIn = sessionStorage.getItem("loggedIn");
if (loggedIn == "true") {
  document.querySelector(".nav_login_register").style.display = "none";
}
if (loggedIn != "true") {
  document.querySelector(".cart").style.display = "none";
  document.querySelector("#logout").style.display = "none";
}
let category = document.querySelector("#change_category");
let cards_container = document.getElementById("api_fetchedproducts_row");
async function fetchData() {
  let fetchData = await fetch("../products.json");
  let res = await fetchData.json();
  // console.log(res.data);
  let data = res.data;
  try {
    function displayAll() {
      data.forEach((item) => {
        createProduct(item);
      });
    }
    displayAll();
    category.addEventListener("change", function () {
      cards_container.innerHTML = "";
      data.forEach((item) => {
        if (
          this.value == "men's clothing" &&
          item.category == "men's clothing"
        ) {
          createProduct(item);
        } else if (this.value == "jewelery" && item.category == "jewelery") {
          createProduct(item);
        } else if (
          this.value == "electronics" &&
          item.category == "electronics"
        ) {
          createProduct(item);
        } else if (
          this.value == "women's clothing" &&
          item.category == "women's clothing"
        ) {
          createProduct(item);
        } else if (this.value == "all") {
          createProduct(item);
        }
      });
    });
  } catch (err) {
    console.error(err.message);
  }
}
fetchData();
function createElement(elementName) {
  return document.createElement(elementName);
}

function createProduct(item) {
  let child = createElement("div");
  child.className = "col-3";
  let link = createElement("a");
  link.addEventListener("click", () => {
    sessionStorage.setItem("product_id", item.id);
  });
  link.className = "link_card";
  link.href = "productDetail.html";
  let card = createElement("div");
  card.className = "card";
  let card_body = createElement("div");
  card_body.className = "card_body";
  let img = createElement("div");
  img.style.backgroundImage = `url(${item.image})`;
  img.id = "fetched_product_img";
  let card_content = createElement("div");
  card_content.className = "card_content";
  let title = createElement("p");
  title.id = "product_title";
  card.title = item.title;
  let price = createElement("p");
  price.id = "price";
  let discountedPrice = createElement("strike");
  discountedPrice.id = "discountedPrice";
  link.appendChild(card);
  child.appendChild(link);
  card.appendChild(card_body);
  card_body.appendChild(img);
  card_body.appendChild(card_content);
  card_content.appendChild(title);
  card_content.append(price, discountedPrice);
  title.textContent = item.title;
  price.textContent = "Nrs. " + item.discountedPrice;
  discountedPrice.textContent = "Nrs." + item.price;
  cards_container.appendChild(child);
}

function selectById(idName) {
  return document.getElementById(idName);
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
if (!loggedIn == null) {
  if (loggedIn != "true") {
    document.querySelector(".order-adding-section").style.display = "none";
  }
}
// for searching the content
const searchProducts = document.getElementById("search_products");
searchProducts.addEventListener("input", findProduct);
function findProduct(e) {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      let filteredData = data.filter(filterValue);
      cards_container.innerHTML = "";
      filteredData.forEach((item) => {
        createProduct(item);
      });
      function filterValue(value) {
        let inpValue = e.target.value.toUpperCase();
        // console.log(inpValue);
        let title = value.title.toUpperCase();
        // console.log(title);
        if (title.includes(inpValue)) {
          return value;
        }
      }
    })
    .catch((err) => console.log(err));
}
