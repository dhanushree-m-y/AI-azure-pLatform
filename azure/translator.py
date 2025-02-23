import os
import requests
from dotenv import load_dotenv

# ✅ Load environment variables
load_dotenv()

# ✅ Fetch API keys and endpoint from .env
AZURE_TRANSLATOR_KEY = os.getenv("AZURE_TRANSLATOR_KEY")
AZURE_ENDPOINT = os.getenv("AZURE_ENDPOINT")
AZURE_LOCATION = os.getenv("AZURE_LOCATION")

def translate_to_kannada(text):
    """Translate text from English to Kannada using Azure Translator API."""
    url = f"{AZURE_ENDPOINT}/translate?api-version=3.0&to=kn"
    headers = {
        "Ocp-Apim-Subscription-Key": AZURE_TRANSLATOR_KEY,
        "Ocp-Apim-Subscription-Region": AZURE_LOCATION,
        "Content-Type": "application/json"
    }
    body = [{"text": text}]
    
    response = requests.post(url, headers=headers, json=body)
    
    # ✅ Check for API errors
    if response.status_code != 200:
        print("Error:", response.json())
        return None
    
    response_data = response.json()
    return response_data[0]["translations"][0]["text"]

# Example usage
english_hint = "It is a green vegetable rich in iron."
kannada_hint = translate_to_kannada(english_hint)

if kannada_hint:
    print("Kannada Hint:", kannada_hint)
