import React, { useState, useEffect, useRef } from 'react';

const apiUrl = 'http://localhost:5000';

export default function ChatbotService({ user }) {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  const quickQuestions = [
    "How to book a ticket online?",
    "Do I need to collect the ticket?",
    "Can I cancel my ticket?",
    "Where can I find my booked ticket?",
    "What is the entry time?",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleQuickQuestionClick = (q) => {
    setUserInput(q);
    handleSubmit(q);
  };

  const handleTextareaKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async (customMessage) => {
    const message = customMessage || userInput.trim();
    if (!message) return;

    const userMsg = { author: user?.displayName || 'You', content: message };
    setMessages(prev => [...prev, userMsg]);

    const data = new URLSearchParams();
    data.append('message', message);

    try {
      const endpoint = messages.length === 0 ? "/chat/start" : "/chat/send-message";
      const res = await fetch(apiUrl + endpoint, {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      setMessages(prev => [...prev, { author: 'Chatbot', content: json.response || "No reply." }]);
    } catch (error) {
      setMessages(prev => [...prev, { author: 'Chatbot', content: 'Something went wrong. Try again.' }]);
    }

    setUserInput('');
  };

  return (
     <div style={{
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 80px)',     // Reserve 80px for Header
    marginTop: '80px',                // Push below header
    backgroundColor: '#000',          // Deep black background
    color: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
    overflow: 'hidden'
  }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        backgroundColor: '#050529',
        padding: '1rem',
        borderRight: '2px solid #000'
      }}>
        <h2 style={{ color: '#50a2ff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Online Chat Bot</h2>
        {user && <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Logged in as: <strong>{user.displayName}</strong></p>}
        <h4 style={{ color: '#26c6da', marginTop: '1.5rem' }}>Quick Questions</h4>
        {quickQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleQuickQuestionClick(q)}
            style={{
              width: '100%',
              margin: '0.5rem 0',
              backgroundColor: '#e74c3c',
              color: 'white',
              padding: '0.6rem',
              border: 'none',
              borderRadius: '1.5rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {q}
          </button>
        ))}
      </aside>

      {/* Chat Area */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        position: 'relative'
      }}>
        {/* Messages */}
        <div style={{
          flexGrow: 1,
          overflowY: 'auto',
          paddingRight: '1rem',
          marginBottom: '1rem'
        }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                marginBottom: '1rem',
                maxWidth: '75%',
                padding: '0.8rem 1rem',
                borderRadius: '1rem',
                backgroundColor: msg.author === 'Chatbot' ? '#333' : '#007bff',
                color: msg.author === 'Chatbot' ? '#fff' : '#fff',
                alignSelf: msg.author === 'Chatbot' ? 'flex-start' : 'flex-end',
                textAlign: msg.author === 'Chatbot' ? 'left' : 'right',
                marginLeft: msg.author === 'Chatbot' ? '0' : 'auto'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>{msg.author}</div>
              <div style={{ fontSize: '1rem' }}>{msg.content}</div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <footer style={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          backgroundColor: '#0a0a0a',
          padding: '1rem',
          borderTop: '1px solid #222'
        }}>
          <input
            type="text"
            placeholder="Say something..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleTextareaKeyDown}
            style={{
              flex: 1,
              padding: '0.8rem 1rem',
              borderRadius: '1.5rem',
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              backgroundColor: '#fff',
              color: '#000'
            }}
          />
          <button
            onClick={() => handleSubmit()}
            style={{
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '2rem',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Send
          </button>
        </footer>

        {/* Note */}
        <p style={{ fontSize: '0.8rem', color: '#aaa', textAlign: 'center', marginTop: '0.3rem' }}>
          🤖 Online Bot can make mistakes. Double-check important info.
        </p>
      </main>
    </div>
  );
}
