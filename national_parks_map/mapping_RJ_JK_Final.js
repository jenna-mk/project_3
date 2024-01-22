
function createAllMarkers() {
    // Use these links to get the Ameneties data
    // Grand Canyon (GRCA)
    let linkAmenitiesGRCA = "https://developer.nps.gov/api/v1/amenities?q=GRCA&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    // Petrified Forest (PEFO)
    let linkAmenitiesPEFO = "https://developer.nps.gov/api/v1/amenities?q=PEFO&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    // Saguaro (SAGU)
    let linkAmenitiesSAGU = "https://developer.nps.gov/api/v1/amenities?q=SAGU&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";

    // Use these links to get the Activities data
    // Grand Canyon (GRCA)
    let linkActivitiesGRCA = "https://developer.nps.gov/api/v1/activities?q=GRCA&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    // Petrified Forest (PEFO)
    let linkActivitiesPEFO = "https://developer.nps.gov/api/v1/activities?q=PEFO&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    // Saguaro (SAGU)
    let linkActivitiesSAGU = "https://developer.nps.gov/api/v1/activities?q=SAGU&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";

    // Use these links to get the Campgrounds data
    // Grand Canyon URLs
    let campgroundsLinkGRCA = "https://developer.nps.gov/api/v1/campgrounds?parkCode=GRCA&stateCode=AZ&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    // Saguaro URLs
    let campgroundsLinkSAGU = "https://developer.nps.gov/api/v1/campgrounds?parkCode=sagu&stateCode=&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22"
    // Petrified Forest URLs
    let campgroundsLinkPEFO = "https://developer.nps.gov/api/v1/campgrounds?parkCode=PEFO&stateCode=&api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22"

    let amenitiesMarkers = [];
    let activitiesMarkers = [];
    let campgroundMarkers = [];

    // Promise.all() ensures all queries are made before running then()
    Promise.all([
        d3.json(linkAmenitiesGRCA),
        d3.json(linkAmenitiesPEFO),
        d3.json(linkAmenitiesSAGU),
        d3.json(linkActivitiesGRCA),
        d3.json(linkActivitiesPEFO),
        d3.json(linkActivitiesSAGU),
        d3.json(campgroundsLinkGRCA),
        d3.json(campgroundsLinkPEFO),
        d3.json(campgroundsLinkSAGU),
        ])
        .then(([amenityGRCA, amenityPEFO, amenitySAGU, activityGRCA, activityPEFO, activitySAGU, campgroundGRCA, campgroundPEFO, campgroundSAGU]) => {

            // set up amenities markers
            let GRCAAmenitiesList = "<h2>" + parkNames[0] + "</h2> <h3> Available Amenities:</h3><hr>";
            amenityGRCA.data.forEach((amenity) => {
                GRCAAmenitiesList = GRCAAmenitiesList + amenity.name + " <br> "
            })
            let marker1 = L.marker(parksCoords[0]).bindPopup(GRCAAmenitiesList,{"maxHeight":"350"})
            amenitiesMarkers.push(marker1)

            let PEFOAmenitiesList = "<h2>" + parkNames[1] + "</h2> <h3> Available Amenities:</h3><hr>";
            amenityPEFO.data.forEach((amenity) => {
                PEFOAmenitiesList = PEFOAmenitiesList + amenity.name + " <br> "
            })
            let marker2 = L.marker(parksCoords[1]).bindPopup(PEFOAmenitiesList,{"maxHeight":"350"});
            amenitiesMarkers.push(marker2);

            let SAGUAmenitiesList = "<h2>" + parkNames[2] + "</h2> <h3> Available Amenities:</h3><hr>";
            amenitySAGU.data.forEach((amenity) => {
                SAGUAmenitiesList = SAGUAmenitiesList + amenity.name + " <br> "
            });
            let marker3 = L.marker(parksCoords[2]).bindPopup(SAGUAmenitiesList,{"maxHeight":"350"});
            amenitiesMarkers.push(marker3);

            // set up activities markers
            let GRCAActivitiesList = "<h2>" + parkNames[0] + "</h2> <h3> Available Activities:</h3><hr>";
            activityGRCA.data.forEach((activity) => {
                GRCAActivitiesList = GRCAActivitiesList + activity.name + " <br> "
            })
            let marker4 = L.marker(parksCoords[0]).bindPopup(GRCAActivitiesList,{"maxHeight":"350"})
            activitiesMarkers.push(marker4);

            let PEFOActivitiesList = "<h2>" + parkNames[1] + "</h2> <h3> Available Activities:</h3><hr>";
            activityPEFO.data.forEach((activity) => {
                PEFOActivitiesList = PEFOActivitiesList + activity.name + " <br> "
            })
            let marker5 = L.marker(parksCoords[1]).bindPopup(PEFOActivitiesList,{"maxHeight":"350"});
            activitiesMarkers.push(marker5);

            let SAGUActivitiesList = "<h2>" + parkNames[2] + "</h2> <h3> Available Activities:</h3><hr>";
            activitySAGU.data.forEach((activity) => {
                SAGUActivitiesList = SAGUActivitiesList + activity.name + " <br> "
            });
            let marker6 = L.marker(parksCoords[2]).bindPopup(SAGUActivitiesList,{"maxHeight":"350"});
            activitiesMarkers.push(marker6);

            // set up campgrounds markers
            let numGRCACampgrounds = campgroundGRCA.data.length;
            for (let i = 0; i < numGRCACampgrounds; i++) {
                let campName = campgroundGRCA.data[i].name;
                let campLat = parseFloat(campgroundGRCA.data[i].latitude);
                let campLon = parseFloat(campgroundGRCA.data[i].longitude);
                let campDescrip = campgroundGRCA.data[i].description;
                let campReserve = parseFloat(campgroundGRCA.data[i].numberOfSitesReservable);
                let campFirstServe = parseFloat(campgroundGRCA.data[i].numberOfSitesFirstComeFirstServe);
                // Using the data pulled above, create a marker for each campground that displays its name and the different types of campsites available
                let marker = L.marker([campLat, campLon])
                .bindPopup(`<h2>${campName}</h2><hr><strong>Reservable:</strong> ${campReserve}<br><strong>First Come First Serve:</strong> ${campFirstServe}<br><strong>Campsite Description:</strong> ${campDescrip}`);
                campgroundMarkers.push(marker);
            };

            let numPEFOCampgrounds = campgroundPEFO.data.length;
            for (let i = 0; i < numPEFOCampgrounds; i++) {
                let campName = campgroundPEFO.data[i].name;
                let campLat = parseFloat(campgroundPEFO.data[i].latitude);
                let campLon = parseFloat(campgroundPEFO.data[i].longitude);
                let campDescrip = campgroundPEFO.data[i].description;
                let campReserve = parseFloat(campgroundPEFO.data[i].numberOfSitesReservable);
                let campFirstServe = parseFloat(campgroundPEFO.data[i].numberOfSitesFirstComeFirstServe);
                // Using the data pulled above, create a marker for each campground that displays its name and the different types of campsites available
                let marker = L.marker([campLat, campLon])
                .bindPopup(`<h2>${campName}</h2><hr><strong>Reservable:</strong> ${campReserve}<br><strong>First Come First Serve:</strong> ${campFirstServe}<br><strong>Campsite Description:</strong> ${campDescrip}`);
                campgroundMarkers.push(marker);
            };

            let numSAGUCampgrounds = campgroundSAGU.data.length;
            for (let i = 0; i < numSAGUCampgrounds; i++) {
                let campName = campgroundSAGU.data[i].name;
                let campLat = parseFloat(campgroundSAGU.data[i].latitude);
                let campLon = parseFloat(campgroundSAGU.data[i].longitude);
                let campDescrip = campgroundSAGU.data[i].description;
                let campReserve = parseFloat(campgroundSAGU.data[i].numberOfSitesReservable);
                let campFirstServe = parseFloat(campgroundSAGU.data[i].numberOfSitesFirstComeFirstServe);
                // Using the data pulled above, create a marker for each campground that displays its name and the different types of campsites available
                let marker = L.marker([campLat, campLon])
                .bindPopup(`<h2>${campName}</h2><hr><strong>Reservable:</strong> ${campReserve}<br><strong>First Come First Serve:</strong> ${campFirstServe}<br><strong>Campsite Description:</strong> ${campDescrip}`);
                campgroundMarkers.push(marker);
            };

            // initialize map with markers, geoJSON
            makeMap(amenitiesMarkers, activitiesMarkers, campgroundMarkers);
        })
        .catch(error => {
            // Handle errors from any of the asynchronous calls
            console.error('Error:', error);
        });
}

