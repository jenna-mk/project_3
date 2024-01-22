# Project_3 powerpoint link
# https://onedrive.live.com/edit?id=42C1F53F37A45B0D!7986&resid=42C1F53F37A45B0D!7986&ithint=file%2cpptx&authkey=!APHmIybaYHMCBBI&wdo=2&cid=42c1f53f37a45b0d



# Dependencies and Setup
import pandas as pd

# Import the National Park API key
from api_keys import National_Park_api_key

# Set the API base URL
# https://developer.nps.gov/api/v1
# url = f"https://developer.nps.gov/{National_Park_api_key}/v1"

# Saguaro API
Saguaro_url = f"https://developer.nps.gov/api/v1/parks?parkCode=sagu&api_key={National_Park_api_key}"

# Petrified Forest API
Petrified_Forest_url = f"https://developer.nps.gov/api/v1/parks?parkCode=pefo&api_key={National_Park_api_key}"

# Grand Canyon API
Grand_Canyon_url = f"https://developer.nps.gov/api/v1/parks?parkCode=grca&api_key={National_Park_api_key}"



print (Saguaro_url)
# https://developer.nps.gov/api/v1/parks?parkCode=sagu&api_key=479HXbPsSqNacjdnouvPQi4c0tIkAmtjTd0cSHrS
print (Petrified_Forest_url)
# https://developer.nps.gov/api/v1/parks?parkCode=pefo&api_key=479HXbPsSqNacjdnouvPQi4c0tIkAmtjTd0cSHrS
print (Grand_Canyon_url)
# https://developer.nps.gov/api/v1/parks?parkCode=grca&api_key=479HXbPsSqNacjdnouvPQi4c0tIkAmtjTd0cSHrS

# print (National_Park_api_key)


