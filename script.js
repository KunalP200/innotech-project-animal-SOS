let map;

function initMap() {
  // Initialize the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20.5937, lng: 78.9629 }, // India's coordinates
    zoom: 5,
  });

  // Add a click event listener to the map
  map.addListener("click", (event) => {
    const { lat, lng } = event.latLng.toJSON();
    placeMarker(event.latLng);
    displayLocationInfo(lat, lng);
  });
}

function placeMarker(location) {
  // Add a marker to the clicked location
  new google.maps.Marker({
    position: location,
    map: map,
  });
}

function displayLocationInfo(lat, lng) {
  // Show location details in the info box
  const infoBox = document.getElementById("location-info");
  infoBox.textContent = `Latitude: ${lat.toFixed(5)}, Longitude: ${lng.toFixed(5)}.`;
}
