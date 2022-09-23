window.onload = () => {
    //
    // Variables
    //
    const addNewCategoryBtn = document.getElementById("add-new-category-btn");
    const categoriesPage = document.getElementById("seller-categories-page");
    const newCategoryPage = document.getElementById("seller-new-category-page");

    //
    // Functions
    //
    const openNewCategoryPage = () => {
        categoriesPage.classList.add("seller-popup-hidden");
        newCategoryPage.classList.remove("seller-popup-hidden");
    };

    //
    //
    //
    addNewCategoryBtn.addEventListener("click", e => {
        e.preventDefault();
        openNewCategoryPage();
    });
};
