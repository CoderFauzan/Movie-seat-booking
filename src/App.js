import React from 'react';
import './style.scss';

import { useState } from 'react';

export default function App() {
  const [seats, setSeats] = useState(Array(50).fill('seat'));

  const handleSeatClick = (index) => {
    const newSeats = [...seats];
    if (newSeats[index] === 'seat') {
      newSeats[index] = 'reserve';
    } else if (newSeats[index] === 'reserve') {
      newSeats[index] = 'seat';
    }
    setSeats(newSeats);
  };

  const handleResetClick = () => {
    setSeats(Array(50).fill('seat'));
  };

  const handleClearClick = () => {
    setSeats(Array(50).fill('seat'));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const reservedSeats = seats.filter((seat) => seat === 'reserve');
    if (reservedSeats.length === 0) {
      alert('No seats booked!');
    } else {
      alert(`Reserved seats: ${reservedSeats}`);
    }
  };

  return (
    <div className="App">
      <h1>Movie Seat Booking</h1>
      <div className="seats">
        {seats.map((seat, index) => (
          <button
            key={index}
            className={`${seat} ${seat === 'seat' ? 'green' : ''}`}
            onClick={() => handleSeatClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handleResetClick}>Reset</button>
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
        <button onClick={handleClearClick}>Clear</button>
      </div>
    </div>
  );
}
