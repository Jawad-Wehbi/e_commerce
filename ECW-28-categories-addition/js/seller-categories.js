window.onload = () => {
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
        newCategoryNameInput.value != "";
        newCategoryDescriptionInput != "";
    };
    
    //
    //
    //
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
