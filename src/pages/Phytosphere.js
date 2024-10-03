import React, { useState } from 'react';
import './Phytosphere.css'; // Import the CSS file for styling

const Phytosphere = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // Simulate fetching an answer (In real cases, you can call an API to get the answer)
  const handleAskOcean = () => {
    // Replace this with real logic for fetching answer
    if (question.trim()) {
      setAnswer(`Answer to your question: "${question}" will be fetched here.`); // Placeholder answer
    } else {
      setAnswer('Please enter a question!');
    }
  };

  return (
    <div className="phytosphere-container">
      <h1>Welcome to the Phytosphere</h1>
      <p>
        Here, you can explore data from NASA PACE and ask questions related to
        the ocean and atmosphere. Use the box below to interact with the "Ask
        Ocean" feature and get the answers you need about ocean health,
        phytoplankton, aerosols, and more.
      </p>

      {/* Input question box with neon effect */}
      <div className="ask-ocean-container">
        <input
          type="text"
          className="ask-ocean-input"
          placeholder="Ask your ocean-related question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="ask-ocean-button" onClick={handleAskOcean}>
          ASK OCEAN
        </button>
      </div>

      {/* Display the answer */}
      {answer && <div className="answer-box">{answer}</div>}
    </div>
  );
};

export default Phytosphere;
