from flask import Flask, request, jsonify
from flask_cors import CORS

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import train_test_split

# Sample dataset for intent classification
data = [
    ("how can i reset my password", "reset_password"),
    ("i forgot my password", "reset_password"),
    ("what is the status of my order", "order_status"),
    ("where is my order", "order_status"),
    ("how can i contact support", "contact_support"),
    ("i need help", "contact_support"),
    ("how to change my password", "reset_password"),
    ("i want to update my password", "reset_password"),
    ("my password isn't working", "reset_password"),
    ("when will my order arrive", "order_status"),
    ("how long does delivery take", "order_status"),
    ("has my order shipped yet", "order_status"),
    ("track my order", "order_status"),
    ("i can't track my order", "order_status"),
    ("how do i reach customer service", "contact_support"),
    ("contact customer support", "contact_support"),
    ("i need assistance", "contact_support")
]

# Split data into training and test sets
train_data, test_data = train_test_split(data, test_size=0.25, random_state=42)
train_texts, train_labels = zip(*train_data)

# Train the model
model = make_pipeline(CountVectorizer(), MultinomialNB())
model.fit(train_texts, train_labels)

# Response generator
def get_response(intent):
    responses = {
        "reset_password": "To reset your password, click on 'Forgot Password' at the login screen.",
        "order_status": "Check the 'My Orders' section of our website for the order status.",
        "contact_support": "You can contact support at support@example.com or call 123-456-7890."
    }
    return responses.get(intent, "I'm not sure how to help with that.")

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Health check route
@app.route("/")
def home():
    return "OnlineBot is running! Use POST /chat/send-message to interact."

# ✅ Add this new /chat/start route to prevent 404
@app.route("/chat/start", methods=["POST"])
def chat_start():
    return jsonify({"response": "Hi! I'm your virtual assistant. How can I help you today?"})

# Chat message handling
@app.route("/chat/send-message", methods=["POST"])
def send_message():
    message = request.form.get("message") or request.json.get("message")
    if not message:
        return jsonify({"response": "Please provide a valid message."}), 400

    intent = model.predict([message])[0]
    response = get_response(intent)
    return jsonify({"response": response})

# Run app
if __name__ == "__main__":
    app.run(debug=True)
