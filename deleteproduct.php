<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ecommerce</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <div class="add-product">
        <div class="row gap-0">
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
                <div class="p-5">
                    <div class="dashboard-card">
                        <div class="dashboard-card-body">
                            <h2 class="mb-3">Delete Product</h2>
                            <?php include("./components/deleteproducttable.php") ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
<script src="https://kit.fontawesome.com/8508bb06d2.js" crossorigin="anonymous"></script>