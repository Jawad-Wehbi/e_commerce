window.onload = () => {
    //
    // Variables
    //
    const adsInput = document.getElementById("ads-input");
    const displayAd = document.getElementById("display-ad");
    let uploadedAd = ``;

    //
    //
    //
    adsInput.addEventListener("change", () => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploadedAd = reader.result;
            displayAd.style.backgroundImage = `url(${uploadedAd})`;
        });
        reader.readAsDataURL(this.files[0]);
    });
};
