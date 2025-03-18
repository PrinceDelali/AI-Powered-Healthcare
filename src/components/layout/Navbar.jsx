import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Retrieve user data from local storage (or context if you're using it)
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg dark:bg-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400"> {/* Increased font size here */}
                MediCare
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 flex-wrap"> {/* Changed space-x-6 to gap-6 and added flex-wrap*/}
            <Link to="/diagnosis" className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 px-4 py-3 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">
              AI Diagnosis
            </Link>
            <Link to="/consultation" className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 px-4 py-3 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">
              Video Consultation
            </Link>
            <Link to="/locate" className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 px-4 py-3 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">
              Find Healthcare
            </Link>
            <Link to="/articles" className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 px-4 py-3 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">
              Health Tips
            </Link>
            {user ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-md"> {/* Added padding to the user profile section */}
                <User className="w-5 h-5 text-emerald-600" />
                <span className="text-gray-700 dark:text-gray-300">{user.name}</span>
                <button onClick={handleLogout} className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  <LogOut className="w-5 h-5 text-emerald-600" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-emerald-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors duration-300 whitespace-nowrap">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 dark:bg-gray-700`}> {/* Added a background color */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/diagnosis"
            className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            AI Diagnosis
          </Link>
          <Link
            to="/consultation"
            className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            Video Consultation
          </Link>
          <Link
            to="/locate"
            className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            Find Healthcare
          </Link>
          <Link
            to="/articles"
            className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            Health Tips
          </Link>
          {user ? (
            <div className="flex flex-col gap-2">
              <span className="text-gray-700 dark:text-gray-300 ml-5">Hello, {user.name}</span>
              <button
                onClick={handleLogout}
                className="w-full text-left block px-4 py-3 rounded-md text-base font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="w-full text-left block px-4 py-3 rounded-md text-base font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
