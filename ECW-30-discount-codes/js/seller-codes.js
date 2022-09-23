window.onload = () => {
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
