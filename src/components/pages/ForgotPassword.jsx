import { useState } from "react";
import { FiMail } from "react-icons/fi"; // Email icon

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("If this email is registered, you will receive a password reset link.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0D1B2A]">
      <div className="w-full max-w-md bg-[#1B263B] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-white mb-2">Forgot Password</h2>
        <p className="text-gray-400 text-center mb-4">Enter your email to reset your password</p>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-2">Email Address</label>
            <div className="flex items-center bg-[#415A77] rounded-lg px-3 py-2">
              <FiMail className="text-gray-300" />
              <input
                type="email"
                className="w-full bg-transparent text-white ml-2 outline-none"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#00C896] text-white py-2 rounded-lg hover:bg-[#00A87D] transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-4">
          Remembered? <a href="/login" className="text-[#00C896] hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
