<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ecommerce</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>

<body>
  <div class="main_container">
    <!-- Navbar section   -->
    <div class="nav_bar">
      <div class="nav_bar_child_container">
        <a href="home.php"><img src="./images/logo.jpg" alt="Logo" id="logo" title="Logo" />
        </a>
        <input id="search_products" type="text" placeholder="Search Products" title="Search Products" />

        <div class="d_flex navbar_contents">
          <a href="addedproducts.php" class="cart" title="Cart"><i class="fa-solid fa-cart-shopping">
              <span class="cart-order-number"></span></i>
          </a>
          <div class="nav_login_register d_flex">
            <a href="login.php" title="Login">Login</a>
            <a href="registration.php" title="Register">Register</a>
          </div>
          <div>
            <a href="#" id="logout" title="Logout" type="button" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner Section -->
    <div class="home_banner_img_section"></div>
    <div class="products_section">
      <div class="row" id="productsContainer">
        <h3 class="col-6 products_heading">Just For You</h3>
        <div class="col-6 product_category">
          <form action="">
            <select name="" id="change_category">
              <option value="all">Select All</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="jewelery">Jewellery</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
          </form>
        </div>
        <div class="row col-12" id="api_fetchedproducts_row"></div>
      </div>
    </div>
    <div>
      <div class="row bg_black">
        <div class="col-4 footer_content_right">
          <div>
            <h4>About</h4>
            <a href="#">Contact us</a>
            <a href="#">About us</a>
            <a href="#">Career</a>
          </div>
        </div>
        <div class="col-4 footer_content_center">
          <div>
            <h4>Help</h4>
            <a href="#">Payment & Billing</a>
            <a href="#">Shipping</a>
            <a href="#">Cancelletion & Return</a>
          </div>
        </div>
        <div class="col-4">
          <h4>Top Brands</h4>
          <a href="#">Gucci</a>
          <a href="#">Chanel</a>
          <a href="#">Sonam</a>
        </div>
        <div class="col-12 copyright">
          Copyright &copy; 2024 Syndrome innovation
        </div>
      </div>
    </div>
  </div>
</body>

</html>
<script src="script.js"></script>
<script src="https://kit.fontawesome.com/8508bb06d2.js" crossorigin="anonymous"></script>