import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AuthLayout from './components/layout/AuthLayout'; // Corrected import path
import Home from './components/pages/Home';
import AIDiagnosis from './components/pages/AIDiagnosis';
import VideoConsultation from './components/pages/VideoConsultation';
import HealthcareLocator from './components/pages/HealthcareLocator';
import HealthArticles from './components/pages/HealthArticles';
import DigitalPrescriptions from './components/pages/DigitalPrescriptions';
import About from './components/pages/About';
import Register from './components/pages/Register';
import Terms from './components/pages/Terms';
import Privacy from './components/pages/Privacy';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import UserProfile from './components/pages/UserProfile';
import Dashboard from './components/pages/Dashboard';
import NotFound from './components/pages/NotFound';
import Loading from './components/pages/Loading';
import ForgotPassword from './components/pages/ForgotPassword';


const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(user ? true : false);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="diagnosis" element={<AIDiagnosis />} />
          <Route path="consultation" element={<VideoConsultation />} />
          <Route path="locate" element={<HealthcareLocator />} />
          <Route path="articles" element={<HealthArticles />} />
          <Route path="prescriptions" element={<DigitalPrescriptions />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Routes without Navbar (AuthLayout) */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
