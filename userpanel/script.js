let orderedNumber = document.querySelector(".cart-order-number");
let totalAddToCart = localStorage.getItem("added_product_id");
const searchProducts = document.getElementById("search_products");
let category = document.querySelector("#change_category");

function selectById(idName) {
  return document.getElementById(idName);
}
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
let cards_container = document.getElementById("api_fetchedproducts_row");

// setTimeout(() => {
async function fetchData() {
  let totalQty = 0;
  let fetchData = await fetch("../products.json");
  let res = await fetchData.json();
  let data = res.data;
  data.forEach((item) => {
    let productQty = sessionStorage.getItem(`product${item.id}`);
    totalQty += Number(productQty);
    let child = createElement("div");
    child.className = "col-3 col-xl-4 col-md-6 col-sm-12";
    let link = createElement("a");
    link.className = "link_card";
    link.href = `productDetail.html?productId=${item.id}`;
    let card = createElement("div");
    card.className = "card";
    let card_body = createElement("div");
    card_body.className = "card_body";
    let img = document.createElement("div");
    img.innerHTML = `<img src=${item.image} class="product_image" alt="Image"/>`;
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
    card_body.append(img, card_content);
    card_content.appendChild(title);
    card_content.append(price, discountedPrice);
    title.textContent = item.title;
    discountedPrice.textContent = "Nrs." + item.price;
    price.textContent = "Nrs. " + item.discountedPrice;
    cards_container.appendChild(child);
  });
  orderedNumber.innerHTML = totalQty;
  function getCategory(obj) {
    return obj.category;
  }
  let categoryArr = data.map(getCategory);
  function removeDuplicateCategory(arr) {
    return [...new Set(arr)];
  }
  let result = removeDuplicateCategory(categoryArr);
  result.forEach((item) => {
    let opt = createElement("a");
    opt.textContent = item;
    opt.value = item;
    opt.className = "filterProduct";
    opt.href = "./subCategory.html";
    category.append(opt);
    opt.id = item;
  });
  let links = document.querySelectorAll(".filterProduct");
  let storageCategory = [];
  links.forEach((link) => {
    link.addEventListener("click", function () {
      data.forEach((item) => {
        if (this.value == item.category) {
          storageCategory.push(item.id);
        }
      });
      localStorage.setItem("categoryTitle", this.id);

      localStorage.setItem("productCategories", storageCategory);
    });
  });
  document.querySelector(".loader").style.display = "none";
}
fetchData();

function createElement(elementName) {
  return document.createElement(elementName);
}
function createProduct(item) {
  let child = createElement("div");
  child.className = "col-3 col-xl-4 col-md-6 col-sm-12";
  let link = createElement("a");
  link.addEventListener("click", () => {
    localStorage.setItem("product_id", item.id);
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
  discountedPrice.textContent = "Nrs." + item.price;
  price.textContent = "Nrs. " + item.discountedPrice;
  cards_container.appendChild(child);
}
if (totalAddToCart) {
} else {
  orderedNumber.innerHTML = 0;
}
if (!loggedIn == null) {
  if (loggedIn != "true") {
    document.querySelector(".order-adding-section").style.display = "none";
  }
}
searchProducts.addEventListener("input", findProduct);
function findProduct(e) {
  fetch("../products.json")
    .then((res) => res.json())
    .then((data) => {
      let result = data.data;
      let filteredData = result.filter(filterValue);
      cards_container.innerHTML = "";
      filteredData.forEach((item) => {
        createProduct(item);
      });
      function filterValue(value) {
        let inpValue = e.target.value.toUpperCase();
        let title = value.title.toUpperCase();
        if (title.includes(inpValue)) {
          return value;
        }
      }
    })
    .catch((err) => console.log(err));
}
