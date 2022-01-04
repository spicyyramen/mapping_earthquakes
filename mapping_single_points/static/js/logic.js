// add console.log to check to see if our code is working
console.log("working");

// create the map object with a center and zoom level

        // assign variable to map object L.map using string mapid
        // mapid references id tag in div element in index.html
        // setview sets coordinates, 40.7 lat, -94.5 long, zoom level 4 ( of 0-18

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// adds circle marker over central los angeles
L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: 'black',
  fillColor: 'yellow'
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);