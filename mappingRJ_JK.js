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
// let myMap = L.map("map", {
//     center: [34.048900, -111.093700],
//     zoom: 7
// });
  
// Adding the tile layer
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Central Park Coordinates for markers (GRCA, PEFO, SAGU)
let parksCoords = [[36.2679,-112.3535],[35.0037,-109.7889],[32.2967,-111.1666]]


// Use this link to get the GeoJSON data.
// Grand Canyon (GRCA)
let linkGRCA = "https://developer.nps.gov/api/v1/mapdata/parkboundaries/GRCA?api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
// Petrified Forest (PEFO)
let linkPEFO = "https://developer.nps.gov/api/v1/mapdata/parkboundaries/PEFO?api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
// Saguaro (SAGU)
let linkSAGU = "https://developer.nps.gov/api/v1/mapdata/parkboundaries/SAGU?api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
let parksAZ = [linkGRCA, linkPEFO, linkSAGU]
let parkNames = ["Grand Canyon National Park","Petrified Forest National Park","Saguaro National Park"]

let amenitiesMarkers = [];

amenitiesCreateMarkers();

function amenitiesCreateMarkers(){
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
    for(let i = 0;i<amenitiesAZ.length;i++) {
        let amenities,amenitiesList;
        d3.json(amenitiesAZ[i]).then(function(data) {
            // console.log(data.data)
            amenities = data.data;
            // amenitiesList = "<h2>Available Park Amenities:</h2>";
            amenitiesList = "<h2>" + parkNames[i] + "</h2> <h3> Available Amenities:</h3><hr>";
            amenities.forEach((amenity) => {
                // console.log(amenity.name)
                amenitiesList = amenitiesList + amenity.name + " <br> "
            })
            
            amenitiesPopUp.push(amenitiesList);
            // makeAmenitiesMarker(amenitiesList,i);
            amenitiesMarkers.push(
                // layer.bindPopup(amenitiesPopUp[i],{"maxHeight":"350"})
                L.marker(parksCoords[i]).bindPopup(amenitiesList,{"maxHeight":"350"})
            );
            if(i == 2) {
                // console.log(amenitiesMarkers);
                // intermediate(amenitiesMarkers);
                activitiesCreateMarkers(amenitiesMarkers);
            }
        });
    };
}


let activitiesMarkers = [];

function activitiesCreateMarkers(amenitiesMarkers) {
    // Use this link to get the Activities data
    // Grand Canyon (GRCA)
    let linkActivitiesGRCA = "https://developer.nps.gov/api/v1/activities?q=GRCA&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    // Petrified Forest (PEFO)
    let linkActivitiesPEFO = "https://developer.nps.gov/api/v1/activities?q=PEFO&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    // Saguaro (SAGU)
    let linkActivitiesSAGU = "https://developer.nps.gov/api/v1/activities?q=SAGU&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    let activitiesAZ = [linkActivitiesGRCA, linkActivitiesPEFO, linkActivitiesSAGU]
    let activitiesPopUp = [];

    // Create Activities Popup for each Park
    for(let i = 0;i<activitiesAZ.length;i++) {
        // console.log(`Acitivities loop ${i}`);
        let activities,activitiesList;
        d3.json(activitiesAZ[i]).then(function(data) {
            // console.log(data.data)
            activities = data.data;
            // activitiesList = "<h2>Available Park Activities:</h2>";
            activitiesList = "<h2>" + parkNames[i] + "</h2> <h3> Available Activities:</h3><hr>";
            activities.forEach((activity) => {
                // console.log(amenity.name)
                activitiesList = activitiesList + activity.name + " <br> "
            })
            
            activitiesPopUp.push(activitiesList);
            // makeActivitiesMarker(activitiesList,i);
            activitiesMarkers.push(
                // layer.bindPopup(amenitiesPopUp[i],{"maxHeight":"350"})
                L.marker(parksCoords[i]).bindPopup(activitiesList,{"maxHeight":"350"})
            );
            if(i == 2) {
                // console.log("Inside loop: ");
                // console.log(activitiesMarkers[0]);
                // return activitiesMarkers;
                makeMap(amenitiesMarkers,activitiesMarkers);
            }
        });
    };
}

