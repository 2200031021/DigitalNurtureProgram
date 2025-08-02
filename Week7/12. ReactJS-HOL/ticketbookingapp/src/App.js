import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login state
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Element variable for rendering conditionally
  let page;

  if (isLoggedIn) {
    page = <UserPage />;
  } else {
    page = <GuestPage />;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ticket Booking App</h1>

      {/* Conditional Button Text */}
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      {/* Conditional Rendering using variable */}
      {page}
    </div>
  );
}

export default App;
