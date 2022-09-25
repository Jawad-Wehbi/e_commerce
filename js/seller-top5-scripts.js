window.onload = () => {
    //
    // Variables for navigation (left panel)
    //
    const revenueTab = document.getElementById("revenue-tab");
    const categoriesTab = document.getElementById("categories-tab");
    const discountCodesTab = document.getElementById("discount-codes-tab");
    const messagesTab = document.getElementById("messages-tab");
    const top5Tab = document.getElementById("top5-tab");
    const addAdsTab = document.getElementById("add-ads-tab");

    //
    // Navigation
    //
    revenueTab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./revenue.html");
    });
    categoriesTab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./categories.html");
    });
    discountCodesTab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./discount-codes.html");
    });
    messagesTab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./messages.html");
    });
    top5Tab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./top-5-products-viewed.html");
    });
    addAdsTab.addEventListener("click", e => {
        e.preventDefault();
        location.replace("./add-ads.html");
    });

    //
    // Variables
    //
    const sellerTop5Page = document.getElementById("seller-top5-page");
    const sellerEditProductPage = document.getElementById(
        "seller-edit-product-page"
    );
    //
    // Functions
    //
    const getTop5Products = () => {
        const inputData = {
            seller_user_id: sellerId,
        };
        axios
            .post("http://localhost/electrostate/top5_products.php", inputData)
            .then(response => {
                let productCard = ``;
                response.data.map(values => {
                    productCard += `<div id="${values.product_id}" class="seller-categories-product">
                    <div class="seller-categories-product-info">
                        <img
                            class="seller-product-img"
                            src="assets/Laptop-collection.webp"
                            alt="" />
                        <p>Category Name</p>
                        <p>${values.name}</p>
                        <p>Price</p>
                        <p>
                            Quantity sold:
                            <span>56</span>
                        </p>
                        <p>
                            Quantity left:
                            <span>95</span>
                        </p>
                    </div>
                    <div class="seller-categories-product-views">
                        <p>10</p>
                        <img src="assets/heart.svg" alt="" />
                        <p>${values.nb_of_views}</p>
                        <img src="assets/eye.svg" alt="" />
                    </div>
                    <div class="seller-categories-product-btns">
                        <a class="seller-edit-btn" href="">Edit</a>
                        <a class="seller-delete-btn" href="">Delete</a>
                    </div>
                </div>`;
                });
                sellerTop5Page.innerHTML = productCard;

                const editProductBtns =
                    document.querySelectorAll(".seller-edit-btn");
                editProductBtns.forEach(btn => {
                    btn.addEventListener("click", e => {
                        e.preventDefault();
                        openEditProduct(btn.parentElement.parentElement.id);
                    });
                });

                const deleteProductBtns =
                    document.querySelectorAll(".seller-delete-btn");
                deleteProductBtns.forEach(btn => {
                    btn.addEventListener("click", e => {
                        e.preventDefault();
                        deleteProduct(btn.parentElement.parentElement.id);
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const openEditProduct = productId => {
        sellerEditProductPage.classList.remove("seller-popup-hidden");
        localStorage.setItem("productId", "productId");
        console.log(productId);
    };

    const deleteProduct = productId => {
        const inputData = {
            product_id: productId,
        };
        axios
            .post("http://localhost/electrostate/delete_product.php", inputData)
            .then(response => {
                console.log(response.data);
                getTop5Products();
            })
            .catch(error => {
                console.log(error);
            });
    };

    //
    //
    //
    localStorage.setItem("sellerId", "1");
    const sellerId = localStorage.getItem("sellerId");

    getTop5Products();
};
