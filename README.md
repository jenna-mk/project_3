# Project 3: A Visualization of Arizona National Parks
The purpose of this project was to create an interactive map of the national parks in Arizona (Grand Canyon National Park, Petrified Forest National Park, and Saguaro National Park) and analyze various aspects of these parks such as available amentities, common activities, and distribution, location, and reservation status of campgrounds. This project was written in JavaScript and uses the D3, Leaflet, and Chart.js libraries to create the visualizations. 

## How to Use
To view the charts, navigate to the national_parks_charts folder. To view the chart for the activities for each park, navigate to activities/activity.html. To view the code used to create the activities chart, navigate to activities/activities_data_frame.ipynb. This chart shows the number of activities for each park classified into specific categories, and visualizes which parks have the highest number of activities for each. 

To view the chart for the entrance fees, navigate to entrance_fees/entrancefee.html. To view the code used to create the entrance fees chart, navigate to entrance_fees/entrancefee.ipynb. This chart shows the different entrance fees for each park, based on vehicle and entrance type.

To view the map for this project, navigate to national_parks_map/index_RJ_JK_Final.html. To view the code used to create this map, navigate to national_parks_map/mapping_RJ_JK_Final.js. The map shows the park boundaries of all three of the national parks in Arizona (Grand Canyon National Park, Petrified Forest National Park, and Saguaro National Park) and contains three toggleable marker layers: 
1. Amenities
   * When an amenities marker is clicked, a scrollable popup will appear that lists all of the amenities available at that park
2. Activities
   * When an activities marker is clicked, a scrollable popup will appear that lists all of the activities available at that park
3. Campgrounds
   * When a campground marker is clicked, a popup will appear that lists the name of the campground, how many reservable and first come first serve campsites are available, and a description of the campground

## Ethical Considerations
The dataset used is an open source API from the National Parks Service. There is no sensitive or personally-identifying information provided for any persons in the available data. In order to use the API, you will need to register for an API key. This requires you to provide your first name, last name, and email address (where you will receive your key). It is not clear how the NPS uses the first and last name information once you have received your key.

## References
Data source: https://www.nps.gov/subjects/developer/api-documentation.htm
Code: Brandon Knox (provided code which enabled each separate marker function to be linked together, in response to an issue due to markers loading asynchronously)


