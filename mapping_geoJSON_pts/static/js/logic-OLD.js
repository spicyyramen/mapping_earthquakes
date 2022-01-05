// add console.log to check to see if our code is working
console.log("working");

// create the map object with a center and zoom level

        // assign variable to map object L.map using string mapid
        // mapid references id tag in div element in index.html
        // setview sets coordinates, 40.7 lat, -94.5 long, zoom level 4 ( of 0-18

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
        -122.375,37.61899948120117
    ],
    zoom: 2
  });


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// to just place feature marker on map without functionality
//return geoJSON data to the map
// L.geoJson(sanFranAirport, {
//   // we turn each feature into a marker on the map
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2>" + "<h3>" + feature.properties.city + ", California" + "</h3>");
//    }
// }).addTo(map);


//return geoJSON data to the map with functionality
L.geoJson(sanFranAirport, {
  // we turn each feature into a functional marker on the map
  onEachFeature: function(feature, layer) {
    console.log(feature);
    layer.bindPopup("<h2>Airport Code: " + feature.properties.id + "</h2>" + "<h3>Airport Name: " + feature.properties.name + "</h3>" );
  }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

