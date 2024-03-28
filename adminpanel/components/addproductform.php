<form class="row" id="addProductForm" method="post">
    <div class="col-6">
        <label class="form-control-label" for="">Product Name</label>
        <input type="text" class="form-control-input" name="productName" value="">
    </div>
    <div class="col-6">
        <label class="form-control-label" for="">Price</label>
        <input type="number" class="form-control-input" name="price" value="">
    </div>
    <div class="col-6">
        <label class="form-control-label" for="">Discounted Price
        </label>
        <input type="number" class="form-control-input" name="discountedPrice" value="">
    </div>
    <div class="col-6">
        <label class="form-control-label" for="">Image</label>
        <input type="file" class="form-control-input" name="image" value="">
    </div>
    <div class="col-6">
        <label class="form-control-label" for="">Category</label>
        <select class="form-control-select" name="category">
            <option value="0">Select Option</option>
            <option value="Mens Collection">Mens Collection</option>
            <option value="Womens Collection">Womens Collection</option>
            <option value="Jewellery">Jewellery</option>
        </select>
    </div>
    <div class="col-6">
        <label class="form-control-label" for="">Sub Category</label>
        <select class="form-control-select" name="subcategory">
            <option value="0">Select Option</option>
            <option value="Shoes">Shoes</option>
            <option value="Watch">Watch</option>
            <option value="Glasses">Glasses</option>
        </select>
    </div>
    <div class="col-12">
        <label class="form-control-label" for="">Description</label>
        <textarea name="description" class="form-control-textarea" rows="3" cols="100%"></textarea>
    </div>
    <div>
        <button type="submit" name="addproduct" class="form-submit-btn bg-green">Add Product</button>
    </div>
</form>