// Create a global array for the campground markers
let campgroundMarkers = [];

// Write a function to create the markers
function createCampgroundMarker(url) {
    // Add the links for the Arizona National Parks campgrounds
    // Grand Canyon
    let campgroundsLinkGRCA = "https://developer.nps.gov/api/v1/campgrounds?parkCode=GRCA&stateCode=AZ&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm";
    // Petified Forest
    let campgroundsLinkPEFO = "https://developer.nps.gov/api/v1/campgrounds?parkCode=PEFO&stateCode=&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm";
    // Saguaro
    let campgroundsLinkSAGU = "https://developer.nps.gov/api/v1/campgrounds?parkCode=sagu&stateCode=&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm";

    let campgroundsAZ = [campgroundsLinkGRCA, campgroundsLinkPEFO, campgroundsLinkSAGU];
    let campgroundsPopUp = [];
    for (let i = 0; i < campgroundsAZ.length; i++) {
        console.log([i]);
//         let campgrounds = [];
//         // Fetch the data 
//         d3.json().then(data => {
//             // console.log(data.total);
//             // console.log(data.data);
//             // console.log(data.data[0].name);
//             // Find the number of campgrounds 
//             let numCampgrounds = data.data.length;
//             // console.log(numCampgrounds);

//             // Initialize an array for the campground markers
//             let campgroundPopUp = [];
            
//             // Create a for loop to iterate through each campground and pull the name, latitude, longitude, 
//             // and number of reservable and/or first come first serve campgrounds
//             for (let i = 0; i < numCampgrounds; i++) {
//                 let campName = data.data[i].name;
//                 let campLat = parseFloat(data.data[i].latitude);
//                 let campLon = parseFloat(data.data[i].longitude);
//                 let campDescrip = data.data[i].description;
//                 let campReserve = parseFloat(data.data[i].numberOfSitesReservable);
//                 let campFirstServe = parseFloat(data.data[i].numberOfSitesFirstComeFirstServe);
//                 // Using the data pulled above, create a marker for each campground that displays its name and the different types of campsites available
//                 let marker = L.marker([campLat, campLon])
//                     .bindPopup(`<h2>${campName}</h2><hr><strong>Reservable:</strong> ${campReserve}<br><strong>First Come First Serve:</strong> ${campFirstServe}<br><strong>Campsite Description:</strong> ${campDescrip}`);
//                 campgroundPopUp.push(marker);
//             }
//             return campgroundPopUp;
//         });
    }
};
// let campgroundGRCA = createCampgroundMarker(campgroundsLinkGRCA);
// let campgroundPEFO = createCampgroundMarker(campgroundsLinkPEFO);
// let campgroundSAGU = createCampgroundMarker(campgroundsLinkSAGU);
// console.log(campgroundGRCA);
// Promise.all([campgroundGRCA, campgroundPEFO, campgroundSAGU]).then(campgrounds => {
//     campgroundMarkers.push(...campgrounds);
// })

function makeMap(amenitiesMarkers, activitiesMarkers, campgroundMarkers) {
    let amenitiesLayer = L.layerGroup(amenitiesMarkers);
    let activitiesLayer = L.layerGroup(activitiesMarkers);
    let campgroundLayer = L.layerGroup(campgroundMarkers)

    let baseMaps = {
        Street: street
    };

    let overlayMaps = {
        Amenities: amenitiesLayer,
        Activities: activitiesLayer,
        Campgrounds: campgroundLayer
    };

    let myMap = L.map("map", {
        center: [34.048900, -111.093700],
        zoom: 7,
        layers: [street,amenitiesLayer]
    });

    L.control.layers(baseMaps, overlayMaps).addTo(myMap);

    createBoundaries(myMap);
}

// amenitiesCreateMarkers();

// Creating Park Boundaries
function createBoundaries(myMap) {
    for(let i = 0;i<parksAZ.length;i++) {
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
                    // amenitiesMarkers.push(
                    //     // layer.bindPopup(amenitiesPopUp[i],{"maxHeight":"350"})
                    //     L.marker(parksCoords[i]).bindPopup(amenitiesPopUp[i],{"maxHeight":"350"})
                    // );
                }
            }).addTo(myMap);
        });
    // })
    }
}

