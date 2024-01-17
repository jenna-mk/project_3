// const url = "https://developer.nps.gov/api/v1/mapdata/parkboundaries/GRCA?api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";

// //AZ National Parks:
// // Grand Canyon (GRCA)
// // Petrified Forest (PEFO)
// // Saguaro (SAGU)


// // Promise Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

// // Fetch the JSON data and console log it
// d3.json(url).then(function(data) {
//   console.log(data);
// });


// Creating the map object
let myMap = L.map("map", {
    center: [34.048900, -111.093700],
    zoom: 7
});
  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
  
// Use this link to get the GeoJSON data.
// Grand Canyon (GRCA)
let linkGRCA = "https://developer.nps.gov/api/v1/mapdata/parkboundaries/GRCA?api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
// Petrified Forest (PEFO)
let linkPEFO = "https://developer.nps.gov/api/v1/mapdata/parkboundaries/PEFO?api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
// Saguaro (SAGU)
let linkSAGU = "https://developer.nps.gov/api/v1/mapdata/parkboundaries/SAGU?api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";

let parksAZ = [linkGRCA, linkPEFO, linkSAGU]

// Use this link to get the Activities data
// Grand Canyon (GRCA)
let linkActivitiesGRCA = "https://developer.nps.gov/api/v1/activities?q=GRCA&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
// Petrified Forest (PEFO)
let linkActivitiesPEFO = "https://developer.nps.gov/api/v1/activities?q=PEFO&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
// Saguaro (SAGU)
let linkActivitiesSAGU = "https://developer.nps.gov/api/v1/activities?q=SAGU&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";

let activitiesAZ = [linkActivitiesGRCA, linkActivitiesPEFO, linkActivitiesSAGU]

let activitiesPopUp = []

// d3.json(linkActivitiesGRCA).then(function(data) {
//     console.log(data.data)
//     activities = data.data;
//     activities.forEach((activity) => {
//         console.log(activity.name)
//     })
// });
activitiesAZ.forEach((activitiesLink) => {
    let activities,activitiesList;
    d3.json(activitiesLink).then(function(data) {
        console.log(data.data)
        activities = data.data;
        activitiesList = "<h2>Available Park Activities:</h2>";
        activities.forEach((activity) => {
            console.log(activity.name)
            activitiesList = activitiesList + activity.name + " <br> "
        })
        activitiesPopUp.push(activitiesList);
    });
});
console.log(activitiesPopUp);


// Use this link to get the Activities data
// Grand Canyon (GRCA)
let linkAmenitiesGRCA = "https://developer.nps.gov/api/v1/amenities?q=GRCA&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
// Petrified Forest (PEFO)
let linkAmenitiesPEFO = "https://developer.nps.gov/api/v1/amenities?q=PEFO&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
// Saguaro (SAGU)
let linkAmenitiesSAGU = "https://developer.nps.gov/api/v1/amenities?q=SAGU&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
let amenitiesAZ = [linkAmenitiesGRCA, linkAmenitiesPEFO, linkAmenitiesSAGU]
let amenitiesPopUp = [];

// Create Amenities Popup for each Park
amenitiesAZ.forEach((amenitiesLink) => {
    let amenities,amenitiesList;
    d3.json(amenitiesLink).then(function(data) {
        // console.log(data.data)
        amenities = data.data;
        amenitiesList = "<h2>Available Park Amenities:</h2>";
        amenities.forEach((amenity) => {
            // console.log(amenity.name)
            amenitiesList = amenitiesList + amenity.name + " <br> "
        })
        amenitiesPopUp.push(amenitiesList);
    });
});
console.log(amenitiesPopUp);




// Getting our GeoJSON data

for(let i = 0;i<parksAZ.length;i++) {
// parksAZ.forEach((park) => {
    // if(park == linkGRCA) {
    //     let activities,activitiesList;
    //     d3.json(linkActivitiesGRCA).then(function(data) {
    //         console.log(data.data)
    //         activities = data.data;
    //         activities.forEach((activity) => {
    //             console.log(activity.name)
    //             activitiesList = activity.name + " <br> "
    //         })
    //     });
    // }
    d3.json(parksAZ[i]).then(function(data) {
        // Creating a GeoJSON layer with the retrieved data
        L.geoJson(data, {
            // Styling each feature (in this case, a neighborhood)
            style: function() {
                return {
                    color: "white",
                    // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
                    fillColor: "blue",
                    fillOpacity: 0.5,
                    weight: 1.5
                };
            },
            // This is called on each feature.
            onEachFeature: function(feature, layer) {
                // Set the mouse events to change the map styling.
                layer.on({
                    // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
                    mouseover: function(event) {
                        layer = event.target;
                        layer.setStyle({
                        fillOpacity: 0.9
                        });
                    },
                    // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
                    mouseout: function(event) {
                        layer = event.target;
                        layer.setStyle({
                            fillOpacity: 0.5
                        });
                    },
                    // When a feature (neighborhood) is clicked, it enlarges to fit the screen.
                    click: function(event) {
                        myMap.fitBounds(event.target.getBounds());
                    }
                });
                // Giving each feature a popup with information that's relevant to it
                // if(parksAZ[i] == linkGRCA) {
                //     let activitiesList = "<h2>Available Park Activities:</h2>";
                //     activities.forEach((activity) => {
                //         console.log(activity.name)
                //         activitiesList = activitiesList + activity.name + " <br> "
                //     })
                //     layer.bindPopup(activitiesList);
                //     console.log(activitiesList);
                // }
                layer.bindPopup(amenitiesPopUp[i],{"maxHeight":"350"});
            }
        }).addTo(myMap);
    });
// })
}