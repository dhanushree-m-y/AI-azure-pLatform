import os
import requests
import json
from dotenv import load_dotenv

# ✅ Load environment variables from .env file
load_dotenv()

# ✅ Get API keys from environment variables
ocr_api_key = os.getenv("OCR_API_KEY")
openai_api_key = os.getenv("OPENAI_API_KEY")
ocr_endpoint = os.getenv("OCR_ENDPOINT")
openai_endpoint = os.getenv("OPENAI_ENDPOINT")

# ✅ Construct OCR API URL
ocr_url = f"{ocr_endpoint}vision/v3.2/ocr"

# ✅ Set OCR Headers & Parameters
headers_ocr = {"Ocp-Apim-Subscription-Key": ocr_api_key}
params_ocr = {"language": "en", "detectOrientation": "true"}

# ✅ OCR Image Source
image_url = "https://tse2.mm.bing.net/th?id=OIP.O1HC6UC5df9KVTbWSkXfJQHaEK&pid=Api&P=0&h=180"
data_ocr = {"url": image_url}

# 🔹 Step 1: Extract Text Using Azure OCR
try:
    response_ocr = requests.post(ocr_url, headers=headers_ocr, params=params_ocr, json=data_ocr)
    response_ocr.raise_for_status()
    result_ocr = response_ocr.json()
except requests.exceptions.RequestException as e:
    print(f"Azure OCR Error: {e}")
    exit()

# ✅ Extract Text from OCR Response
extracted_text = []
if "regions" in result_ocr:
    for region in result_ocr["regions"]:
        for line in region["lines"]:
            extracted_text.append(" ".join([word["text"] for word in line["words"]]))

# 🔹 Handle Empty Text Case
if not extracted_text:
    print("No text detected.")
    exit()

full_text = "\n".join(extracted_text)
print("\n🔹 Extracted Text from Image:\n", full_text)

# ✅ Prepare Data for OpenAI
data_ai = {
    "messages": [
        {"role": "system", "content": "You are an AI that summarizes text."},
        {"role": "user", "content": "Summarize this: " + full_text}
    ],
    "max_tokens": 150
}

headers_ai = {
    "Content-Type": "application/json",
    "api-key": openai_api_key
}

# 🔹 Step 2: Process Text with OpenAI
try:
    response_ai = requests.post(openai_endpoint, headers=headers_ai, json=data_ai)
    response_ai.raise_for_status()
    ai_result = response_ai.json()
    processed_text = ai_result["choices"][0]["message"]["content"].strip()
except requests.exceptions.RequestException as e:
    print(f"OpenAI Error: {e}")
    exit()

print("\n🔹 AI Processed Output:\n", processed_text)
