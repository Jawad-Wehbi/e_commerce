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
    const sellerName = document.getElementById("seller-name");

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
    const adsInput = document.getElementById("ads-input");
    const displayAd = document.getElementById("display-ad");
    let uploadedAd = ``;

    //
    //
    //
    sellerName.innerText = localStorage.getItem("sellerName");

    adsInput.addEventListener("change", () => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploadedAd = reader.result;
            displayAd.style.backgroundImage = `url(${uploadedAd})`;
        });
        reader.readAsDataURL(this.files[0]);
    });
};
