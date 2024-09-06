import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Landing from './Components/Landing.jsx';
import Footer from './Components/Footer.jsx';
import ChatbotService from './Components/ChatbotService.jsx';
import SignupLogin from './Components/SignupLogin.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx'; // Import ProtectedRoute
import { ToastContainer } from 'react-toastify';
import { auth } from './Firebase/Firebase'; // Import Firebase auth for checking logged-in user
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Header user={user} /> 
      <Routes>
        <Route path="/service" element={
          <ProtectedRoute user={user}>
            <ChatbotService user={user} />
          </ProtectedRoute>
        } />
        <Route path="/" element={<Landing />} />
        <Route path='/signuplogin' element={<SignupLogin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
