document.addEventListener("DOMContentLoaded", function () {
    const addAddressBtn = document.getElementById("addAdress");
    const addressesContainer = document.getElementById("addressesContainer");
    const currentPlaceWeb = document.getElementById("currentPlaceWeb");
    const currentPlaceContainer = document.getElementById("currentPlaceContainer");
    const addressAddContainer = document.getElementById("addressAddContainer");
    const deleteBtn = document.getElementById("deleteBtn");
    const personReceiveInp = document.getElementById("personReceiveInp");
    const streetAdressInp = document.getElementById("streetAdressInp");
    const stateInp = document.getElementById("stateInp");
    const cityInp = document.getElementById("cityInp");
    const postalCodeInp = document.getElementById("postalCodeInp");
    const invalidName = document.getElementById("invalidName");
    const invalidStreet = document.getElementById("invalidStreet");
    const invalidState = document.getElementById("invalidState");
    const invalidCity = document.getElementById("invalidCity");
    const invalidPostalCode = document.getElementById("invalidPostalCode");

    function validateInputs() {
        let isValid = true;

        if (personReceiveInp.value.trim() === "") {
            invalidName.style.display = "block";
            isValid = false;
        } else {
            invalidName.style.display = "none";
        }

        if (streetAdressInp.value.trim() === "") {
            invalidStreet.style.display = "block";
            isValid = false;
        } else {
            invalidStreet.style.display = "none";
        }

        if (stateInp.value.trim() === "") {
            invalidState.style.display = "block";
            isValid = false;
        } else {
            invalidState.style.display = "none";
        }

        if (cityInp.value.trim() === "") {
            invalidCity.style.display = "block";
            isValid = false;
        } else {
            invalidCity.style.display = "none";
        }

        const postalCodeOrEmailRegex = /^[0-9]{5}(?:-[0-9]{4})?$|^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (postalCodeInp.value.trim() === "") {
            invalidPostalCode.textContent = "Postal Code is required";
            invalidPostalCode.style.display = "block";
            isValid = false;
        } else if (!postalCodeOrEmailRegex.test(postalCodeInp.value.trim())) {
            invalidPostalCode.textContent = "Invalid Postal Code";
            invalidPostalCode.style.display = "block";
            isValid = false;
        } else {
            invalidPostalCode.style.display = "none";
        }

        return isValid;
    }

    function createAddressCard() {
        if (personReceiveInp.value.trim() === "" || streetAdressInp.value.trim() === "" || stateInp.value.trim() === "" || cityInp.value.trim() === "" || postalCodeInp.value.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        const customerName = personReceiveInp.value;
        const addressDescription = `${streetAdressInp.value}, ${stateInp.value}, ${cityInp.value}`;
        const newAddressCardHTML = `
        <div style="border-bottom: 0.5px solid var(--color-border);" class="flex justify-between py-5 text-white">
        <div class="flex items-start gap-5">
            <div>
                <img src="../assets/Img/map.svg" alt="">
            </div>
            <div class="flex flex-col float-left gap-2.5">
                <span id="customer">${customerName}</span>
                <p id="desciptionPlace">${addressDescription}</p>
            </div>
        </div>
        <div class="flex items-center gap-1.5">
            <img src="../assets/Img/flag.svg" alt="">
            <button id="statusDef">DEFAULT</button>
        </div>
    </div>
        `;

        const innerContainerAddress = document.getElementById("innerContainerAddress");
        innerContainerAddress.innerHTML += newAddressCardHTML;

        personReceiveInp.value = "";
        streetAdressInp.value = "";
        stateInp.value = "";
        cityInp.value = "";
        postalCodeInp.value = "";

        addressAddContainer.style.display = "none";
        addressesContainer.style.display = "block";
        addAddressBtn.style.display = "inline-block";
        currentPlaceWeb.textContent = "Address Book";
        currentPlaceContainer.style.justifyContent = "space-between";
        addressAddContainer.classList.remove("active-address");
    }



    addAddressBtn.addEventListener("click", function () {
        addressesContainer.style.display = "none";
        addAddressBtn.style.display = "none";
        currentPlaceWeb.textContent = "Add New Payment address";
        currentPlaceContainer.style.justifyContent = "center";
        addressAddContainer.style.display = "block";
        addressAddContainer.classList.add("active-address");
    });

    deleteBtn.addEventListener("click", function () {
        personReceiveInp.value = "";
        streetAdressInp.value = "";
        stateInp.value = "";
        cityInp.value = "";
        postalCodeInp.value = "";

        invalidName.style.display = "none";
        invalidStreet.style.display = "none";
        invalidState.style.display = "none";
        invalidCity.style.display = "none";
        invalidPostalCode.style.display = "none";

        addressAddContainer.style.display = "none";
        addressesContainer.style.display = "block";
        addAddressBtn.style.display = "inline-block";
        currentPlaceWeb.textContent = "Address Book";
        currentPlaceContainer.style.justifyContent = "space-between";
        addressAddContainer.classList.remove("active-address");
    });

    document.getElementById("saveBtn").addEventListener("click", function () {
        if (validateInputs()) {
            createAddressCard();
            personReceiveInp.value = "";
            streetAdressInp.value = "";
            stateInp.value = "";
            cityInp.value = "";
            postalCodeInp.value = "";
        }
    });
});
