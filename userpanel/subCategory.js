const queryParams = new URLSearchParams(window.location.search);

function rel() {
  let a = 0;
  if (a < 0) {
    location.reload();
  }
  a++;
}
rel();

const productCatogeriesId = localStorage.getItem("productCategories");
const productCatogeriesArr = productCatogeriesId.split(",");
const categoryTitle = document.getElementById("categoryTitle");
let productsContainer = document.querySelector(".sub-category-products-lists");
let productCategoryTitle = localStorage.getItem("categoryTitle");
let filteredids = [];
let cartNumber = document.getElementById("cart-order-number");
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
  col.className = "col-4 col-sm-6 col-sm-12 products";
  function checkAttr() {
    let a = item.color ? item.color : "";
    let b = item.brand ? item.brand : "";
    let c = item.size ? item.size : "";
    let res = `${a} ${b} ${c}`;
    return res.trim();
  }
  col.setAttribute("data-category", checkAttr());
  let link = createElement("a");
  link.id = "subCategoriesLink";
  link.href = `./productDetail.html?productId=${item.id}`;
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
let brandNewArr = [];
let colorNewArr = [];

let sizeNewArr = [];
fetch("../products.json")
  .then((res) => res.json())
  .then((data) => {
    let result = data.data;
    let totalCartNumber = 0;
    result.forEach((item) => {
      let fetchCartId = sessionStorage.getItem(`product${item.id}`);
      totalCartNumber += Number(fetchCartId);
    });
    cartNumber.innerHTML = totalCartNumber;
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
      createFilter(removedDuplicateBrand, "brand", brand);
    } else {
      brandTitle.innerHTML = "";
    }
    if (removedDuplicateSize.length >= 1) {
      createFilter(removedDuplicateSize, "size", sizes);
    } else {
      sizeTitle.innerHTML = "";
    }
    if (removedDuplicateColor.length >= 1) {
      createFilter(removedDuplicateColor, "color", colors);
    } else {
      colorTitle.innerHTML = "";
    }
    var inps = document.querySelectorAll('input[type="checkbox"]');
    let checkedArr = [];
    let selectedArr = [];

    function filterProducts() {
      var selectedFilters = {};
      if (this.checked) {
        checkedArr.push(this.value);
        queryParams.set("filteredProducts", checkedArr);
        history.replaceState(null, null, "?" + queryParams.toString());
      } else {
        const ind = checkedArr.indexOf(this.value);
        checkedArr.splice(ind, 1);
        queryParams.set("filteredProducts", checkedArr);
        history.replaceState(null, null, "?" + queryParams.toString());
      }

      inps.forEach(function (checkbox) {
        if (checkbox.checked) {
          if (!selectedFilters.hasOwnProperty(checkbox.name)) {
            selectedFilters[checkbox.name] = [];
          }
          selectedFilters[checkbox.name].push(checkbox.value);
        }
      });

      var filteredResults = document.querySelectorAll(".products");
      for (var filterName in selectedFilters) {
        if (selectedFilters.hasOwnProperty(filterName)) {
          var filterValues = selectedFilters[filterName];
          filteredResults = Array.prototype.filter.call(
            filteredResults,
            function (element) {
              var matched = false;
              var currentFilterValues = element
                .getAttribute("data-category")
                .split(" ");
              currentFilterValues.forEach(function (currentFilterValues) {
                if (filterValues.indexOf(currentFilterValues) !== -1) {
                  matched = true;
                }
              });
              return matched;
            }
          );
        }
      }
      document.querySelectorAll(".products").forEach(function (element) {
        element.style.display = "none";
      });
      filteredResults.forEach(function (element) {
        element.style.display = "block";
      });
    }

    let selectedData = queryParams.get("filteredProducts");
    if (selectedData) {
      selectedArr = selectedData.split(",");
      inps.forEach((data) => {
        if (selectedArr.includes(data.value)) {
          data.checked = true;
        }
      });
    }
    let selectedFilters = {};
    inps.forEach(function (checkbox) {
      checkbox.addEventListener("change", filterProducts);
    });

    inps.forEach((item) => {
      if (item.checked) {
        if (item.checked) {
          if (!selectedFilters.hasOwnProperty(item.name)) {
            selectedFilters[item.name] = [];
          }
          selectedFilters[item.name].push(item.value);
        }

        var filteredResults = document.querySelectorAll(".products");
        for (var filterName in selectedFilters) {
          if (selectedFilters.hasOwnProperty(filterName)) {
            var filterValues = selectedFilters[filterName];
            filteredResults = Array.prototype.filter.call(
              filteredResults,
              function (element) {
                var matched = false;
                var currentFilterValues = element
                  .getAttribute("data-category")
                  .split(" ");
                currentFilterValues.forEach(function (currentFilterValues) {
                  if (filterValues.indexOf(currentFilterValues) !== -1) {
                    matched = true;
                  }
                });
                return matched;
              }
            );
          }
        }
        document.querySelectorAll(".products").forEach(function (element) {
          element.style.display = "none";
        });
        filteredResults.forEach(function (element) {
          element.style.display = "block";
        });
      }
    });
  })
  .catch((err) => console.log(err));
categoryTitle.innerHTML = productCategoryTitle;

function createFilter(data, dataName, appendingContainer) {
  for (let i = 0; i < data.length; i++) {
    let container = createElement("div");
    container.className = `filter-${dataName}-container`;
    let inp = createElement("input");
    inp.type = "checkbox";
    inp.id = data[i];
    inp.value = data[i];
    inp.className = "checkBoxInput";
    inp.name = dataName;
    let label = createElement("label");
    label.htmlFor = data[i];
    label.innerHTML = data[i];
    container.append(inp, label);
    appendingContainer.appendChild(container);
  }
}
