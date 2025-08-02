import { useState } from "react";
import Guest from "./components/Guest.jsx";
import User from "./components/User.jsx";
import FlightDetails from "./components/FlightDetails.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Ticket Booking App</h1>

      <FlightDetails />

      {isLoggedIn ? <User /> : <Guest />}

      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
