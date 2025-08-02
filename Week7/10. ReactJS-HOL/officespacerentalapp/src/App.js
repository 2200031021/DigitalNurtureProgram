import React from 'react';

function App() {
  // Array of office objects
  const offices = [
    {
      id: 1,
      name: "Workspace One",
      rent: 55000,
      address: "123 Business Road, City A",
      image: "/assets/office1.jfif"
    },
    {
      id: 2,
      name: "Cozy Office Hub",
      rent: 75000,
      address: "456 Startup Lane, City B",
      image: "/assets/office2.jfif"
    },
    {
      id: 3,
      name: "Elite Tower Space",
      rent: 60000,
      address: "789 Tech Park, City C",
      image: "/assets/office3.jfif"
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Office Space Rentals</h1>

      {/* Loop through each office and display details */}
      {offices.map((office) => (
        <div key={office.id} style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          margin: "20px auto",
          maxWidth: "500px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}>
          <img
            src={office.image}
            alt={office.name}
            style={{ width: "100%", height: "auto", borderRadius: "10px", marginBottom: "10px" }}
          />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{
            color: office.rent < 60000 ? 'red' : 'green',
            fontWeight: "bold"
          }}>
            Rent: ₹{office.rent.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
