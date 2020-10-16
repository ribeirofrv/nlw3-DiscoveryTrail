// create map
const map = L.map("mapid").setView([-22.9147588, -43.2032589], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

//create and add marker
let marker;

map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField() {
    // take the #images container
    const container = document.querySelector("#images");
    // take the container to duplicate (.new-upload)
    const fieldsContainer = document.querySelectorAll(".new-upload");
    // duplicate the last image added
    const newFieldContainer = fieldsContainer[
        fieldsContainer.length - 1
    ].cloneNode(true);

    //check if the field is empty, if yes, do not add the image container
    const input = newFieldContainer.children[0];

    if (input.value == "") {
        return 
    }

    //clear the field before adding it to the image container
    input.value = "";

    // add the duplicate to the #image container
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll(".new-upload");

    if (fieldsContainer.length <= 1) {
        //clear field
        span.parentNode.children[0].value = "";
        return;
    }

    // delete the field
    span.parentNode.remove();
}

// select yes or not
function toggleSelect(event) {
    // remove class active
    document
        .querySelectorAll(".button-select button")
        .forEach((button) => button.classList.remove("active"));
    // add class active to current target
    const button = event.currentTarget;
    button.classList.add("active");
    // update input hidden with the selected value
    const input = document.querySelector('[name="open_on_weekends"]');
    // get data value from buttons
    input.value = button.dataset.value
}