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
    const newCodeBtn = document.getElementById("add-new-code-btn");
    const codesPage = document.getElementById("seller-codes");
    const newCodePage = document.getElementById("seller-new-code");
    const closeNewCodeBtn = document.getElementById("close-new-code-page");
    const saveNewCodeBtn = document.getElementById("save-new-code");
    const discardNewCodeBtn = document.getElementById("discard-new-code");
    const newCodeInputValue = document.getElementById("new-code-input-value");
    const newCodeInput = document.getElementById("new-code-input");
    const codesTable = document.getElementById("seller-codes-table");

    //
    // Functions
    //
    // open new discount code popup
    const openNewCodePage = () => {
        codesPage.classList.add("seller-popup-hidden");
        newCodePage.classList.remove("seller-popup-hidden");
    };

    // close new discount code popup
    const closeNewCodePage = () => {
        codesPage.classList.remove("seller-popup-hidden");
        newCodePage.classList.add("seller-popup-hidden");
    };

    // save new discount code
    const saveNewCode = () => {
        if (newCodeInputValue.value != "") {
            const inputData = {
                value: newCodeInputValue.value,
                code: newCodeInput.value,
                seller_user_id: sellerId,
            };
            axios
                .post(
                    "http://localhost/electrostate/create_discount_code.php",
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

    // discard changes in new code popup
    const discardNewCode = () => {
        newCodeInputValue.value = "";
        newCodeInput.value = "";
    };

    // get all codes for this user
    const getCodes = () => {
        const inputData = {
            seller_user_id: sellerId,
        };
        axios
            .post(
                "http://localhost/electrostate/getdiscountcodes.php",
                inputData
            )
            .then(response => {
                console.log(response.data);
                let rows = `<tr>
                <th>Value</th>
                <th>Code</th>
                <th>Delete</th>
                </tr>`;
                response.data.map(values => {
                    rows += `<tr id="" >
                    <td>${values.value}</td>
                    <td>${values.code}</td>
                    <td>
                        <a class="seller-delete-code-btn" href=""><img src="assets/trash.svg" alt="" /></a>
                    </td>
                </tr>`;
                });
                codesTable.innerHTML = rows;

                const deleteCodeBtn = document.querySelectorAll(
                    ".seller-delete-code-btn"
                );
                deleteCodeBtn.forEach(btn => {
                    btn.addEventListener("click", e => {
                        e.preventDefault();
                        deleteCode(btn.parentElement.parentElement.id);
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    // delete discount code
    const deleteCode = codeId => {
        const inputData = {
            id: codeId,
            discount_code_id: codeId,
            seller_user_id: sellerId,
        };
        axios
            .post(
                "http://localhost/electrostate/delete_discountcode.php",
                inputData
            )
            .then(response => {
                console.log(response.data);
                getCodes();
            })
            .catch(error => {
                console.log(error);
            });
    };

    //
    //
    //
    const sellerId = localStorage.getItem("sellerId");
    sellerName.innerText = localStorage.getItem("sellerName");

    getCodes();

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
