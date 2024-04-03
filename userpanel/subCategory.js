const productCatogeriesId = localStorage.getItem("productCategories");
const productCatogeriesArr = productCatogeriesId.split(",");
const categoryTitle = document.getElementById("categoryTitle");
let productsContainer = document.querySelector(".sub-category-products-lists");
let productCategoryTitle = localStorage.getItem("categoryTitle");
let filteredids = [];

function convertIntoNumber(arr) {
  return Number(arr);
}
function createElement(elementName) {
  return document.createElement(elementName);
}
let productCategoriesNum = productCatogeriesArr.map(convertIntoNumber);
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
function createProducts(item) {
  const col = createElement("div");
  col.className = "col-4";
  let link = createElement("a");
  link.id = "subCategoriesLink";
  link.href = "./productDetail.html";
  link.addEventListener("click", function () {
    sessionStorage.setItem("product_id", item.id);
  });
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
  link.appendChild(card);
  col.appendChild(link);
  productsContainer.appendChild(col);
}
const brand = document.getElementById("brands");
const colors = document.getElementById("colors");
const sizes = document.getElementById("sizes");
function createBrandFilter(obj) {
  for (let i = 0; i < obj.length; i++) {
    let container = createElement("div");
    container.className = "filter-brand-container";
    let inp = createElement("input");
    inp.type = "checkbox";
    inp.id = obj[i];
    inp.value = obj[i];
    inp.className = "checkBoxInput";
    let label = createElement("label");
    label.htmlFor = obj[i];
    label.innerHTML = obj[i];
    container.append(inp, label);
    brand.appendChild(container);
    filterContentBrand(inp);
  }
}
function createSizeFilter(obj) {
  for (let i = 0; i < obj.length; i++) {
    let container = createElement("div");
    container.className = "filter-brand-container";
    let inp = createElement("input");
    inp.type = "checkbox";
    inp.id = obj[i];
    inp.value = obj[i];
    inp.className = "checkBoxInput";
    let label = createElement("label");
    label.htmlFor = obj[i];
    label.innerHTML = obj[i];
    container.append(inp, label);
    sizes.appendChild(container);
    filterContentSize(inp);
  }
}
function createColorFilter(obj) {
  for (let i = 0; i < obj.length; i++) {
    let container = createElement("div");
    container.className = "filter-brand-container";
    let inp = createElement("input");
    inp.type = "checkbox";
    inp.id = obj[i];
    inp.value = obj[i];
    inp.className = "checkBoxInput";
    let label = createElement("label");
    label.htmlFor = obj[i];
    label.innerHTML = obj[i];
    container.append(inp, label);
    filterContent(inp);
    colors.appendChild(container);
  }
}
let ids = localStorage.getItem("filterCategory");
let toArr = ids.split(",");
let fetchedNumbers = toArr.map(convertIntoNumber);
function filterContent(inp) {
  fetch("../products.json")
    .then((res) => res.json())
    .then((data) => {
      let fetchedData = data.data;
      inp.addEventListener("change", function () {
        productsContainer.innerHTML = "";
        if (inp.checked) {
          fetchedData.forEach((item) => {
            if (
              item.color == this.value &&
              item.category == productCategoryTitle
            ) {
              filteredids.push(item.id);
            }
          });
          localStorage.setItem("filterCategory", filteredids);
          fetchedData.forEach((item) => {
            if (filteredids.includes(item.id)) {
              createProducts(item);
            }
          });
        } else {
          productsContainer.innerHTML = "";
          fetchedData.forEach((item) => {
            if (
              item.color == this.value &&
              item.category == productCategoryTitle
            ) {
              let ind = filteredids.indexOf(item.id);
              filteredids.splice(ind, 1);
              localStorage.setItem("filterCategory", filteredids);
            }
          });
          fetchedData.forEach((item) => {
            if (filteredids.includes(item.id)) {
              createProducts(item);
            }
          });
        }
        console.log(filteredids);
        if (filteredids.length < 1) {
          fetchedData.forEach((item) => {
            if (item.category == productCategoryTitle) {
              createProducts(item);
            }
          });
        }
      });
    });
}
function filterContentSize(inp) {
  fetch("../products.json")
    .then((res) => res.json())
    .then((data) => {
      let fetchedData = data.data;
      inp.addEventListener("change", function () {
        productsContainer.innerHTML = "";
        if (inp.checked) {
          fetchedData.forEach((item) => {
            if (
              item.size == this.value &&
              item.category == productCategoryTitle
            ) {
              filteredids.push(item.id);
            }
          });
          localStorage.setItem("filterCategory", filteredids);
          fetchedData.forEach((item) => {
            if (filteredids.includes(item.id)) {
              createProducts(item);
            }
          });
        } else {
          productsContainer.innerHTML = "";
          fetchedData.forEach((item) => {
            if (
              item.size == this.value &&
              item.category == productCategoryTitle
            ) {
              let ind = filteredids.indexOf(item.id);
              filteredids.splice(ind, 1);
              localStorage.setItem("filterCategory", filteredids);
            }
          });
          fetchedData.forEach((item) => {
            if (filteredids.includes(item.id)) {
              createProducts(item);
            }
          });
        }
        console.log(filteredids);
        if (filteredids.length < 1) {
          fetchedData.forEach((item) => {
            if (item.category == productCategoryTitle) {
              createProducts(item);
            }
          });
        }
      });
    });
}
function filterContentBrand(inp) {
  fetch("../products.json")
    .then((res) => res.json())
    .then((data) => {
      let fetchedData = data.data;
      inp.addEventListener("change", function () {
        productsContainer.innerHTML = "";
        if (inp.checked) {
          fetchedData.forEach((item) => {
            if (
              item.brand == this.value &&
              item.category == productCategoryTitle
            ) {
              filteredids.push(item.id);
            }
          });
          localStorage.setItem("filterCategory", filteredids);
          fetchedData.forEach((item) => {
            if (filteredids.includes(item.id)) {
              createProducts(item);
            }
          });
        } else {
          productsContainer.innerHTML = "";
          fetchedData.forEach((item) => {
            if (
              item.brand == this.value &&
              item.category == productCategoryTitle
            ) {
              let ind = filteredids.indexOf(item.id);
              filteredids.splice(ind, 1);
              localStorage.setItem("filterCategory", filteredids);
            }
          });
          fetchedData.forEach((item) => {
            if (filteredids.includes(item.id)) {
              createProducts(item);
            }
          });
        }
        console.log(filteredids);
        if (filteredids.length < 1) {
          fetchedData.forEach((item) => {
            if (item.category == productCategoryTitle) {
              createProducts(item);
            }
          });
        }
      });
    });
}

