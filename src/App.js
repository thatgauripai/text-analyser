import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const countVowels = (str) => {
    const match = str.match(/[aeiouAEIOU]/g);
    return match ? match.length : 0;
  };

  const countConsonants = (str) => {
    const match = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
    return match ? match.length : 0;
  };

  const countWords = (str) => {
    const trimmed = str.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  };

  return (
    <div className="app">
      <h1>Vowel, Consonant & Word Counter</h1>
      <textarea
        rows="6"
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="stats">
        <p>Vowels: {countVowels(text)}</p>
        <p>Consonants: {countConsonants(text)}</p>
        <p>Words: {countWords(text)}</p>
      </div>
    </div>
  );
}

export default App;
