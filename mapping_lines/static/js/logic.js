// add console.log to check to see if our code is working
console.log("working");

// create the map object with a center and zoom level

        // assign variable to map object L.map using string mapid
        // mapid references id tag in div element in index.html
        // setview sets coordinates, 40.7 lat, -94.5 long, zoom level 4 ( of 0-18

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      30.1975, -97.6664
    ],
    zoom: 4.47
  });

// coordinates for each point to be used in line (SFO -> AUS -> YYZ -> JFK)
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: '5,10'
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

