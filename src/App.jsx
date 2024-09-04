import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Header.jsx';
import Landing from './Components/Landing.jsx';
import Footer from './Components/Footer.jsx';
import ChatbotService from './Components/ChatbotService.jsx';
import SignupLogin from './Components/SignupLogin.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/service" element={<ChatbotService />} />
        <Route path="/" element={<Landing />} />
        <Route path='/signuplogin' element={<SignupLogin/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
