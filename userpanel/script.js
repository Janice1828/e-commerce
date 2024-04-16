let orderedNumber = document.querySelector(".cart-order-number");
let totalAddToCart = localStorage.getItem("added_product_id");
const searchProducts = document.getElementById("search_products");
let category = document.querySelector("#change_category");

function selectById(idName) {
  return document.getElementById(idName);
}
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
let cards_container = document.getElementById("api_fetchedproducts_row");

// setTimeout(() => {
let trendingProduct = document.getElementById("trendingProduct");
async function fetchData() {
  let totalQty = 0;
  let fetchData = await fetch("../products.json");
  let res = await fetchData.json();
  let data = res.data;
  data.forEach((item) => {
    sessionStorage.setItem(`ratingProduct${item.id}`, item.rating);
    let rating = sessionStorage.getItem(`ratingProduct${item.id}`);
    if (rating >= 4) {
      let child = createElement("div");
      child.className = "col-2 col-xl-4 col-md-6 col-sm-12";
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
      trendingProduct.appendChild(child);
    }
    document.getElementById("trendingLoader").style.display = "none";
  });
  data.forEach((item) => {
    let productQty = sessionStorage.getItem(`product${item.id}`);
    totalQty += Number(productQty);
    let child = createElement("div");
    child.className = "col-3 col-xl-4 col-md-6 col-sm-12 product-item";
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
  function paginate(items, itemsPerPage) {
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    function showItems(page) {
      items.forEach((a) => {
        a.style.display = "none";
      });
      let startIndex = (page - 1) * itemsPerPage; //2-1=1*5
      let endIndex = startIndex + itemsPerPage; //5+5=10
      for (let i = startIndex; i < endIndex; i++) {
        if (items[i]) {
          items[i].style.display = "block";
        }
      }
    }
    showItems(currentPage);
    setUpPagination();
    function setUpPagination() {
      const pagination = document.querySelector("#pagination");
      pagination.innerHTML = "";
      for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement("a");
        link.href = "#";
        link.innerHTML = i;
        link.value = i;
        if (i == currentPage) {
          link.classList.add("active");
        }
        link.addEventListener("click", () => {
          event.preventDefault();
          currentPage = i;
          showItems(currentPage);
          const currentActive = pagination.querySelector(".active");
          currentActive.classList.remove("active");
          link.classList.add("active");
        });
        pagination.appendChild(link);
      }
    }
  }
  let items = document.querySelectorAll(".product-item");
  paginate(items, 6);
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
    opt.textContent = `${item} ->`;
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
  document.getElementById("listLoader").style.display = "none";
}
fetchData();

function createElement(elementName) {
  return document.createElement(elementName);
}
function createProduct(item) {
  let child = createElement("div");
  child.className = "col-3 col-xl-4 col-md-6 col-sm-12 product-item";
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

fetch("../products.json")
  .then((res) => res.json())
  .then((data) => {
    let result = data.data;
    searchProducts.addEventListener("input", findProduct);
    let items = document.querySelectorAll(".product-item");
    function findProduct(e) {
      if (searchProducts.value == "") {
        let active = document.querySelector(".active");
        items.forEach((a) => {
          a.style.display = "none";
        });
        function paginate(items, itemsPerPage) {
          let currentPage = active.value;
          function showItems(page) {
            let startIndex = (page - 1) * itemsPerPage;
            let endIndex = startIndex + itemsPerPage;
            for (let i = startIndex; i < endIndex; i++) {
              if (items[i]) {
                items[i].style.display = "block";
              }
            }
          }
          showItems(currentPage);
        }
        paginate(items, 6);
      } else {
        items.forEach((a) => {
          a.style.display = "none";
        });
        let filteredData = result.filter(filterValue);
        for (let i = 0; i < filteredData.length; i++) {
          items[filteredData[i].id - 1].style.display = "block";
        }
        function filterValue(value) {
          let inpValue = e.target.value.toUpperCase();
          let title = value.title.toUpperCase();
          if (title.includes(inpValue)) {
            return value;
          }
        }
      }
    }
  })
  .catch((err) => console.log(err));

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
