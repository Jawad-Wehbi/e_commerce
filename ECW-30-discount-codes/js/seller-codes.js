window.onload = () => {
    //
    // Variables
    //
    const newCodeBtn = document.getElementById("add-new-code-btn");
    const codesPage = document.getElementById("seller-codes");
    const newCodePage = document.getElementById("seller-new-code");

    //
    // Functions
    //
    const openNewCodePage = () => {
        codesPage.classList.add("seller-popup-hidden");
        newCodePage.classList.remove("seller-popup-hidden");
    };

    //
    //
    //
    newCodeBtn.addEventListener("click", e => {
        e.preventDefault();
        openNewCodePage();
    });
};
