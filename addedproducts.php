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
  <div class="added-products-container">
    <table border="1" cellpadding="10" cellspacing="0">
      <thead>
        <tr>
          <th>S.N.</th>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <div class="make-payment-link-container">
      <a href="payment.php" class="make-payment-link">Make Payment</a>
    </div>
  </div>
  <script src="addedproducts.js"></script>
  <script src="https://kit.fontawesome.com/8508bb06d2.js" crossorigin="anonymous"></script>
</body>

</html>