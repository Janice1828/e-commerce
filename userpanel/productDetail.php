<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ecommerce</title>
  <link rel="stylesheet" href="../style.css" />
</head>

<body>
  <div class="nav_bar">
    <div class="nav_bar_child_container">
      <a href="home.php"><img src="../images/logo.jpg" alt="Logo" id="logo" title="Logo" />
      </a>
      <div class="d_flex navbar_contents">
        <a href="addedproducts.php" class="cart" title="Cart"><i class="fa-solid fa-cart-shopping">
            <span class="cart-order-number"></span></i>
        </a>
        <div class="nav_login_register d_flex">
          <a href="../login.php" title="Login">Login</a>
          <a href="../registration.php" title="Register">Register</a>
        </div>
        <div>
          <a href="#" id="logout" title="Logout" type="button" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="h-100">
    <div class="singleproduct_detail_container">
      <div class="card">
        <div class="card_body product-detail-card">
          <div id="img-container" style="width: 500px">
            <img src="" alt="" class="zoom-image" />
          </div>

          <div class="card_content single-product-card-content">
            <p>
              <span class="product-detail-title">Title :</span>
              <span id="title_value"></span>
            </p>
            <p>
              <span class="product-detail-description">Description :</span>
              <span id="description_value"></span>
            </p>
            <p>
              <span class="product-detail-price">Price : </span>
              <span id="price_value"></span>
            </p>
            <div>
              <span id="product-rating">Rating : </span><span id="rating"></span>
            </div>
            <div class="order-adding-section">
              <button id="add-to-cart-button">Add to cart</button>
              <!-- <div id="increase-decrease-order">
                  <button onclick="decreaseOrder()" id="decreaseOrder">-</button
                  ><span id="add-tocart-number">1</span
                  ><button onclick="increaseOrder()" id="increaseOrder">
                    +
                  </button>
                </div> -->
            </div>
            <div class="errMessage">
              <h3>Please Login To Purchase Items</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

<script src="productDetail.js"></script>

<script src="https://kit.fontawesome.com/8508bb06d2.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/js-image-zoom@0.7.0/js-image-zoom.js" type="application/javascript"></script>

</html>