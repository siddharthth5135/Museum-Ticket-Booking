import React from 'react';
import '../assets/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const apiUrl = 'http://localhost:5000';

export default function ChatbotService() {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log("use effect called");
        fetch(apiUrl + "/chat/get-init-message", {
            method: 'GET'
        })
            .then(res => res.text())
            .then(text => setMessages([...messages, { author: 'Chatbot', content: text }]));
    }, []);

    const handleTextareaChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleTextareaKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e); // Pass the event object to handleSubmit if it's defined
        }
    };

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }
        if (userInput.trim() !== '') {
            const userMsg = { author: 'User', content: userInput };
            setMessages([...messages, userMsg]);

            const data = new URLSearchParams();
            data.append('message', userInput);
            fetch(apiUrl + "/chat/send-message", {
                method: 'POST',
                body: data,
            })
                .then(res => res.text())
                .then(text => {
                    setMessages([...messages, userMsg, { author: 'Chatbot', content: text }]);
                });

            setUserInput('');
        }
    };
    
    return (
        <>
            <div className="d-flex vh-100 bg-black text-light" style={{ backgroundColor: '#212121', minHeight: '112vh', paddingTop:'6rem'}}>
                <aside className=" p-4" style={{ width: '16rem', backgroundColor: '#212121', borderRight: '2px solid black', bottom:'0', left:'0'}}>
                    <h1 className="h4 font-weight-bold">Online Chat Bot</h1>
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
                    {/* <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col" style={{ backgroundColor: '#EB566C', color: 'white', margin: '0.5rem', borderRadius:'1rem'}}>
                            <div className="p-4 rounded">
                                <p style={{ color: 'white' }}>Book Your Tickets Now</p>
                            </div>
                        </div>
                        <div className="col" style={{ backgroundColor: '#EB566C', color: 'white', margin: '0.5rem', borderRadius:'1rem'}}>
                            <div className="p-4 rounded">
                                <p style={{ color: 'white' }}>Explore Ticket Options</p>
                            </div>
                        </div>
                        <div className="col" style={{ backgroundColor: '#EB566C', color: 'white', margin: '0.5rem', borderRadius:'1rem'}}>
                            <div className="p-4 rounded">
                                <p style={{ color: 'white' }}>Plan Your Visit</p>
                            </div>
                        </div>
                        <div className="col" style={{ backgroundColor: '#EB566C', color: 'white', margin: '0.5rem', borderRadius:'1rem'}}>
                            <div className="p-4 rounded">
                                <p style={{ color: 'white' }}>Dive into Indian Culture</p>
                            </div>
                        </div>
        
                    </div> */}
                    <div>
                        {messages.map((message, index) => {
                            return (
                                <div key={index}>
                                    <h4 className='text-white'>{message.author}</h4>
                                    <p className='text-white'>{message.content}</p>
                                </div>
                            )
                        })}
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
