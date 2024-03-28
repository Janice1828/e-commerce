<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ecommerce</title>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div class="login_form">
    <div class="login_form_container">
      <h2>Login</h2>
      <form onsubmit="login_submit()">
        <div>
          <label for="email">Email</label>
          <input type="text" id="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" required />
          <button id="show_or_hide" type="button">Show</button>
        </div>
        <p id="loginErr">Credentials didn't matched</p>
        <div>
          <button id="login_btn" type="submit">Login</button>
        </div>
      </form>
      <p>or <a href="registration.php">signup?</a></p>
    </div>
  </div>
</body>

</html>
<script src="login.js"></script>