let brandNewArr = [];
let colorNewArr = [];

let sizeNewArr = [];
fetch("../products.json")
  .then((res) => res.json())
  .then((data) => {
    let result = data.data;
    for (let i = 0; i < result.length; i++) {
      if (productCategoriesNum.includes(result[i].id)) {
        if (result[i].brand) {
          brandNewArr.push(result[i].brand);
        }
        if (result[i].color) {
          colorNewArr.push(result[i].color);
        }
        if (result[i].size) {
          sizeNewArr.push(result[i].size);
        }
      }
    }
    for (let i = 0; i < result.length; i++) {
      if (productCategoriesNum.includes(result[i].id)) {
        createProducts(result[i]);
      }
    }
    function filterDuplicateBrand(arr) {
      return [...new Set(arr)];
    }
    const removedDuplicateBrand = filterDuplicateBrand(brandNewArr);
    const removedDuplicateColor = filterDuplicateBrand(colorNewArr);
    const removedDuplicateSize = filterDuplicateBrand(sizeNewArr);
    let colorTitle = document.getElementById("colorTitle");
    let sizeTitle = document.getElementById("sizeTitle");
    let brandTitle = document.getElementById("brandTitle");
    if (removedDuplicateBrand.length >= 1) {
      createBrandFilter(removedDuplicateBrand);
    } else {
      brandTitle.innerHTML = "";
    }
    if (removedDuplicateSize.length >= 1) {
      createSizeFilter(removedDuplicateSize);
    } else {
      sizeTitle.innerHTML = "";
    }
    if (removedDuplicateColor.length >= 1) {
      createColorFilter(removedDuplicateColor);
    } else {
      colorTitle.innerHTML = "";
    }
  })
  .catch((err) => console.log(err));
categoryTitle.innerHTML = productCategoryTitle;
