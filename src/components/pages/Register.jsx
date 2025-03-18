import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Loading from './Loading'; // Import the Loading component

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find((u) => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      {loading ? (
        <Loading /> // Conditionally render the Loading component
      ) : (
        <>
          {/* Left Side - Branding */}
          <div className="hidden lg:flex lg:w-1/2 bg-emerald-600 text-white flex-col justify-center items-center p-12 relative overflow-hidden shadow-xl rounded-r-xl">
            {/* Enhanced background with animated gradient */}
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
            
            {/* Animated circles in background */}
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

            {/* Abstract wave pattern overlay with animation */}
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
            
            {/* Logo/icon - Plant/Growth instead of heart */}
            <motion.div 
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 z-10 shadow-lg"
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
                className="w-14 h-14 text-emerald-600" 
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
            
            {/* Content with improved typography and animations */}
            <motion.h1 
              className="text-5xl font-extrabold mb-6 z-10 drop-shadow-lg tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.span
                initial={{ display: "inline-block" }}
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 1.5, delay: 2, repeat: Infinity, repeatDelay: 10 }}
              >
                Get
              </motion.span>{" "}
              <motion.span
                initial={{ display: "inline-block" }}
                animate={{ rotate: [0, -2, 0, 2, 0] }}
                transition={{ duration: 1.5, delay: 2.2, repeat: Infinity, repeatDelay: 10 }}
              >
                Started
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-emerald-50 max-w-md text-center z-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Sign Up to access your personalized dashboard and continue your health journey.
            </motion.p>
            
            {/* Added inspirational quote with animation */}
            <motion.div 
              className="mt-6 border-t border-emerald-400 pt-6 w-full max-w-md z-10 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <motion.p 
                className="italic text-emerald-50 text-center"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                "Your wellness journey begins with a single step."
              </motion.p>
            </motion.div>
            
            {/* Floating particles animation */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full bg-white z-10"
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

          {/* Right Side - Login Form */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Sign Up</h2>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">Access your dashboard</p>

              {error && (
                <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400 rounded-md">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
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

                {/* Remember Me */}
                <div className="flex justify-between items-center">
                  <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
                    />
                    <span>Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-emerald-600 hover:underline">
                    Forgot password?
                  </Link>
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
                      Signing in...
                    </>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </form>

              {/* Social Login */}
              <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">Or sign in with</div>
              <div className="mt-4 flex justify-center space-x-3">
                <button className="p-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FaGoogle className="text-red-500" />
                </button>
                <button className="p-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FaFacebook className="text-blue-600" />
                </button>
                <button className="p-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FaGithub className="text-gray-800" />
                </button>
              </div>

              <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                Don't have an account? <Link to="/register" className="text-emerald-600 hover:underline">Sign up</Link>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Register