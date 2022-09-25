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
    const categoryPageContent = document.getElementById(
        "seller-category-page-content"
    );
    const categoryPageSubtitle = document.getElementById(
        "seller-category-page-header-subtitle"
    );
    const addNewProductBtn = document.getElementById("add-new-product-btn");
    const closeCategoryPageBtn = document.getElementById(
        "close-category-page-btn"
    );
    const newProductPage = document.getElementById("seller-new-product-page");
    const closeNewProductBtn = document.getElementById("close-new-product-btn");
    const newProductPagCategName = document.getElementById(
        "seller-category-new-product-categ-name"
    );
    const discardEditProductBtn = document.getElementById(
        "seller-discard-edit-product"
    );
    const productNameInput = document.getElementById(
        "seller-product-name-input"
    );
    const productPriceInput = document.getElementById(
        "seller-product-price-input"
    );
    const productDescriptionInput = document.getElementById(
        "seller-product-description-input"
    );
    //
    // Functions
    //
    //  open new category popup
    const openNewCategoryPage = () => {
        categoriesPage.classList.add("seller-popup-hidden");
        newCategoryPage.classList.remove("seller-popup-hidden");
    };

    // close new category popup
    const closeNewCategoryPage = () => {
        newCategoryNameInput.value = "";
        newCategoryDescriptionInput.value = "";
        categoriesPage.classList.remove("seller-popup-hidden");
        newCategoryPage.classList.add("seller-popup-hidden");
    };

    // Save new category
    const saveNewCategory = () => {
        if (
            newCategoryNameInput.value != "" &&
            newCategoryDescriptionInput.value != ""
        ) {
            const inputData = {
                name: newCategoryNameInput.value,
                description: newCategoryDescriptionInput.value,
                seller_user_id: sellerId,
            };
            axios
                .post(
                    "http://localhost/electrostate/add_categories_api.php",
                    inputData
                )
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
            location.reload();
        }
    };

    // discard new category modifications
    const discardNewCategory = () => {
        newCategoryNameInput.value = "";
        newCategoryDescriptionInput.value = "";
    };

    //  get all categories for this user
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
                let categoryCard = ``;
                response.data.map(values => {
                    categoryCard += `<a id="${values.category_id}" href="" class="seller-category seller-category-cards">
                    <p class="seller-category-name">${values.name}</p>
                    <img src="assets/Laptop-collection.webp" alt="" />
                </a>`;
                });
                categoriesPage.innerHTML = categoryCard;
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

    // open category popup
    const openCategory = categoryId => {
        categoryPage.classList.remove("seller-popup-hidden");
        addNewCategoryBtn.classList.add("seller-popup-hidden");
        categoriesPage.classList.add("seller-popup-hidden");
        // const categoryIdCard = document.getElementById(`${categoryId}`);
        // localStorage.setItem(
        //     "categoryName",
        //     categoryIdCard.childNodes[1].innerText
        // );
        // categoryPageSubtitle.innerText = localStorage.getItem("categoryName");
        categoryPageSubtitle.innerText = `Category 1`;

        const inputData = {
            categories_id: categoryId,
            // seller_user_id: sellerId,
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
                        <p>Category Name</p>
                        <p>${values.name}</p>
                        <p>${values.price}</p>
                        <p>
                            Quantity sold:
                            <span></span>
                        </p>
                        <p>
                            Quantity left:
                            <span></span>
                        </p>
                    </div>
                    <div class="seller-categories-product-views">
                        <p>${values.nb_of_views}</p>
                        <img src="assets/eye.svg" alt="" />
                    </div>
                    <div class="seller-categories-product-btns">
                        <a class="seller-edit-btn" href="">Edit</a>
                        <a class="seller-delete-btn" href="">Delete</a>
                    </div>
                </div>`;
                });
                categoryPageContent.innerHTML = productCard;
            });

        const editProductBtn = document.querySelectorAll(".seller-edit-btn");
        editProductBtn.forEach(btn => {
            btn.addEventListener("click", e => {
                e.preventDefault();
                openEditProduct(btn.id);
            });
        });

        const openEditProduct = productId => {
            sellerEditProductPage.classList.remove("seller-popup-hidden");
            localStorage.setItem("productId", productId);

            discardEditProductBtn.addEventListener("click", e => {
                e.preventDefault();
                discardEditProduct();
            });
        };

        closeCategoryPageBtn.addEventListener("click", e => {
            e.preventDefault();
            closeCategoryPage();
        });
        addNewProductBtn.addEventListener("click", e => {
            e.preventDefault();
            openNewProductPage();
        });
    };

    // discard modifications in edit product
    const discardEditProduct = () => {
        productNameInput.value = "";
        productPriceInput.value = "";
        productDescriptionInput.value = "";
    };

    // close category popup
    const closeCategoryPage = () => {
        categoryPage.classList.add("seller-popup-hidden");
        addNewCategoryBtn.classList.remove("seller-popup-hidden");
        categoriesPage.classList.remove("seller-popup-hidden");
    };

    // open new product popup in this category
    const openNewProductPage = () => {
        newProductPagCategName.value = localStorage.getItem("categoryName");
        newProductPage.classList.remove("seller-popup-hidden");
        categoryPage.classList.add("seller-popup-hidden");
        closeNewProductBtn.addEventListener("click", e => {
            e.preventDefault();
            closeNewProductPage();
        });
    };

    // close new product popup
    const closeNewProductPage = () => {
        newProductPage.classList.add("seller-popup-hidden");
        categoryPage.classList.remove("seller-popup-hidden");
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
