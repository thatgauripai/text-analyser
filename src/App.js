import React, { useState, useEffect } from "react";
import "./App.css";

const themes = {
  space: {
    name: "Space Explorer",
    colors: {
      primary: "#1a1a2e",
      secondary: "#16213e",
      accent: "#0f3460",
      highlight: "#4cc9f0",
      text: "#ffffff"
    },
    background: "linear-gradient(135deg, #0c0c1d 0%, #1a1a2e 100%)",
    icon: "🚀"
  },
  anime: {
    name: "Anime World",
    colors: {
      primary: "#ff2e63",
      secondary: "#ff9a9e",
      accent: "#ffd3d6",
      highlight: "#00adb5",
      text: "#393e46"
    },
    background: "linear-gradient(135deg, #ff2e63 0%, #ff9a9e 100%)",
    icon: "🌸",
    gradient: "linear-gradient(45deg, #ff2e63, #ff9a9e, #00adb5, #a7d2cb)"
  },
  sports: {
    name: "Sports Arena",
    colors: {
      primary: "#2d3436",
      secondary: "#636e72",
      accent: "#00b894",
      highlight: "#fd79a8",
      text: "#ffffff"
    },
    background: "linear-gradient(135deg, #2d3436 0%, #636e72 100%)",
    icon: "⚽"
  },
  pop: {
    name: "Pop Culture",
    colors: {
      primary: "#6c5ce7",
      secondary: "#fd79a8",
      accent: "#ffeaa7",
      highlight: "#00cec9",
      text: "#2d3436"
    },
    background: "linear-gradient(135deg, #6c5ce7 0%, #fd79a8 100%)",
    icon: "🎭",
    gradient: "linear-gradient(45deg, #6c5ce7, #a29bfe, #fd79a8, #fab1a0)"
  },
  cyberpunk: {
    name: "Cyberpunk",
    colors: {
      primary: "#1a1a2e",
      secondary: "#16213e",
      accent: "#0f3460",
      highlight: "#00dbde",
      text: "#ffffff"
    },
    background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
    icon: "🔮"
  }
};

