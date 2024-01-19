import json
from pprint import pprint

json_data = {

"total":"1",
"limit":"50",
"start":"0",  
"data":[

{

"id":"B7FF43E5-3A95-4C8E-8DBE-72D8608D6588"

,"url":

"https://www.nps.gov/grca/index.htm"

,"fullName":"Grand Canyon National Park"      

,"parkCode":"grca"

,"description":"Grand Canyon National Park, in Northern Arizona, encompasses 278 miles (447 km) of the Colorado River and adjacent uplands. Located on ancestral homeland of 11 Associated Tribes, Grand Canyon is one of the most spectacular examples of erosion anywhere in the world—unmatched in the incomparable vistas it offers visitors from the rims. The South Rim is open. The North Rim is CLOSED for the winter."

,"latitude":

"36.0001165336" 

,"longitude":

"-112.121516363" 

,"latLong":"lat:36.0001165336, long:-112.121516363"

,"activities":[{"id":"09DF0950-D319-4557-A57E-04CD2F63FF42","name":"Arts and Culture"},{"id":"FAED7F97-3474-4C21-AB42-FB0768A2F826","name":"Cultural Demonstrations"},{"id":"5F723BAD-7359-48FC-98FA-631592256E35","name":"Auto and ATV"},{"id":"0B4A5320-216D-451A-9990-626E1D5ACE28","name":"Scenic Driving"},{"id":"13A57703-BB1A-41A2-94B8-53B692EB7238","name":"Astronomy"},{"id":"D37A0003-8317-4F04-8FB0-4CF0A272E195","name":"Stargazing"},{"id":"7CE6E935-F839-4FEC-A63E-052B1DEF39D2","name":"Biking"},{"id":"8D778629-F603-4C50-A121-6F4BB2FE2C4B","name":"Road Biking"},{"id":"071BA73C-1D3C-46D4-A53C-00D5602F7F0E","name":"Boating"},{"id":"A59947B7-3376-49B4-AD02-C0423E08C5F7","name":"Camping"},{"id":"4A58AF13-E8FB-4530-B41A-97DF0B0C77B7","name":"Backcountry Camping"},{"id":"9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA","name":"Car or Front Country Camping"},{"id":"80229F2D-972E-40A8-8860-232551CC30D6","name":"Horse Camping (see also Horse/Stock Use)"},{"id":"AE42B46C-E4B7-4889-A122-08FE180371AE","name":"Fishing"},{"id":"1DFACD97-1B9C-4F5A-80F2-05593604799E","name":"Food"},{"id":"D72206E4-6CD1-4441-A355-F8F1827466B1","name":"Flying"},{"id":"B33DC9B6-0B7D-4322-BAD7-A13A34C584A3","name":"Guided Tours"},{"id":"42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A","name":"Hands-On"},{"id":"9456A40A-AF75-4AD3-8BE1-79C4A7DBEDFC","name":"Volunteer Vacation"},{"id":"BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA","name":"Hiking"},{"id":"7C37B79B-D02D-49EB-9020-3DB8299B748A","name":"Backcountry Hiking"},{"id":"45261C0A-00D8-4C27-A1F8-029F933A0D34","name":"Front-Country Hiking"},{"id":"0307955A-B65C-4CE4-A780-EB36BAAADF0B","name":"Horse Trekking"},{"id":"4D224BCA-C127-408B-AC75-A51563C42411","name":"Paddling"},{"id":"75B92BEB-A36D-4064-88B7-92EEC6D17611","name":"Whitewater Rafting"},{"id":"DF4A35E0-7983-4A3E-BC47-F37B872B0F25","name":"Junior Ranger Program"},{"id":"0B685688-3405-4E2A-ABBA-E3069492EC50","name":"Wildlife Watching"},{"id":"5A2C91D1-50EC-4B24-8BED-A2E11A1892DF","name":"Birdwatching"},{"id":"0C0D142F-06B5-4BE1-8B44-491B90F93DEB","name":"Park Film"},{"id":"C8F98B28-3C10-41AE-AA99-092B3B398C43","name":"Museum Exhibits"},{"id":"24380E3F-AD9D-4E38-BF13-C8EEB21893E7","name":"Shopping"},{"id":"467DC8B8-0B7D-436D-A026-80A22358F615","name":"Bookstore and Park Store"}]
,"topics":[{"id":"69693007-2DF2-4EDE-BB3B-A25EBA72BDF5","name":"Architecture and Building"},{"id":"7F81A0CB-B91F-4896-B9A5-41BE9A54A27B","name":"Archeology"},{"id":"00F3C3F9-2D67-4802-81AE-CCEA5D3BA370","name":"Arts"},{"id":"9BD60DC0-C82B-42BA-A170-456B7423429D","name":"Photography"},{"id":"B912363F-771C-4098-BA3A-938DF38A9D7E","name":"Aviation"},{"id":"607D41B0-F830-4C07-A557-BCEF880A3929","name":"Burial, Cemetery and Gravesite"},{"id":"7F12224B-217A-4B07-A4A2-636B1CE7F221","name":"Colonization and Settlement"},{"id":"FE005582-12C5-472C-8229-3CB004DB050E","name":"Engineering"},{"id":"12EA2B56-17EC-410A-A10D-BFBA87A0669B","name":"Explorers and Expeditions"},{"id":"A1BAF33E-EA84-4608-A888-4CEE9541F027","name":"Native American Heritage"},{"id":"3CDB67A9-1EAC-408D-88EC-F26FA35E90AF","name":"Schools and Education"},{"id":"FE2C2613-B41E-4531-BC43-03EB6E45CBCF","name":"Transportation"},{"id":"86525CF5-EB56-41A6-90BF-566C6C0FC945","name":"Trains and Railroads"},{"id":"A160B3D9-1603-4D89-B82F-21FCAF9EEE3B","name":"Tragic Events"},{"id":"0D00073E-18C3-46E5-8727-2F87B112DDC6","name":"Animals"},{"id":"957EF2BD-AC6C-4B7B-BD9A-87593ADC6691","name":"Birds"},{"id":"324C31EC-7D75-41C7-AA28-EF8ACB5B6BF5","name":"Bison"},{"id":"2539614A-9646-446E-8251-34D3AAE068FA","name":"Cats (wild)"},{"id":"344CE561-4E98-49BF-ACD2-438E3684DA5D","name":"Elk"},{"id":"1608649A-E7D7-4529-BD83-074C90F9FB68","name":"Fish"},{"id":"E25F3456-43ED-45DD-93BC-057F9B944F7A","name":"Caves, Caverns and Karst"},{"id":"04A39AB8-DD02-432F-AE5F-BA1267D41A0D","name":"Fire"},{"id":"41B1A0A3-11FF-4F55-9CB9-034A7E28B087","name":"Forests and Woodlands"},{"id":"F6D3A52E-608F-47D6-96DF-1FD64122A2FC","name":"Fossils and Paleontology"},{"id":"F0F97E32-2F29-41B4-AF98-9FBE8DAB36B1","name":"Geology"},{"id":"4BE01DC5-52E6-4F18-8C9A-B22D65965F6D","name":"Groundwater"},{"id":"0E1A04CC-EB51-4F18-93D4-EC0B0B4EC1E3","name":"Freshwater Springs"},{"id":"94262026-92F5-48E9-90EF-01CEAEFBA4FF","name":"Grasslands"},{"id":"A7359FC4-DAD8-45F5-AF15-7FF62F816ED3","name":"Night Sky"},{"id":"E06F3C94-AC8A-4B1C-A247-8EBA8910D5EE","name":"Astronomy"},{"id":"A155238F-0DD2-4610-9B87-05FCE1C59283","name":"River and Riparian"},{"id":"4244F489-6813-4B7A-9D0C-20CE098C8FFF","name":"Rock Landscapes and Features"},{"id":"9C9FCBB6-360B-4743-8155-6F9341CBE01B","name":"Scenic Views"},{"id":"5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417","name":"Trails"},{"id":"78E4F4AC-AF97-435A-8C2C-7FB8D67516ED","name":"Unique Species"},{"id":"489D6333-FD72-44DF-83B0-3D4412DD0A75","name":"Endangered"},{"id":"BA12B386-49EA-46B0-9121-FCACACC47538","name":"Watersheds"}]
,"states":"AZ"

,"contacts":{"phoneNumbers":[{"phoneNumber":"928-638-7888","description":"","extension":"","type":"Voice"}],"emailAddresses":[{"description":"","emailAddress":"grca_information@nps.gov"}]}
,"entranceFees":[{"cost":"35.00","description":"Admits one single, private, non-commercial vehicle and all its passengers, up to a 15 person passenger van. Organized non-commercial groups over 16 passengers require different charges. Commercial groups are not eligible for the vehicle permit.","title":"Entrance - Private Vehicle"},{"cost":"30.00","description":"Admits one single, private, non-commercial motorcycle and its passenger(s).","title":"Entrance - Motorcycle"},{"cost":"20.00","description":"Individual ($20 valid for 7 days): for bicyclists, hikers, and pedestrians.","title":"Entrance - Per Person"}]
,"entrancePasses":[{"cost":"70.00","description":"Available to the general public for purchase for unlimited visits to Grand Canyon National Park only. This is an annual pass, valid one year from month of purchase; it is non-transferable.\n\nIt admits the pass holder and any accompanying persons in a single, private, non-commercial vehicle, or the pass holder and accompanying immediate family (spouse, children, parents) when entry is by other means (train, shuttle, bicycle, or foot).","title":"Annual Entrance - Park"}]
,"fees":[]
,"directionsInfo":"South Rim: Open all year, is located 60 miles north of Williams, Arizona (via route 64 from Interstate 40) and 80 miles northwest of Flagstaff (via route 180). Grand Canyon lies entirely within the state of Arizona. North Rim: Open for the season between May 15 and October 15, 2024. The North Rim is located 30 miles south of Jacob Lake on Highway 67; the actual rim of the canyon is an additional 14 miles south. Jacob Lake, AZ is located in northern Arizona on Highway 89A, not far from the Utah border."

,"directionsUrl":"http://www.nps.gov/grca/planyourvisit/directions.htm"

,"operatingHours":[{"exceptions":[],"description":"Both Desert View (East Entrance) and South Entrance are Open 24 hours/day and 7 Days/week. Credit cards, Recreation.gov, Your Pass Now, and America the Beautiful passes are accepted for entry. Cash is not accepted at this time. The South Entrance Station, near Tusayan, Arizona, receives the most traffic, an experiences long lines and up to 2 hour wait times between 9:30 am and 4 pm. The East Entrance at Desert View (accessed via US 89 to Cameron, AZ, then west on SR 64, usually has shorter wait times.","standardHours":{"wednesday":"All Day","monday":"All Day","thursday":"All Day","sunday":"All Day","tuesday":"All Day","friday":"All Day","saturday":"All Day"},"name":"South Rim - South Entrance"},{"exceptions":[{"exceptionHours":{"wednesday":"Sunrise to Sunset","monday":"Sunrise to Sunset","thursday":"Sunrise to Sunset","sunday":"Sunrise to Sunset","tuesday":"Sunrise to Sunset","friday":"Sunrise to Sunset","saturday":"Sunrise to Sunset"},"startDate":"2024-11-01","name":"North Rim - November Day Use.","endDate":"2024-11-30"},{"exceptionHours":{"wednesday":"Closed","monday":"Closed","thursday":"Closed","sunday":"Closed","tuesday":"Closed","friday":"Closed","saturday":"Closed"},"startDate":"2023-12-01","name":"North Rim Closed for Winter","endDate":"2024-05-14"}],"description":"The North Rim has a short season. The North Rim is scheduled to open on May 15, 2024. Lodging reservations are recommended. Campground reservations are required. The North Rim is over 8000 feet/2438 m. in elevation. Individuals with respiratory or heart problems may experience difficulties. Walking at this elevation can be strenuous. The North Rim is closed to all vehicles between December 1st and May 14th, and no visitor services are available.","standardHours":{"wednesday":"All Day","monday":"All Day","thursday":"All Day","sunday":"All Day","tuesday":"All Day","friday":"All Day","saturday":"All Day"},"name":"North Rim"},{"exceptions":[],"description":"The East Entrance to the park at Desert View is open 24 hours/day, 7 days/week. Visitors traveling through the Navajo Nation on US 89, turn west at Cameron, Arizona onto State Route 64, then drive 25 miles (40 km) to the park's East Entrance. A stop at Desert View provides spectacular first views of Grand Canyon and Colorado River. Most Desert View services are open for visitors. Desert View Campground is open for the 2022 season between April 15 and October 16. 2022. Reservations are required.","standardHours":{"wednesday":"All Day","monday":"All Day","thursday":"All Day","sunday":"All Day","tuesday":"All Day","friday":"All Day","saturday":"All Day"},"name":"South Rim - Desert View (East Entrance)"}]
,"addresses":[{"postalCode":"86023","city":"Grand Canyon","stateCode":"AZ","countryCode":"US","provinceTerritoryCode":"","line1":"20 South Entrance Road","type":"Physical","line3":"","line2":""},{"postalCode":"86023","city":"Grand Canyon","stateCode":"AZ","countryCode":"US","provinceTerritoryCode":"","line1":"PO Box 129","type":"Mailing","line3":"","line2":""}]
,"images":[{"credit":"NPS/M.Quinn","title":"Grand Canyon Mather Point Sunset on the South Rim","altText":"The canyon glows orange as people visit Mather Point, a rock outcropping that juts into Grand Canyon","caption":"People come from all over the world to view Grand Canyon's sunset","url":"https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg"},{"credit":"NPS/M.Quinn","title":"Grand Canyon National Park: View from Cape Royal on the North Rim","altText":"The Cape Royal viewpoint curves into the distance and closer rock formations jut into the canyon.","caption":"A popular outdoor site for weddings and receptions, Cape Royal Amphitheater is located 23 miles (37 km) from the North Rim developed area.","url":"https://www.nps.gov/common/uploads/structured_data/3C7B143E-1DD8-B71B-0BD4A1EF96847292.jpg"},{"credit":"NPS/M.Quinn","title":"Grand Canyon National Park: Desert View Watchtower (South Rim)","altText":"The Desert View Watchtower looms 70 feet into the air over a vast and dramatic view of the canyon.","caption":"The Watchtower is located at Desert View, the eastern-most developed area on the South Rim of Grand Canyon National Park.","url":"https://www.nps.gov/common/uploads/structured_data/3C7B15A4-1DD8-B71B-0BFADECB506765CC.jpg"},{"credit":"NPS/M.Quinn","title":"Looking down the Colorado River from Nankoweap at river mile 53","altText":"Tall canyon walls frame the wide Colorado river weaving back and forth.","caption":"A view down the Colorado river from Nankoweap in Marble canyon.","url":"https://www.nps.gov/common/uploads/structured_data/3C7B1720-1DD8-B71B-0B74DCF6F887A960.jpg"},{"credit":"NPS/M.Quinn","title":"Yavapai Point Sunset - Sept. 2021","altText":"Several dozen people at a scenic overlook with the sun setting on the horizon above a vast canyon la","caption":"Experiencing sunset from Yavapai Point on the South Rim.","url":"https://www.nps.gov/common/uploads/structured_data/2B5BB10B-E098-B63E-6DA18036787C8D6E.jpg"}]
,"weatherInfo":"This weather varies with cold winters and mild pleasant summers, moderate humidity, and considerable diurnal temperature changes at the higher elevations, with hot and drier summers at the bottom of the Grand Canyon along with cool damp winters. Summer thunderstorms and winter snowfall adds to the weather variety in this region."

,"name":"Grand Canyon"

,"designation":"National Park"

,"relevanceScore":1.0

}

]
} 

pprint(json_data)

# Define the file path where you want to save the JSON data
file_path = "Grand_Canyon.json"

# Open the file in write mode and save the JSON data
with open(file_path, "w") as json_file:
    json.dump(json_data, json_file, indent=4)

# Optionally, you can print a message to confirm that the data has been saved
print(f"JSON data has been saved to {file_path}")