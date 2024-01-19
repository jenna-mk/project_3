// Grand Canyon URLs
let campgroundsLinkGRCA = "https://developer.nps.gov/api/v1/campgrounds?parkCode=GRCA&stateCode=AZ&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm";
let parkInfoGRCA = "https://developer.nps.gov/api/v1/parks?parkCode=grca&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm"

// Saguaro URLs
let campgroundsLinkSAGU = "https://developer.nps.gov/api/v1/campgrounds?parkCode=sagu&stateCode=&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm"
let parkInfoSAGU = "https://developer.nps.gov/api/v1/parks?parkCode=sagu&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm"

// Petrified Forest URLs
let campgroundsLinkPEFO = "https://developer.nps.gov/api/v1/campgrounds?parkCode=PEFO&stateCode=&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm"
let parkInfoPEFO = "https://developer.nps.gov/api/v1/parks?parkCode=pefo&api_key=ataJxgSDvGoCrq0JkanRbjfZOLoZ7tus45ogaawm"

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
function createCampgroundMarker(url) {
    // Fetch the data 
    d3.json(url).then(data => {
        console.log(data.total);
        console.log(data.data);
        console.log(data.data[0].name);
        // Find the number of campgrounds 
        let numCampgrounds = data1.data.length;
        console.log(numCampgrounds);

        // Initialize an array for the campground markers
        let campgroundMarkers = [];
        
        // Create a for loop to iterate through each campground and pull the name, latitude, longitude, 
        // and number of reservable and/or first come first serve campgrounds
        for (let i = 0; i < numCampgrounds; i++) {
            let campName = data.data[i].name;
            let campLat = parseFloat(data.data[i].latitude);
            let campLon = parseFloat(data.data[i].longitude);
            let campDescrip = data.data[i].description;
            let campReserve = parseFloat(data.data[i].numberOfSitesReservable);
            let campFirstServe = parseFloat(data.data[i].numberOfSitesFirstComeFirstServe);
            // Using the data pulled above, create a marker for each campground that displays its name and the different types of campsites available
            let marker = L.marker([campLat, campLon])
            .bindPopup(`<h2>${campName}</h2><hr><strong>Reservable:</strong> ${campReserve}<br><strong>First Come First Serve:</strong> ${campFirstServe}<br><strong>Campsite Description:</strong> ${campDescrip}`);
            campgroundMarkers.push(marker);
        };
        console.log(campgroundMarkers);
        // Create a layer group for the markers and add to the map 
        let campgroundMarkersLayer = L.layerGroup(campgroundMarkers)
        campgroundMarkersLayer.addTo(myMap);
    });
};

// Invoke the function for each national park 
createCampgroundMarker(campgroundsLinkGRCA);
createCampgroundMarker(campgroundsLinkSAGU);
createCampgroundMarker(campgroundsLinkPEFO);    
