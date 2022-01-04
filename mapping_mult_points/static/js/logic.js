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

// get data from cities.js
let cityData=cities;



// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    // set radius for marker based on population
    radius: city.population/100000,
    color: 'orange',
    weight: 4

  })
  .bindPopup("<h2>" + city.city + ", "+ city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
 });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);