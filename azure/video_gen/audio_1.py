import azure.cognitiveservices.speech as speechsdk

# Azure Speech API credentials
speech_config = speechsdk.SpeechConfig(subscription="6X1RL3P4ZKAV3ChT2Sei4RDBCJILXIjNu3vznqB6fWsYq19DVsUnJQQJ99BBAC3pKaRXJ3w3AAAYACOG3Onw", region="eastasia")
audio_config = speechsdk.audio.AudioOutputConfig(filename="output_audio.mp3")

# Create the synthesizer
speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=audio_config)

# Explanation text for the problem
explanation_text = """
Let's arrange the numbers in descending order: 1289, 30987, 2504, 897, and 67890.
Step 1: Identify the number of digits in each number.
- 67890 has 5 digits.
- 30987 has 5 digits.
- 2504 and 1289 have 4 digits.
- 897 has 3 digits.

Step 2: The largest 5-digit number is 67890, followed by 30987.
Step 3: Among the 4-digit numbers, 2504 is greater than 1289.
Step 4: The smallest number is 897.

So, the numbers in descending order are: 67890, 30987, 2504, 1289, 897.
"""

# Generate AI voice and save as MP3
speech_synthesizer.speak_text_async(explanation_text).get()
print("Audio saved as output_audio.mp3")
