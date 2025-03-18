import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Loading from './Loading';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      
      // Check if email or username already exists
      if (storedUsers.some(u => u.email === email)) {
        setError('Email already registered');
        setLoading(false);
        return;
      }
      if (storedUsers.some(u => u.username === username)) {
        setError('Username already taken');
        setLoading(false);
        return;
      }

      // Create new user
      const newUser = {
        firstName,
        lastName,
        username,
        email,
        password,
        createdAt: new Date().toISOString()
      };

      // Add to local storage
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      localStorage.setItem('user', JSON.stringify(newUser));
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-tr from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Left Side - Branding (hidden on mobile) */}
          <div className="hidden md:flex md:w-1/2 lg:w-1/2 bg-emerald-600 text-white flex-col justify-center items-center p-4 md:p-8 lg:p-12 relative overflow-hidden shadow-xl rounded-r-xl">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-700 opacity-90"
              animate={{ 
                background: [
                  "linear-gradient(to bottom right, #10b981, #0d9488)",
                  "linear-gradient(to bottom right, #059669, #0f766e)",
                  "linear-gradient(to bottom right, #10b981, #0d9488)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white opacity-10"
                  style={{
                    width: 100 + i * 50,
                    height: 100 + i * 50,
                    top: `${20 + i * 10}%`,
                    left: `${10 + i * 15}%`,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    x: [0, i % 2 === 0 ? 20 : -20, 0],
                    y: [0, i % 2 === 0 ? -20 : 20, 0],
                  }}
                  transition={{
                    duration: 8 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <motion.div 
              className="absolute inset-0 opacity-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                  d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" 
                  fill="white"
                  animate={{ d: [
                    "M0,50 Q25,30 50,50 T100,50 V100 H0 Z",
                    "M0,55 Q25,35 50,55 T100,55 V100 H0 Z",
                    "M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
                  ]}}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M0,60 Q25,40 50,60 T100,60 V100 H0 Z" 
                  fill="white" 
                  opacity="0.5"
                  animate={{ d: [
                    "M0,60 Q25,40 50,60 T100,60 V100 H0 Z",
                    "M0,65 Q25,45 50,65 T100,65 V100 H0 Z",
                    "M0,60 Q25,40 50,60 T100,60 V100 H0 Z"
                  ]}}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M0,70 Q25,50 50,70 T100,70 V100 H0 Z" 
                  fill="white" 
                  opacity="0.3"
                  animate={{ d: [
                    "M0,70 Q25,50 50,70 T100,70 V100 H0 Z",
                    "M0,75 Q25,55 50,75 T100,75 V100 H0 Z",
                    "M0,70 Q25,50 50,70 T100,70 V100 H0 Z"
                  ]}}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
            
            <motion.div 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center mb-6 md:mb-8 z-10 shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.3
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 25px rgba(255,255,255,0.5)"
              }}
            >
              <motion.svg 
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-emerald-600" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.path 
                  fillRule="evenodd" 
                  d="M4.16 4.16c1.96-1.96 5.08-2.34 7.47-.87l-1.68 1.69c-.51.51-.52 1.34-.01 1.85s1.34.5 1.85-.01l1.67-1.68c1.47 2.39 1.09 5.51-.87 7.47-1.44 1.44-3.34 2.19-5.24 2.24-.04.01-.09.01-.13.01H7c-.55 0-1-.45-1-1V14c0-.56-.44-1-1-1h-.75c-.56 0-1-.44-1-1v-.75c0-.56-.44-1-1-1H2.5c-.55 0-1-.45-1-1V9c0-.04 0-.09.01-.13.05-1.9.8-3.8 2.24-5.24l.37-.37a1 1 0 011.42 0l.36.36z"
                  clipRule="evenodd"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 0.8,
                    ease: "easeInOut" 
                  }}
                />
              </motion.svg>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 z-10 drop-shadow-lg tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.span
                initial={{ display: "inline-block" }}
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 1.5, delay: 2, repeat: Infinity, repeatDelay: 10 }}
              >
                Sign
              </motion.span>{" "}
              <motion.span
                initial={{ display: "inline-block" }}
                animate={{ rotate: [0, -2, 0, 2, 0] }}
                transition={{ duration: 1.5, delay: 2.2, repeat: Infinity, repeatDelay: 10 }}
              >
                Up
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-emerald-50 max-w-md text-center z-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Create an account to start your personalized health journey.
            </motion.p>
            
            <motion.div 
              className="mt-4 md:mt-6 border-t border-emerald-400 pt-4 md:pt-6 w-full max-w-md z-10 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <motion.p 
                className="italic text-emerald-50 text-center text-sm md:text-base"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                "Your wellness journey begins with a single step."
              </motion.p>
            </motion.div>
            
            {/* Animated particles - reduced for mobile */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white z-10"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%` 
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  y: [0, -30],
                  x: i % 2 === 0 ? [0, 10] : [0, -10]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center items-center p-4 sm:p-6 overflow-y-auto">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white">Create Account</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center mb-4 sm:mb-6">Join us today</p>

              {error && (
                <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400 rounded-md">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* First Name and Last Name Inputs Side by Side */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  {/* First Name Input */}
                  <div className="relative flex-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      First Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder="First name"
                        className="w-full pl-10 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Last Name Input */}
                  <div className="relative flex-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder="Last name"
                        className="w-full pl-10 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Username Input */}
                <div className="relative">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Username
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="Your username"
                      className="w-full pl-10 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full pl-10 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="relative">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3.5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="w-full pl-10 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-500"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-700 focus:outline-none transition-all"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    'Sign Up'
                  )}
                </button>
              </form>

              {/* Social Sign Up */}
              <div className="mt-4 sm:mt-6 text-center text-sm text-gray-600 dark:text-gray-400">Or sign up with</div>
              <div className="mt-3 sm:mt-4 flex justify-center space-x-3">
                <button className="p-2 sm:p-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FaGoogle className="text-red-500" />
                </button>
                <button className="p-2 sm:p-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FaFacebook className="text-blue-600" />
                </button>
                <button className="p-2 sm:p-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FaGithub className="text-gray-800" />
                </button>
              </div>

              <p className="mt-4 sm:mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account? <Link to="/login" className="text-emerald-600 hover:underline">Sign in</Link>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SignUp;