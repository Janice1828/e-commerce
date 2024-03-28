<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ecommerce</title>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div class="nav_bar">
    <div class="nav_bar_child_container">
      <a href="home.php"><img src="./images/logo.jpg" alt="Logo" id="logo" title="Logo" />
      </a>
      <div class="d_flex navbar_contents">
        <a href="productDetail.php" class="cart" title="Cart"><i class="fa-solid fa-cart-shopping">
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
  <div class="payment-container">
    <div class="row">
      <div class="col-12">
        <h2>Make Payments</h2>
      </div>
      <div class="col-8 row" id="productList"></div>
      <div class="col-4">
        <div class="card">
          <div class="card_body">
            <div class="product-payment-card-content">
              <h3>Order Summary</h3>
              <p class="pt-3">
                <b>Items Total : </b><span id="itemsPrice"></span>
              </p>
              <p class="pt-2">
                <b>Delivery Fee : </b><span id="deliveryFee"></span>
              </p>
              <p class="pt-2">
                <b>Total Payment : </b><span id="totalPayment"></span>
              </p>
              <div>
                <button id="payButton">Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</body>

</html>
<script src="payment.js"></script>
<script src="https://kit.fontawesome.com/8508bb06d2.js" crossorigin="anonymous"></script>