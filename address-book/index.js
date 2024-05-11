document.addEventListener("DOMContentLoaded", function () {
    const addAddressBtn = document.getElementById("addAdress");
    const addressesContainer = document.getElementById("addressesContainer");
    const body = document.querySelector("body");
    const currentPlaceWeb = document.getElementById("currentPlaceWeb");
    const currentPlaceContainer = document.getElementById("currentPlaceContainer")
    const addressAddContainer = document.getElementById("addressAddContainer")

    addAddressBtn.addEventListener("click", function () {
        addressesContainer.style.display = "none";
        if (addressesContainer.style.display = "none") {
            addAddressBtn.style.display = "none";
            currentPlaceWeb.textContent = "Add New Payment address";
            currentPlaceContainer.style.justifyContent = "center";
            //addressNewPlace class list add do pls
            addressAddContainer.id = "active-address"
        } else {
            addAddressBtn.style.display = "block";
        }
        body.appendChild(addPaymentAddressDiv);
    });
});
