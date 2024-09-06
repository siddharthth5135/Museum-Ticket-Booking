import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    toast.error("First login to Access the ChatBot Service", { position: 'top-center' });
    return <Navigate to="/signuplogin" />;
  }

  return children;
};

export default ProtectedRoute;
