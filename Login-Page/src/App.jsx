import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const userData = localStorage.getItem('userData');
  if (!userData) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/home"
          element={
            // <ProtectedRoute>
            <LoggedIn />
            // </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/auth/login" />} />
      </Routes>
    </Router>
  );
};

export default App;