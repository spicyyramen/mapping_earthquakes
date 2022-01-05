// add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      30, 30
    ],
    zoom: 2
  });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
streets.addTo(map);

// accessing the airport geoJSON URL
let airportData = "https://raw.githubusercontent.com/spicyyramen/mapping_earthquakes/mapping_geoJSON_pts/mapping_geoJSON_pts/majorAirports.json"

// grabbing geoJSON data
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  onEachFeature: function(feature, layer) {
    console.log(feature);
    layer.bindPopup("<h2>Airport Code: " + feature.properties.id + "</h2>" + "<h3>Airport Name: " + feature.properties.name + "</h3>" );
  }
}).addTo(map);
});
