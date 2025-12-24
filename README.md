# 🎭 Theme-Based Text Analyzer

A beautiful, interactive text analysis application with 5 unique themes. Analyze your text in style while getting comprehensive statistics and insights about your writing.

![Text Analyzer Demo](https://img.shields.io/badge/demo-live-brightgreen) ![React](https://img.shields.io/badge/React-18.2-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Themes](https://img.shields.io/badge/themes-5-orange)

## ✨ Features

### 🎨 **5 Interactive Themes**
Choose from 5 beautifully designed themes, each with unique colors and special effects:

1. **🚀 Space Explorer** - Dark cosmic theme with blue gradients
2. **🔥 Anime World** - Vibrant orange/black/yellow anime-inspired theme
3. **⚽ Sports Arena** - Dark gray theme with athletic energy
4. **🎭 Pop Culture** - Purple/pink gradient with trendy aesthetics
5. **🔮 Cyberpunk** - Futuristic neon blue theme

### 📊 **Comprehensive Text Analysis**

#### **Basic Analysis**
- Character count (with/without spaces)
- Word count
- Sentence count
- Vowel and consonant count
- Line count
- Space count

#### **Advanced Statistics**
- Reading time estimation
- Longest word detection
- Unique word count
- Text type classification (Short, Paragraph, Essay, Long Form)
- Word density metrics
- Character distribution charts

#### **Interactive Visualizations**
- Word frequency with progress bars
- Sentiment analysis scale
- Character distribution graphs
- Real-time text statistics

### 🎮 **Interactive Features**

#### **Theme Actions**
Each theme has unique text transformations:
- **Space**: Transforms text to uppercase with rocket emojis
- **Anime**: Wraps text in decorative sparkle characters
- **Sports**: Capitalizes words with lightning emojis
- **Pop**: Adds trending indicators
- **Cyberpunk**: Encrypts text with neural implant style

#### **Text Manipulation Tools**
- Case conversion (UPPERCASE, lowercase, Title Case)
- Remove extra spaces
- Copy to clipboard
- Generate theme-relevant sample text
- Undo/Redo functionality
- Font size adjustment

#### **Export & Sharing**
- Download analysis as JSON file
- Share results via Web Share API
- Copy results to clipboard
- Real-time statistics display

### 🎯 **Special Features**
- **Real-time Analysis**: Statistics update as you type
- **Sample Texts**: Pre-loaded thematic sample texts
- **Text History**: Keep track of previous texts
- **Responsive Design**: Works perfectly on all devices
- **Keyboard Support**: Full keyboard navigation
- **Glass-morphism UI**: Modern frosted glass effects
- **Animated Elements**: Smooth transitions and hover effects


## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/theme-text-analyzer.git
cd theme-text-analyzer
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm start
# or
yarn start
```

4. **Open in browser**
Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
theme-text-analyzer/
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Styling with theme variables
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── public/
│   └── index.html          # HTML template
├── package.json            # Dependencies
└── README.md               # This file
```

## 🎯 How to Use

### Basic Usage
1. **Select a Theme**: Click on any theme button (Space, Anime, Sports, Pop, Cyberpunk)
2. **Enter Text**: Type or paste your text in the text area
3. **View Statistics**: Switch between Basic, Advanced, and Visual tabs
4. **Apply Theme Magic**: Click the theme action button for special text transformations

### Advanced Features
- **Generate Sample**: Click "Generate Sample" to load theme-relevant example text
- **Export Results**: Use "Download Analysis" to save your analysis as JSON
- **Share Results**: Click "Share Results" to share via email or social media
- **Text History**: Use "Clear Text" and "Undo Clear" to manage your text history

### Keyboard Shortcuts
- **Tab Navigation**: Switch between analysis tabs
- **Ctrl/Cmd + C**: Copy text
- **Ctrl/Cmd + V**: Paste text
- **Ctrl/Cmd + A**: Select all text

## 🎨 Theme Details

### **Space Explorer Theme** 🚀
- Colors: Deep blues and cyan
- Atmosphere: Cosmic, mysterious
- Best for: Technical writing, science fiction

### **Anime World Theme** 🔥
- Colors: Orange, black, gold
- Atmosphere: Energetic, bold, fiery
- Best for: Creative writing, storytelling

### **Sports Arena Theme** ⚽
- Colors: Dark gray with green highlights
- Atmosphere: Competitive, energetic
- Best for: Sports articles, motivational content

### **Pop Culture Theme** 🎭
- Colors: Purple, pink, turquoise
- Atmosphere: Trendy, vibrant
- Best for: Social media content, blog posts

### **Cyberpunk Theme** 🔮
- Colors: Dark blue with neon teal
- Atmosphere: Futuristic, digital
- Best for: Tech writing, futuristic content

## 🔧 Technologies Used

- **React 18** - Frontend library
- **CSS3** - Modern styling with CSS Variables
- **JavaScript ES6+** - Modern JavaScript features
- **LocalStorage API** - Data persistence
- **Web Share API** - Native sharing capabilities
- **Clipboard API** - Copy functionality

## 📊 Analysis Algorithms

### Word Count
```javascript
const countWords = (str) => {
  const trimmed = str.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
};
```

### Sentiment Analysis
Basic sentiment scoring based on positive/negative word lists

### Reading Time
Calculated at average reading speed of 200 words per minute

### Unique Words
Uses JavaScript Set to find distinct words

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop**: Full feature set with multi-column layouts
- **Tablet**: Optimized touch targets and spacing
- **Mobile**: Vertical layout with accessible buttons

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation for new features
- Test on multiple screen sizes

## 🐛 Known Issues

- Large texts (10,000+ characters) may cause performance issues
- Some mobile browsers have limited Web Share API support
- Safari has limited backdrop-filter support

## 🔮 Future Enhancements

- [ ] Add more themes (Gothic, Minimal, Retro)
- [ ] Implement AI-powered writing suggestions
- [ ] Add grammar checking
- [ ] Include plagiarism detection
- [ ] Add text-to-speech functionality
- [ ] Implement collaborative editing
- [ ] Add export to PDF/Word
- [ ] Include more language support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by various text analysis tools and design systems
- Color palettes inspired by popular media and design trends

## 📞 Support

For support, email gaurinandanapai@gmail.com or create an issue in the GitHub repository.


---

## 🚀 Quick Start for Developers

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/theme-text-analyzer.git

# Install dependencies
npm install

# Start development server
npm start

# Run tests (if available)
npm test

# Build for production
npm run build
```

Enjoy analyzing your text in style! 🎉
