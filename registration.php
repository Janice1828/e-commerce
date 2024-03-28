<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ecommerce</title>
  <link rel="stylesheet" href="style.css" />

</head>

<body>
  <div class="registration_form">
    <div class="registration_form_container">
      <h2>Register</h2>
      <form action="#" onsubmit="Register()">
        <div>
          <label for="registration_email">Email</label>
          <input type="text" id="registration_email" required />
          <p id="emailErr">Please Use Valid Email</p>
        </div>
        <div>
          <label for="registration_password">Password</label>
          <input type="password" id="registration_password" required />
          <p id="passwordErr">Use Standard Format For Password</p>
        </div>
        <div>
          <label for="registration_confirm_password">Confirm Password</label>
          <input type="password" id="registration_confirm_password" required />
          <button id="registration_show_or_hide" type="button">Show</button>
          <p id="cPasswordErr">Password and confirm password must be same</p>
        </div>
        <div>
          <button id="register" type="submit">Register</button>
        </div>
      </form>
      <p>or <a href="login.php">signin?</a></p>
    </div>
  </div>
</body>

</html>
<script src="registration.js"></script>