import pandas as pd
import json
from pprint import pprint

# Your JSON data
json_data = '''
{
  "total": "1",
  "limit": "50",
  "start": "0",
  "data": [
    {
      "id": "A6F169CF-B830-499C-A5EB-A35138C77589",
      "url": "https://www.nps.gov/sagu/index.htm",
      "fullName": "Saguaro National Park",
      "parkCode": "sagu",
      "description": "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset.",
      "latitude": "32.20909636",
      "longitude": "-110.7574974",
      "latLong": "lat:32.20909636, long:-110.7574974",
      "activities": [
        {"id": "09DF0950-D319-4557-A57E-04CD2F63FF42", "name": "Arts and Culture"},
        {"id": "5F723BAD-7359-48FC-98FA-631592256E35", "name": "Auto and ATV"},
        // ... (other activities)
      ],
      "topics": [
        {"id": "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B", "name": "Archeology"},
        {"id": "0B575E33-B68F-4F3D-998E-B03284606CF3", "name": "Industry"},
        // ... (other topics)
      ],
      "states": "AZ",
      "contacts": {
        "phoneNumbers": [{"phoneNumber": "5207335153", "description": "", "extension": "", "type": "Voice"}],
        "emailAddresses": [{"description": "", "emailAddress": "sagu_information@nps.gov"}]
      },
      "entranceFees": [
        {"cost": "25.00", "description": "The vehicle entrance pass is sold in the form of a dated register receipt...", "title": "Entrance - Private Vehicle"},
        // ... (other entrance fees)
      ],
      // ... (other fields)
      "images": [
        {"credit": "NPS Photo", "title": "Saguaro Flowers", "altText": "Saguaro flowers", "caption": "The flowering season in Saguaro National Park attracts visitors from all over the world.", "url": "https://www.nps.gov/common/uploads/structured_data/5CB8B2F6-01B7-9A50-73702A355E4136B8.jpg"},
        // ... (other images)
      ],
      // ... (other fields)
    }
  ]
}
'''

# Convert JSON to Python dictionary
data_dict = json.loads(json_data)

# Convert dictionary to DataFrame
df = pd.json_normalize(data_dict['data'])

# Display the DataFrame
print(df)