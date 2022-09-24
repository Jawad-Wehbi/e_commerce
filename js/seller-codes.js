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
    const newCodeBtn = document.getElementById("add-new-code-btn");
    const codesPage = document.getElementById("seller-codes");
    const newCodePage = document.getElementById("seller-new-code");
    const closeNewCodeBtn = document.getElementById("close-new-code-page");
    const saveNewCodeBtn = document.getElementById("save-new-code");
    const discardNewCodeBtn = document.getElementById("discard-new-code");
    const newCodeInput = document.getElementById("new-code-input");

    //
    // Functions
    //
    const openNewCodePage = () => {
        codesPage.classList.add("seller-popup-hidden");
        newCodePage.classList.remove("seller-popup-hidden");
    };

    const closeNewCodePage = () => {
        codesPage.classList.remove("seller-popup-hidden");
        newCodePage.classList.add("seller-popup-hidden");
    };

    const saveNewCode = () => {
        if (newCodeInput.value != "") {
            // send to database
            location.reload();
        }
    };

    const discardNewCode = () => {
        newCodeInput.value = "";
    };

    //
    //
    //
    newCodeBtn.addEventListener("click", e => {
        e.preventDefault();
        openNewCodePage();
    });
    closeNewCodeBtn.addEventListener("click", e => {
        e.preventDefault();
        closeNewCodePage();
    });
    saveNewCodeBtn.addEventListener("click", e => {
        e.preventDefault();
        saveNewCode();
    });
    discardNewCodeBtn.addEventListener("click", e => {
        e.preventDefault();
        discardNewCode();
    });
};
