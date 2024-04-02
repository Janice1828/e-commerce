const productCatogeriesId = localStorage.getItem("productCategories");
const productCatogeriesArr = productCatogeriesId.split(",");
const categoryTitle = document.getElementById("categoryTitle");
function convertIntoNumber(arr) {
  return Number(arr);
}
function createElement(elementName) {
  return document.createElement(elementName);
}
let productCategoriesNum = productCatogeriesArr.map(convertIntoNumber);
// console.log(productCategoriesNum);
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
let productsContainer = document.querySelector(".sub-category-products-lists");
fetch("../products.json")
  .then((res) => res.json())
  .then((data) => {
    let result = data.data;

    result.forEach((item) => {
      if (productCategoriesNum.includes(item.id)) {
        const col = createElement("div");
        col.className = "col-4";
        const card = document.createElement("div");
        const cardBody = document.createElement("div");
        const cardContent = document.createElement("div");
        const image = createElement("img");
        card.className = "card";
        cardBody.className = "card_body";
        cardContent.className = "card_content";
        const title = createElement("p");
        const price = createElement("p");
        title.id = "product_title";
        price.id = "price";
        image.src = item.image;
        image.id = "category_product_img";
        title.innerHTML = item.title;
        price.innerHTML = `Nrs. ${item.price}`;
        cardContent.append(title, price);
        cardBody.append(image, cardContent);
        card.appendChild(cardBody);
        col.appendChild(card);
        productsContainer.appendChild(col);
      }
    });
  })
  .catch((err) => console.log(err));
let productCategoryTitle = localStorage.getItem("categoryTitle");
categoryTitle.innerHTML = productCategoryTitle;
