<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ecommerce</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src="https://kit.fontawesome.com/8508bb06d2.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="admin-dashboard-container">
        <div class="row">
            <div class="col-3 sidebar">
                <?php
                include("./components/sidebar.php");
                ?>
            </div>
            <div class="col-9 dashboard">
                <div class="nav_bar">
                    <div class="nav_bar_child_container">
                        <h3>E-commerce</h3>
                        <div>
                            <a href="#" id="logout" title="Logout" type="button" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>