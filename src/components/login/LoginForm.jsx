import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


function LoginForm() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  

  function handleSubmit(e) {
    e.preventDefault();

    if (username && email && password) {
      setErrorMessage(""); 
      alert("Login successful!");
      navigate("/api/user/dashboard", {state:{username}}); 
    } else {
      setErrorMessage("All fields are required. Please fill out all fields.");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full text-end text-2xl max-w-sm bg-white    shadow-md rounded-lg p-6">
        <button title="close" onClick={() => navigate('/')}>
          <FaX />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
        {errorMessage && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mt-4 rounded">
            {errorMessage}
          </div>
        )}
        <form className="mt-4 text-start" onSubmit={handleSubmit} method="GET">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm/6 text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block border-2 border-solid w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              placeholder="Enter your username"
              required
              autoComplete="username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm/6 text-gray-700 font-medium mb-2">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block border-2 border-solid w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              placeholder="Exm: svdg@gmail.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block  text-sm/6 text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block border-2 border-solid w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-normal text-sm py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
