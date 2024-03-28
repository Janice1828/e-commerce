<?php
include("./components/header.php");
?>

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
                        <h2 class="mb-3">Add Product</h2>
                        <?php include("./components/addproductform.php") ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php


include("./components/footer.php");

?>

<?php
include("connection.php");
if (isset($_POST['addproduct'])) {
    $name = $_POST['productName'];
    $productPrice = $_POST['price'];
    $productDiscountedPrice = $_POST['discountedPrice'];
    $productDescription = $_POST['description'];
    $category = $_POST['category'];
    $subCategory = $_POST['subcategory'];
    $insertQuery = "INSERT INTO `tbl_products`(productName, price, discountedPrice, description,category,subCategory) VALUES ('$name','$productPrice','$productDiscountedPrice','$productDescription','$category','$subCategory')";
    $result = mysqli_query($conn, $insertQuery);
}
?>