function makeMap(amenitiesMarkers, activitiesMarkers, campgroundMarkers) {

    // Adding the tile layer
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    let amenitiesLayer = L.layerGroup(amenitiesMarkers);
    let activitiesLayer = L.layerGroup(activitiesMarkers);
    let campgroundMarkersLayer = L.layerGroup(campgroundMarkers)

    let baseMaps = {
        "Street": street
    };

    let overlayMaps = {
        "Amenities": amenitiesLayer,
        "Activities": activitiesLayer,
        "Campgrounds": campgroundMarkersLayer
    };

    let myMap = L.map("map", {
        center: [34.048900, -111.093700],
        zoom: 7,
        layers: [street, amenitiesLayer]
    });

    amenitiesLayer.addTo(myMap);

    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

    createBoundaries(myMap);
}

// Creating Park Boundaries
function createBoundaries(myMap) {
    // Use this link to get the GeoJSON data.
    // Grand Canyon (GRCA)
    let linkGRCA = "https://developer.nps.gov/api/v1/mapdata/parkboundaries/GRCA?api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    // Petrified Forest (PEFO)
    let linkPEFO = "https://developer.nps.gov/api/v1/mapdata/parkboundaries/PEFO?api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    // Saguaro (SAGU)
    let linkSAGU = "https://developer.nps.gov/api/v1/mapdata/parkboundaries/SAGU?api_key=blywEmwS4iNmlVuXudK3iS8RjebrGcdU5Yx4xj22";
    let parksAZ = [linkGRCA, linkPEFO, linkSAGU]
    

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
                }
            }).addTo(myMap);
        });
    }
}

// Central Park Coordinates for markers (GRCA, PEFO, SAGU)
let parksCoords = [[36.2679,-112.3535],[35.0037,-109.7889],[32.2967,-111.1666]]
let parkNames = ["Grand Canyon National Park","Petrified Forest National Park","Saguaro National Park"]
createAllMarkers()
