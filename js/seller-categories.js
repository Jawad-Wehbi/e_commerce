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
    const addNewCategoryBtn = document.getElementById("add-new-category-btn");
    const categoriesPage = document.getElementById("seller-categories-page");
    const newCategoryPage = document.getElementById("seller-new-category-page");
    const closeNewCategoryBtn = document.getElementById(
        "close-new-category-btn"
    );
    const newCategoryNameInput = document.getElementById(
        "new-category-name-input"
    );
    const newCategoryDescriptionInput = document.getElementById(
        "new-category-descriptipon-input"
    );
    const saveNewCategoryBtn = document.getElementById("save-new-category-btn");
    const discardNewCategoryBtn = document.getElementById(
        "discard-new-category-btn"
    );
    const categoryPage = document.getElementById("seller-category-page");
    const categoryPageSubtitle = document.getElementById(
        "seller-category-page-header-subtitle"
    );

    //
    // Functions
    //
    const openNewCategoryPage = () => {
        categoriesPage.classList.add("seller-popup-hidden");
        newCategoryPage.classList.remove("seller-popup-hidden");
    };

    const closeNewCategoryPage = () => {
        newCategoryNameInput.value = "";
        newCategoryDescriptionInput.value = "";
        categoriesPage.classList.remove("seller-popup-hidden");
        newCategoryPage.classList.add("seller-popup-hidden");
    };

    const saveNewCategory = () => {
        if (
            newCategoryNameInput.value != "" &&
            newCategoryDescriptionInput != ""
        ) {
            // send to database
            location.reload();
        }
    };

    const discardNewCategory = () => {
        newCategoryNameInput.value = "";
        newCategoryDescriptionInput.value = "";
    };

    const getCategories = () => {
        const inputData = {
            seller_user_id: sellerId,
        };
        axios
            .post(
                "http://localhost/electrostate/getallcategories.php",
                inputData
            )
            .then(response => {
                console.log(response.data);
                let categoryCard = ``;
                response.data.map(values => {
                    localStorage.setItem("categoryName", values.name);
                    categoryCard += `<a id="${values.category_id}" href="" class="seller-category seller-category-cards">
                    <p class="seller-category-name">${values.name}</p>
                    <img src="assets/Laptop-collection.webp" alt="" />
                </a>`;
                });
                sellerTop5Page.innerHTML = categoryCard;

                const openCategoryBtn = document.querySelectorAll(
                    ".seller-category-cards"
                );
                openCategoryBtn.forEach(btn => {
                    btn.addEventListener("click", e => {
                        e.preventDefault();
                        openCategory(btn.id);
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const openCategory = categoryId => {
        categoryPage.classList.remove("seller-popup-hidden");
        categoryPageSubtitle.innerText = localStorage.getItem("categoryName");
        const inputData = {
            categories_id: categoryId,
            seller_user_id: sellerId,
        };
        axios
            .post(
                "http://localhost/electrostate/getproductsundercategory.php",
                inputData
            )
            .then(response => {
                console.log(response.data);
                let productCard = ``;
                response.data.map(values => {
                    productCard += `<div id="${values.product_id}" class="seller-categories-product">
                    <div class="seller-categories-product-info">
                        <img
                            class="seller-product-img"
                            src="assets/Laptop-collection.webp"
                            alt="" />
                        <p>${values.category_name}</p>
                        <p>${values.name}</p>
                        <p>${values.price}</p>
                        <p>
                            Quantity sold:
                            <span>${values.quantity_sold}</span>
                        </p>
                        <p>
                            Quantity left:
                            <span>${values.quantity_left}</span>
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
                categoryPage.innerHTML = productCard;
            });
    };

    //
    //
    //
    localStorage.setItem("sellerId", "1");
    const sellerId = localStorage.getItem("sellerId");
    getCategories();

    categoriesPage.classList.remove("seller-popup-hidden");
    addNewCategoryBtn.addEventListener("click", e => {
        e.preventDefault();
        openNewCategoryPage();
    });
    closeNewCategoryBtn.addEventListener("click", e => {
        e.preventDefault();
        closeNewCategoryPage();
    });
    saveNewCategoryBtn.addEventListener("click", e => {
        e.preventDefault();
        saveNewCategory();
    });
    discardNewCategoryBtn.addEventListener("click", e => {
        e.preventDefault();
        discardNewCategory();
    });
};
