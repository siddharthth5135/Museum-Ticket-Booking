import React, { useState, useEffect } from 'react';
import '../assets/css/bootstrap.min.css';

const apiUrl = 'http://localhost:5000';

export default function ChatbotService({ user }) { // Accept user as a prop
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     console.log("use effect called");
    //     fetch(apiUrl + "/chat/get-init-message", {
    //         method: 'GET'
    //     })
    //         .then(res => res.text())
    //         .then(text => setMessages([...messages, { author: 'Chatbot', content: text }]));
    // }, []);

    const handleTextareaChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleTextareaKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (userInput.trim() !== '') {
            const userMsg = { author: user.displayName, content: userInput };
            setMessages([...messages, userMsg]);

            const data = new URLSearchParams();
            data.append('message', userInput);
            if (messages.length == 0) {
                fetch(apiUrl + "/chat/start", {
                    method: 'POST',
                    body: data,
                })
                    .then(res => res.text())
                    .then(text => {
                        setMessages([...messages, userMsg, { author: 'Chatbot', content: text }]);
                    });
            } else {
                fetch(apiUrl + "/chat/send-message", {
                    method: 'POST',
                    body: data,
                })
                    .then(res => res.text())
                    .then(text => {
                        setMessages([...messages, userMsg, { author: 'Chatbot', content: text }]);
                    });
            }

            setUserInput('');
        }
    };

    return (
        <>
            <div className="d-flex vh-100 bg-black text-light" style={{ backgroundColor: '#212121', minHeight: '112vh', paddingTop:'6rem'}}>
                <aside className="p-4" style={{ width: '16rem', backgroundColor: '#212121', borderRight: '2px solid black', bottom:'0', left:'0'}}>
                    <h1 className="h4 font-weight-bold">Online Chat Bot</h1>
                    {/* Display the user's name */}
                    {user && <p className="text-muted">Logged in as: {user.displayName}</p>}
                    <div className="mt-4">
                        <h2 className="h6 font-weight-bold">Today</h2>
                        <ul className="mt-2 list-unstyled">
                            <li className="py-2 hover-bg-light" style={{backgroundColor:'black', padding:'0.3rem', borderRadius:'1rem', marginBottom:'0.5rem'}}> ~ Welcome, how can...</li>
                            <li className="py-2 hover-bg-light" style={{backgroundColor:'black', padding:'0.3rem', borderRadius:'1rem', marginBottom:'0.5rem'}}> ~ Number of tickets...</li>
                            <br></br>
                            <h2 className="h6 font-weight-bold">23/08/2024</h2>
                            <li className="py-2 hover-bg-light" style={{backgroundColor:'black', padding:'0.3rem', borderRadius:'1rem', marginBottom:'0.5rem'}}> ~ Ticket Booked Succ...</li>
                            <li className="py-2 hover-bg-light" style={{backgroundColor:'black', padding:'0.3rem', borderRadius:'1rem', marginBottom:'0.5rem'}}> ~ Confirmation Respon...</li>
                        </ul>
                    </div>
                </aside>
                <main className="flex-fill p-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
                    <div>
                        {messages.map((message, index) => (
                            <div key={index}>
                                <h4 className='text-white'>{message.author}</h4>
                                <p className='text-white'>{message.content}</p>
                            </div>
                        ))}
                    </div>
                    <footer className="mt-4">
                        <div className="d-flex align-items-center bg-white p-4 rounded">
                            <input
                                type="text"
                                placeholder="Message OnlineBot"
                                className="flex-fill p-2 border rounded"
                                value={userInput}
                                onChange={handleTextareaChange}
                                onKeyDown={handleTextareaKeyDown}
                            />
                            <button className="btn text-light px-4 py-2 ms-2 p-4" style={{ backgroundColor: '#020230', borderRadius: '1.5rem', marginLeft: '0.5rem' }} onClick={handleSubmit}>
                                Send
                            </button>
                        </div>
                        <p className="text-muted mt-2 small">
                            Online Bot can make mistakes. Check important info.
                        </p>
                    </footer>
                </main>
            </div>
        </>
    );
}
