import { Link } from 'react-router-dom';
import { HeartPulse, Video, MapPin, FileText, ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, description, icon, link }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 group">
    <div className="text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <Link
      to={link}
      className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-500 font-medium group-hover:font-bold transition-all duration-300"
    >
      Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all duration-300" />
    </Link>
  </div>
);

const TestimonialCard = ({ quote, author, role }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
    <p className="italic text-gray-600 dark:text-gray-300 mb-4">"{quote}"</p>
    <div>
      <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
    </div>
  </div>
);

const Home = () => {
  const features = [
    {
      title: "AI Health Diagnosis",
      description: "Get instant health insights by describing your symptoms to our AI-powered system.",
      icon: <HeartPulse className="w-8 h-8" />,
      link: "/diagnosis"
    },
    {
      title: "Video Consultation",
      description: "Connect with healthcare professionals through secure video calls.",
      icon: <Video className="w-8 h-8" />,
      link: "/consultation"
    },
    {
      title: "Find Healthcare",
      description: "Locate nearby pharmacies and hospitals using our interactive map.",
      icon: <MapPin className="w-8 h-8" />,
      link: "/locate"
    },
    {
      title: "Digital Prescriptions",
      description: "Receive and manage your prescriptions digitally from your healthcare provider.",
      icon: <FileText className="w-8 h-8" />,
      link: "/prescriptions"
    }
  ];

  const testimonials = [
    {
      quote: "The AI diagnosis feature helped me identify my condition before my appointment, saving valuable time with my doctor.",
      author: "Sarah J.",
      role: "Patient"
    },
    {
      quote: "Being able to consult with specialists remotely has been a game-changer for my practice and patients alike.",
      author: "Dr. Michael Chen",
      role: "Cardiologist"
    },
    {
      quote: "Managing prescriptions digitally has eliminated confusion about my medication schedule.",
      author: "Robert T.",
      role: "Patient"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900 dark:to-cyan-900 rounded-3xl opacity-30 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full  bg-emerald-50 dark:bg-gray-800 rounded-full -z-20" style={{filter: 'blur(100px)'}}></div>
        <div className="text-center pt-12">
          <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-6xl md:text-7xl leading-tight">
            <span className="block">Healthcare Made</span>
            <span className="block text-emerald-600 dark:text-emerald-400">Accessible & Intelligent</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:mt-8">
            Experience the future of healthcare with our AI-powered platform. Get instant health insights, connect with doctors, and manage your health journey digitally.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link
              to="/diagnosis"
              className="px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Try AI Diagnosis
            </Link>
            <Link
              to="/consultation"
              className="px-8 py-4 border border-emerald-200 dark:border-emerald-700 text-base font-medium rounded-xl text-emerald-600 dark:text-emerald-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:text-lg md:px-10 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-5xl font-bold text-emerald-600 dark:text-emerald-400">10,000+</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Active Users</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-5xl font-bold text-emerald-600 dark:text-emerald-400">500+</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Medical Professionals</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-5xl font-bold text-emerald-600 dark:text-emerald-400">98%</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Our Services</h2>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
            </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-700 dark:to-cyan-700 rounded-3xl shadow-xl py-20 my-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl leading-tight">
            <span className="block">Ready to take control of your health?</span>
          </h2>
          <p className="mt-6 text-lg leading-7 text-cyan-100">
            Join thousands of users who trust our platform for their healthcare needs.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link
              to="/register"
              className="px-8 py-4 border border-transparent text-base font-medium rounded-xl text-emerald-600 bg-white hover:bg-emerald-50 md:text-lg transition-all shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-white text-base font-medium rounded-xl text-white hover:bg-emerald-700 md:text-lg transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>© 2025 HealthTech. All rights reserved.</p>
          <div className="flex justify-center space-x-8 mt-6">
            <Link to="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Terms</Link>
            <Link to="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Privacy</Link>
            <Link to="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
