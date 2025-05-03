import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Manager");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (isLoggedIn) {
      navigate("/"); 
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password && role) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("role", role);
      navigate("/"); 
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-br from-cyan-800 via-slate-900 to-gray-900 opacity-10 blur-2xl z-0 animate-pulse" />

      {/* School Name Heading */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-5xl font-extrabold text-cyan-300 mb-8">
          Green Valley International School
        </h1>
        <p className="text-xl text-gray-300 tracking-wide">
          Dashboard and Reporting System
        </p>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-gray-800/80 border border-cyan-600 rounded-2xl shadow-lg p-10 w-[90%] max-w-md backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Login</h2>

        <label className="block mb-2 text-sm font-semibold text-gray-300">Email</label>
        <input
          type="email"
          className="w-full p-2 mb-4 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2 text-sm font-semibold text-gray-300">Password</label>
        <input
          type="password"
          className="w-full p-2 mb-4 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="block mb-2 text-sm font-semibold text-gray-300">Role</label>
        <select
          className="w-full p-2 mb-6 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Management</option>
          <option>Student</option>
          <option>Teacher</option>
          <option>Parent</option>
        </select>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition duration-200 text-white font-semibold py-2 rounded-lg shadow-md"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
