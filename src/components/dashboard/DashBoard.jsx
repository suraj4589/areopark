import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { flightBookings } from "../../data/mockData";

function DashBoard() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || "User";

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      
      <header className="bg-indigo-500 text-white px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Flight Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm">Welcome, {username}!</span>
          <button
            onClick={handleLogout}
            className="bg-white text-lime-500 font-medium px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </header>

      
      <main className="p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Your Booked Flights</h2>
        {flightBookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-100 text-gray-800">
                  <th className="px-4 py-2 border">Flight Number</th>
                  <th className="px-4 py-2 border">Departure</th>
                  <th className="px-4 py-2 border">Destination</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Time</th>
                  <th className="px-4 py-2 border">Passengers</th>
                  <th className="px-4 py-2 border">Class</th>
                  <th className="px-4 py-2 border">Price</th>
                </tr>
              </thead>
              <tbody>
                {flightBookings.map((flight) => (
                  <tr key={flight.id} className="text-center hover:bg-gray-100">
                    <td className="px-4 py-2 border">{flight.flightNumber}</td>
                    <td className="px-4 py-2 border">{flight.departure}</td>
                    <td className="px-4 py-2 border">{flight.destination}</td>
                    <td className="px-4 py-2 border">{flight.date}</td>
                    <td className="px-4 py-2 border">{flight.time}</td>
                    <td className="px-4 py-2 border">{flight.passengers}</td>
                    <td className="px-4 py-2 border">{flight.class}</td>
                    <td className="px-4 py-2 border">{flight.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">You have no booked flights.</p>
        )}
      </main>
    </div>
  );
}

export default DashBoard;