function App() {
  const [text, setText] = useState("");
  const [currentTheme, setCurrentTheme] = useState("space");
  const [activeTab, setActiveTab] = useState("basic");
  const [textHistory, setTextHistory] = useState([]);
  const [fontSize, setFontSize] = useState(16);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Sample sentences for each theme
  const sampleTexts = {
    space: "The stars whisper secrets to those who listen, galaxies dance in cosmic harmony, and black holes hide mysteries beyond comprehension. Space exploration pushes humanity's boundaries toward unknown frontiers.",
    anime: "Believe in yourself! The power of friendship can overcome any challenge. My hero's journey begins with a single step toward becoming the strongest in the universe!",
    sports: "Victory belongs to the most persevering. The thrill of competition drives athletes to push beyond their limits. Teamwork makes the dream work on the field of champions.",
    pop: "Trends come and go, but true art remains. Streaming has revolutionized how we consume entertainment. Memes have become the universal language of digital culture.",
    cyberpunk: "Neon lights reflect on wet asphalt as neural implants buzz with data streams. The boundary between human and machine blurs in the digital frontier where consciousness can be uploaded."
  };

  // Basic Analysis Functions
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

  const countSentences = (str) => {
    const match = str.match(/[.!?]+/g);
    return match ? match.length : 0;
  };

  // Advanced Analysis Functions
  const countCharacters = (str) => str.length;
  const countSpaces = (str) => (str.match(/ /g) || []).length;
  const countLines = (str) => str.split('\n').filter(line => line.trim() !== '').length;

  const countUniqueWords = (str) => {
    const words = str.toLowerCase().match(/\b\w+\b/g) || [];
    return new Set(words).size;
  };

  const getLongestWord = (str) => {
    const words = str.match(/\b\w+\b/g) || [];
    return words.reduce((longest, current) => 
      current.length > longest.length ? current : longest, "");
  };

  const getReadingTime = (str) => {
    const words = countWords(str);
    return Math.ceil(words / 200); // Average reading speed: 200 WPM
  };

  const getWordFrequency = (str) => {
    const words = str.toLowerCase().match(/\b\w+\b/g) || [];
    const frequency = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    return Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  };

  const getSentimentScore = (str) => {
    const positiveWords = ['happy', 'good', 'great', 'excellent', 'awesome', 'love', 'like', 'best', 'positive'];
    const negativeWords = ['sad', 'bad', 'terrible', 'awful', 'hate', 'dislike', 'worst', 'negative'];
    
    const words = str.toLowerCase().match(/\b\w+\b/g) || [];
    let score = 0;
    
    words.forEach(word => {
      if (positiveWords.includes(word)) score += 1;
      if (negativeWords.includes(word)) score -= 1;
    });
    
    return score;
  };

  const getTextType = (str) => {
    const words = countWords(str);
    if (words < 50) return "Short Text";
    if (words < 200) return "Paragraph";
    if (words < 1000) return "Essay";
    return "Long Form";
  };

  // Theme-specific actions
  const performThemeAction = () => {
    const theme = themes[currentTheme];
    let actionText = "";
    
    switch(currentTheme) {
      case "space":
        actionText = text.toUpperCase() + " 🚀 TRANSMITTED TO SPACE!";
        break;
      case "anime":
        actionText = "✧･ﾟ: *✧･ﾟ:* " + text + " *:･ﾟ✧*:･ﾟ✧";
        break;
      case "sports":
        actionText = "⚡ " + text.split(' ').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ') + " ⚡";
        break;
      case "pop":
        actionText = "🔥 " + text + " TRENDING NOW 🔥";
        break;
      case "cyberpunk":
        actionText = "[" + text + "] ENCRYPTED WITH NEURAL IMPLANTS";
        break;
      default:
        actionText = text;
    }
    
    return actionText;
  };

  const generateRandomText = () => {
    setText(sampleTexts[currentTheme]);
  };

  const clearText = () => {
    setTextHistory(prev => [...prev, text]);
    setText("");
  };

  const undoClear = () => {
    if (textHistory.length > 0) {
      const lastText = textHistory[textHistory.length - 1];
      setText(lastText);
      setTextHistory(prev => prev.slice(0, -1));
    }
  };

  const shareResults = () => {
    const results = `
🎯 Text Analysis Results:

📝 Characters: ${countCharacters(text)}
🔤 Words: ${countWords(text)}
📖 Sentences: ${countSentences(text)}
🎭 Theme: ${themes[currentTheme].name}
🌟 Vowels: ${countVowels(text)}
🔠 Consonants: ${countConsonants(text)}
⏱️ Reading Time: ${getReadingTime(text)} minutes

Analyzed with Theme-Based Text Analyzer 🚀
    `;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Text Analysis Results',
        text: results
      });
    } else {
      navigator.clipboard.writeText(results);
      alert('Results copied to clipboard!');
    }
  };

  const downloadAnalysis = () => {
    const analysis = {
      text: text,
      analysis: {
        characters: countCharacters(text),
        words: countWords(text),
        sentences: countSentences(text),
        vowels: countVowels(text),
        consonants: countConsonants(text),
        readingTime: getReadingTime(text),
        longestWord: getLongestWord(text),
        uniqueWords: countUniqueWords(text),
        sentiment: getSentimentScore(text),
        textType: getTextType(text)
      },
      theme: currentTheme,
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(analysis, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `text-analysis-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Theme change effect
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', themes[currentTheme].colors.primary);
    document.documentElement.style.setProperty('--secondary-color', themes[currentTheme].colors.secondary);
    document.documentElement.style.setProperty('--accent-color', themes[currentTheme].colors.accent);
    document.documentElement.style.setProperty('--highlight-color', themes[currentTheme].colors.highlight);
    document.documentElement.style.setProperty('--text-color', themes[currentTheme].colors.text);
    document.documentElement.style.setProperty('--background', themes[currentTheme].background);
  }, [currentTheme]);

  return (
    <div className="app" data-theme={currentTheme}>
      <header className="header">
        <div className="theme-selector">
          <span className="theme-icon">{themes[currentTheme].icon}</span>
          <h1>{themes[currentTheme].name} Text Analyzer</h1>
          <div className="theme-buttons">
            {Object.keys(themes).map(theme => (
              <button
                key={theme}
                className={`theme-btn ${currentTheme === theme ? 'active' : ''}`}
                onClick={() => setCurrentTheme(theme)}
                style={{
                  background: themes[theme].colors.secondary,
                  color: themes[theme].colors.text
                }}
              >
                {themes[theme].icon} {themes[theme].name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="controls">
          <button onClick={generateRandomText} className="control-btn">
            {themes[currentTheme].icon} Generate Sample
          </button>
          <button onClick={clearText} className="control-btn">
            Clear Text
          </button>
          <button onClick={undoClear} className="control-btn" disabled={textHistory.length === 0}>
            Undo Clear
          </button>
          <div className="font-control">
            <label>Font Size:</label>
            <input
              type="range"
              min="12"
              max="24"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
            />
            <span>{fontSize}px</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="text-input-section">
          <div className="textarea-container">
            <textarea
              style={{ fontSize: `${fontSize}px` }}
              rows="8"
              placeholder={`Start typing your text here... (Try the ${themes[currentTheme].name} theme!)`}
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <div className="textarea-stats">
              <span>{countCharacters(text)} chars</span>
              <span>{countWords(text)} words</span>
              <span>{countSentences(text)} sentences</span>
            </div>
          </div>

          <button 
            className="theme-action-btn"
            onClick={() => setText(performThemeAction())}
            disabled={!text.trim()}
          >
            Apply {themes[currentTheme].name} Magic ✨
          </button>
        </div>

        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'basic' ? 'active' : ''}`}
            onClick={() => setActiveTab('basic')}
          >
            📊 Basic Analysis
          </button>
          <button 
            className={`tab ${activeTab === 'advanced' ? 'active' : ''}`}
            onClick={() => setActiveTab('advanced')}
          >
            🔍 Advanced Analysis
          </button>
          <button 
            className={`tab ${activeTab === 'visual' ? 'active' : ''}`}
            onClick={() => setActiveTab('visual')}
          >
            📈 Visual Stats
          </button>
        </div>

        <div className="analysis-section">
          {activeTab === 'basic' && (
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Characters</h3>
                <p className="stat-value">{countCharacters(text)}</p>
                <p className="stat-desc">Total characters including spaces</p>
              </div>
              
              <div className="stat-card">
                <h3>Words</h3>
                <p className="stat-value">{countWords(text)}</p>
                <p className="stat-desc">Total words in text</p>
              </div>
              
              <div className="stat-card">
                <h3>Sentences</h3>
                <p className="stat-value">{countSentences(text)}</p>
                <p className="stat-desc">Complete sentences</p>
              </div>
              
              <div className="stat-card">
                <h3>Vowels</h3>
                <p className="stat-value">{countVowels(text)}</p>
                <p className="stat-desc">A, E, I, O, U characters</p>
              </div>
              
              <div className="stat-card">
                <h3>Consonants</h3>
                <p className="stat-value">{countConsonants(text)}</p>
                <p className="stat-desc">Non-vowel letters</p>
              </div>
              
              <div className="stat-card">
                <h3>Spaces</h3>
                <p className="stat-value">{countSpaces(text)}</p>
                <p className="stat-desc">Whitespace characters</p>
              </div>
            </div>
          )}

          {activeTab === 'advanced' && (
            <div className="advanced-stats">
              <div className="advanced-grid">
                <div className="advanced-card">
                  <h3>Reading Time</h3>
                  <p className="advanced-value">{getReadingTime(text)} min</p>
                  <p className="advanced-desc">At 200 words per minute</p>
                </div>
                
                <div className="advanced-card">
                  <h3>Longest Word</h3>
                  <p className="advanced-value">{getLongestWord(text) || "N/A"}</p>
                  <p className="advanced-desc">{getLongestWord(text) ? getLongestWord(text).length + " letters" : ""}</p>
                </div>
                
                <div className="advanced-card">
                  <h3>Unique Words</h3>
                  <p className="advanced-value">{countUniqueWords(text)}</p>
                  <p className="advanced-desc">Distinct words used</p>
                </div>
                
                <div className="advanced-card">
                  <h3>Text Type</h3>
                  <p className="advanced-value">{getTextType(text)}</p>
                  <p className="advanced-desc">Based on word count</p>
                </div>
              </div>
              
              <div className="word-frequency">
                <h3>Top 10 Frequent Words</h3>
                <div className="frequency-list">
                  {getWordFrequency(text).map(([word, count], index) => (
                    <div key={index} className="frequency-item">
                      <span className="word">{word}</span>
                      <div className="frequency-bar">
                        <div 
                          className="bar-fill"
                          style={{ 
                            width: `${(count / Math.max(...getWordFrequency(text).map(w => w[1]))) * 100}%`,
                            background: themes[currentTheme].colors.highlight
                          }}
                        ></div>
                      </div>
                      <span className="count">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="sentiment-analysis">
                <h3>Sentiment Analysis</h3>
                <div className="sentiment-score">
                  <span className="score-value">{getSentimentScore(text)}</span>
                  <div className="sentiment-scale">
                    <span>Negative</span>
                    <div className="scale-bar">
                      <div 
                        className="scale-fill"
                        style={{ 
                          width: `${((getSentimentScore(text) + 10) / 20) * 100}%`,
                          background: getSentimentScore(text) > 0 
                            ? '#00b894' 
                            : getSentimentScore(text) < 0 
                            ? '#d63031' 
                            : '#fdcb6e'
                        }}
                      ></div>
                    </div>
                    <span>Positive</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'visual' && (
            <div className="visual-stats">
              <div className="visual-grid">
                <div className="visual-card">
                  <h3>Character Distribution</h3>
                  <div className="distribution">
                    <div className="dist-item">
                      <span>Letters</span>
                      <div className="dist-bar">
                        <div 
                          className="dist-fill"
                          style={{ 
                            width: `${((countVowels(text) + countConsonants(text)) / Math.max(1, countCharacters(text))) * 100}%`,
                            background: '#4cc9f0'
                          }}
                        ></div>
                      </div>
                      <span>{countVowels(text) + countConsonants(text)}</span>
                    </div>
                    <div className="dist-item">
                      <span>Spaces</span>
                      <div className="dist-bar">
                        <div 
                          className="dist-fill"
                          style={{ 
                            width: `${(countSpaces(text) / Math.max(1, countCharacters(text))) * 100}%`,
                            background: '#00b894'
                          }}
                        ></div>
                      </div>
                      <span>{countSpaces(text)}</span>
                    </div>
                    <div className="dist-item">
                      <span>Other</span>
                      <div className="dist-bar">
                        <div 
                          className="dist-fill"
                          style={{ 
                            width: `${((countCharacters(text) - countSpaces(text) - countVowels(text) - countConsonants(text)) / Math.max(1, countCharacters(text))) * 100}%`,
                            background: '#fd79a8'
                          }}
                        ></div>
                      </div>
                      <span>{countCharacters(text) - countSpaces(text) - countVowels(text) - countConsonants(text)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="visual-card">
                  <h3>Word Density</h3>
                  <div className="density-info">
                    <p>Words per sentence: {(countWords(text) / Math.max(1, countSentences(text))).toFixed(1)}</p>
                    <p>Characters per word: {(countCharacters(text) / Math.max(1, countWords(text))).toFixed(1)}</p>
                    <p>Sentences per paragraph: {(countSentences(text) / Math.max(1, countLines(text))).toFixed(1)}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="action-buttons">
          <button onClick={shareResults} className="action-btn" disabled={!text.trim()}>
            📤 Share Results
          </button>
          <button onClick={downloadAnalysis} className="action-btn" disabled={!text.trim()}>
            📥 Download Analysis
          </button>
          <button onClick={() => setShowAdvanced(!showAdvanced)} className="action-btn">
            {showAdvanced ? 'Hide' : 'Show'} Advanced Options
          </button>
        </div>

        {showAdvanced && (
          <div className="advanced-options">
            <h3>Advanced Options</h3>
            <div className="options-grid">
              <div className="option">
                <label>Text Case:</label>
                <div className="case-buttons">
                  <button onClick={() => setText(text.toUpperCase())}>UPPERCASE</button>
                  <button onClick={() => setText(text.toLowerCase())}>lowercase</button>
                  <button onClick={() => setText(text.replace(/\b\w/g, char => char.toUpperCase()))}>Title Case</button>
                </div>
              </div>
              <div className="option">
                <label>Remove Extra Spaces:</label>
                <button onClick={() => setText(text.replace(/\s+/g, ' ').trim())}>Clean Text</button>
              </div>
              <div className="option">
                <label>Copy Text:</label>
                <button onClick={() => navigator.clipboard.writeText(text)}>Copy to Clipboard</button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>🎯 Theme-Based Text Analyzer • Choose a theme and analyze your text in style!</p>
        <p className="current-theme">
          Current Theme: <span>{themes[currentTheme].name}</span> {themes[currentTheme].icon}
        </p>
      </footer>
    </div>
  );
}

export default App;