from flask import Flask, request
from flask_cors import CORS, cross_origin
import google.generativeai as genai
import os

from dotenv import load_dotenv
load_dotenv()


GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-pro')

chat = model.start_chat(history=[])

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

init_message = f"*You are an assistant chatbot for a museum information and ticket booking system. DO NOT use markdown styles, only text. Ask how can I help you. If user asks anything unrelated say I can't help you with that. Keep your responses short and DO NOT use ** in the response.*\n\n"
@cross_origin
@app.route("/chat/start", methods=['POST'])
def chat_get_init_message():
    chat.history.clear()
    message = request.form['message']
    return chat.send_message(init_message + message).text
    
@cross_origin
@app.route("/chat/send-message", methods=['POST'])
def chat_send_message():
    message = request.form['message']
    return chat.send_message(message).text
