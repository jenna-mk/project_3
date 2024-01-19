// Grand Canyon URLs
let campgroundsLinkGRCA = "https://developer.nps.gov/api/v1/campgrounds?parkCode=GRCA&stateCode=AZ&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm";
let parkInfoGRCA = "https://developer.nps.gov/api/v1/parks?parkCode=grca&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm"

// Saguaro URLs
let campgroundsLinkSAGU = "https://developer.nps.gov/api/v1/campgrounds?parkCode=sagu&stateCode=&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm"
let parkInfoSAGU = "https://developer.nps.gov/api/v1/parks?parkCode=sagu&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm"

// Petrified Forest URLs
let campgroundsLinkPEFO = "https://developer.nps.gov/api/v1/campgrounds?parkCode=PEFO&stateCode=&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm"
let parkInfoPEFO = "https://developer.nps.gov/api/v1/parks?parkCode=pefo&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm"

// Create an array of the links for the campgrounds for each park
let campgroundLinksAZ = [campgroundsLinkGRCA, campgroundsLinkSAGU, campgroundsLinkPEFO];

// Create map and street layer
let myMap = L.map("map", {
    center: [34.048900, -111.093700],
    zoom: 7
});
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
street.addTo(myMap);

// Write a function to create the markers
function createCampgroundMarker(url1, url2) {
    // Fetch the data 
    d3.json(url1).then(data1 => {
        console.log(data1.total);
        console.log(data1.data);
        console.log(data1.data[0].name);
        // Find the number of campgrounds 
        let numCampgrounds = data1.data.length;
        console.log(numCampgrounds);

        // Initialize an array for the campground markers
        let campgroundMarkers = [];

        // Create an if statement for the case of no campgrounds
        if (data1.total === "0") {
            d3.json(url2).then(data2 => {
                let parkLat = parseFloat(data2.data.latitude);
                let parkLon = parseFloat(data2.data.longitude);
                let marker = L.marker([parkLat, parkLon])
                .bindPopup(`There is no RV, car, or front country camping in the park. Please check the park website for backpacking and hiking options, permits, and information.`);
                campgroundMarkers.push(marker);

                // Add the markers to the mpa inside the inner .then() block
                let campgroundMarkersLayer = L.layerGroup(campgroundMarkers);
                campgroundMarkersLayer.addTo(myMap);
            });
        } else {
        
            // Create a for loop to iterate through each campground and pull the name, latitude, longitude, 
            // and number of reservable and/or first come first serve campgrounds
            for (let i = 0; i < numCampgrounds; i++) {
                let campName = data1.data[i].name;
                let campLat = parseFloat(data1.data[i].latitude);
                let campLon = parseFloat(data1.data[i].longitude);
                let campDescrip = data1.data[i].description;
                let campReserve = parseFloat(data1.data[i].numberOfSitesReservable);
                let campFirstServe = parseFloat(data1.data[i].numberOfSitesFirstComeFirstServe);
                // Using the data pulled above, create a marker for each campground that displays its name and the different types of campsites available
                let marker = L.marker([campLat, campLon])
                .bindPopup(`<h2>${campName}</h2><hr>Reservable: ${campReserve}<br>First Come First Serve: ${campFirstServe}<br>Campsite Description: ${campDescrip}`);
                campgroundMarkers.push(marker);
            };
            console.log(campgroundMarkers);
            // Create a layer group for the markers and add to the map 
            let campgroundMarkersLayer = L.layerGroup(campgroundMarkers)
            campgroundMarkersLayer.addTo(myMap); 
        };
    });
};

// Invoke the function for each national park 
createCampgroundMarker(campgroundsLinkGRCA, parkInfoGRCA);
createCampgroundMarker(campgroundsLinkSAGU, parkInfoSAGU);
createCampgroundMarker(campgroundsLinkPEFO, parkInfoPEFO);    
