document.addEventListener("DOMContentLoaded", function () {
    const addAddressBtn = document.getElementById("addAdress");
    const addressesContainer = document.getElementById("addressesContainer");
    const currentPlaceWeb = document.getElementById("currentPlaceWeb");
    const currentPlaceContainer = document.getElementById("currentPlaceContainer");
    const addressAddContainer = document.getElementById("addressAddContainer");
    const deleteBtn = document.getElementById("deleteBtn");

    addAddressBtn.addEventListener("click", function () {
        addressesContainer.style.display = "none";
        addAddressBtn.style.display = "none";
        currentPlaceWeb.textContent = "Add New Payment address";
        currentPlaceContainer.style.justifyContent = "center";
        addressAddContainer.style.display = "block";
        addressAddContainer.classList.add("active-address");
    });

    deleteBtn.addEventListener("click", function () {
        addressAddContainer.style.display = "none";
        addressesContainer.style.display = "block";
        addAddressBtn.style.display = "inline-block";
        currentPlaceWeb.textContent = "Address Book";
        currentPlaceContainer.style.justifyContent = "space-between";
        addressAddContainer.classList.remove("active-address");
    });
});
