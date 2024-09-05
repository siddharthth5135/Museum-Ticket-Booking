import spacy
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the spaCy model
nlp = spacy.load('en_core_web_sm')

# Sample dataset
data = [
    ("how can i reset my password", "reset_password"),
    ("i forgot my password", "reset_password"),
    ("what is the status of my order", "order_status"),
    ("where is my order", "order_status"),
    ("how can i contact support", "contact_support"),
    ("i need help", "contact_support"),
    ("how do i reset my password", "reset_password"),
    ("how to change my password", "reset_password"),
    ("i want to update my password", "reset_password"),
    ("my password isn't working", "reset_password"),
    ("password reset link isn't working", "reset_password"),
    ("how do i recover my password", "reset_password"),
    ("help me change my password", "reset_password"),
    ("i'm locked out of my account", "reset_password"),
    ("how do i unlock my account", "reset_password"),
    ("i forgot my account password", "reset_password"),
    ("when will my order arrive", "order_status"),
    ("how long does delivery take", "order_status"),
    ("what's the current status of my order", "order_status"),
    ("has my order shipped yet", "order_status"),
    ("track my order", "order_status"),
    ("i can't track my order", "order_status"),
    ("when can i expect delivery", "order_status"),
    ("order tracking information", "order_status"),
    ("my order hasn't arrived", "order_status"),
    ("is my order delayed", "order_status"),
    ("how do i reach customer service", "contact_support"),
    ("i need to talk to support", "contact_support"),
    ("how can i get help", "contact_support"),
    ("contact customer support", "contact_support"),
    ("i need assistance", "contact_support"),
    ("how do i contact you", "contact_support"),
    ("can i speak to support", "contact_support"),
    ("who can help me with this issue", "contact_support"),
    ("i have a problem with my account", "contact_support"),
    ("how can i get in touch with support", "contact_support"),
]

# Split the data into training and test sets
train_data, test_data = train_test_split(data, test_size=0.25, random_state=42) 
train_texts, train_labels = zip(*train_data) 
test_texts, test_labels = zip(*test_data)

# Create a text classification pipeline 
model = make_pipeline(CountVectorizer(), MultinomialNB())

# Train the model 
model.fit(train_texts, train_labels)

def train():
    # Test the model 
    predicted_labels = model.predict(test_texts) 
    print("Test Results:") 
    for text, label, prediction in zip(test_texts, test_labels, predicted_labels):     
        print(f"Text: {text}\nActual: {label}\nPredicted: {prediction}\n")

    # Check model accuracy 
    accuracy = accuracy_score(test_labels, predicted_labels) 
    print(f"Model Accuracy: {accuracy * 100:.2f}%")

def get_intent(text):
    return model.predict([text])[0]

def get_response(intent):
    responses = {
        "reset_password": "To reset your password, click on 'Forgot Password' at the login screen and follow the instructions.",
        "order_status": "You can check the status of your order in the 'My Orders' section of our website.",
        "contact_support": "You can contact support via email at support@example.com or call us at 123-456-7890."
    }
    return responses.get(intent, "I'm not sure how to help with that. Please contact support directly at support@example.com.")

def chatbot():
    print("Welcome to Support Chatbot. How can I assist you today?")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ['exit', 'quit', 'bye']:
            print("Chatbot: Goodbye! Have a great day!")
            break
        intent = get_intent(user_input)
        response = get_response(intent)
        print(f"Chatbot: {response}")

if __name__ == "__main__":
    train()
    chatbot()
