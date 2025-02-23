import os
import json
import random
import requests
import re
import sys
import codecs
import azure.cognitiveservices.speech as speechsdk
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# ✅ Securely fetch API keys and configurations
AZURE_TRANSLATOR_KEY = os.getenv("AZURE_TRANSLATOR_KEY")
AZURE_SPEECH_KEY = os.getenv("AZURE_SPEECH_KEY")
AZURE_ENDPOINT = os.getenv("AZURE_ENDPOINT")
AZURE_LOCATION = os.getenv("AZURE_LOCATION")
AZURE_SPEECH_REGION = os.getenv("AZURE_SPEECH_REGION")

# Configure UTF-8 output
sys.stdout = codecs.getwriter("utf-8")(sys.stdout.buffer, 'strict')

# ✅ Ensure API keys are loaded correctly
if not AZURE_TRANSLATOR_KEY or not AZURE_SPEECH_KEY:
    print("❌ Error: Missing API keys. Check your .env file.")
    sys.exit(1)

# Initialize Speech Synthesizer
speech_config = speechsdk.SpeechConfig(subscription=AZURE_SPEECH_KEY, region=AZURE_SPEECH_REGION)
speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config)

def speak(text):
    """Use Azure Speech to read aloud the given text."""
    speech_synthesizer.speak_text_async(text).get()

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
    
    if response.status_code != 200:
        print("❌ Translation API Error:", response.json())
        return "Kannada translation unavailable"
    
    response_data = response.json()
    return response_data[0]["translations"][0]["text"]

def load_questions(filename):
    """Load the quiz questions from a JSON file."""
    try:
        with open(filename, 'r', encoding="utf-8") as file:
            data = json.load(file)
            if not data:
                raise ValueError("Empty question file")
            return data
    except (FileNotFoundError, json.JSONDecodeError, ValueError) as e:
        print(f"❌ Error loading questions: {e}")
        return []

def is_correct_answer(user_input, correct_answer):
    """Check if the user's answer is correct."""
    user_input = user_input.lower().strip()
    correct_answer = str(correct_answer).lower().strip()
    keywords = re.split(r'[,\s]+', correct_answer)

    return user_input == correct_answer or any(word in user_input for word in keywords)

def ask_question(question_data):
    """Ask a question, provide hints, and read them aloud."""
    print(f"\nQuestion: {question_data['question']}")
    speak(question_data['question'])  
    hints = question_data['hints']
    correct_answer = str(question_data['answer'])
    attempts = 0

    while True:
        user_input = input("\nType your answer, 'hint' for a hint, 'translate' for Kannada translation, 'answer' for the answer, or 'exit' to quit: ").strip().lower()

        if user_input == "hint":
            if attempts < len(hints):
                print("Hint (English):", hints[attempts])
                speak(hints[attempts])  
                attempts += 1
            else:
                print("No more hints available.")
        elif user_input == "translate":
            if attempts > 0:
                kannada_hint = translate_to_kannada(hints[attempts - 1])
                print("Hint (Kannada):", kannada_hint)
                speak(kannada_hint)  
            else:
                print("Ask for a hint first before translating.")
        elif user_input == "answer":
            print("The answer is:", correct_answer)
            speak(f"The correct answer is {correct_answer}")  
            return False
        elif user_input == "exit":
            print("Exiting the quiz. Goodbye!")
            speak("Exiting the quiz. Goodbye!")  
            sys.exit()
        elif is_correct_answer(user_input, correct_answer):
            print("✅ Correct! Well done.")
            speak("Correct! Well done.")  
            return True
        else:
            attempts += 1
            if attempts >= 3:
                print("❌ The correct answer is:", correct_answer)
                speak(f"The correct answer is {correct_answer}")  
                return False

def main():
    """Run the quiz with subject selection and a scoring system."""
    subjects = {
        "1": "food_questions.json",
        "2": "math_questions.json",
        "3": "social_questions.json"
    }

    print("🎉 Welcome to the Quiz!\n")
    speak("Welcome to the quiz!")  
    print("Select a subject:")
    print("1️⃣ Food Science")
    print("2️⃣ Mathematics")
    print("3️⃣ Social Studies")

    speak("Select a subject. Press 1 for Food Science, 2 for Mathematics, or 3 for Social Studies.")

    choice = input("\nEnter the number corresponding to your subject: ").strip()

    if choice not in subjects:
        print("❌ Invalid choice. Please restart the quiz and select a valid option.")
        speak("Invalid choice. Please restart the quiz and select a valid option.")
        return

    filename = subjects[choice]
    questions = load_questions(filename)

    if not questions:
        print("❌ No questions available. Please check the JSON file.")
        speak("No questions available. Please check the JSON file.")
        return

    random.shuffle(questions)  

    score = 0
    for question_data in questions:
        if ask_question(question_data):
            score += 1

    print(f"\n🎯 Quiz complete! Your final score: {score}/{len(questions)}")
    speak(f"Quiz complete! Your final score is {score} out of {len(questions)}")

if __name__ == "__main__":
    main()
