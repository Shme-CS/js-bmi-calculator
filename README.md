# BMI Calculator - Professional Body Mass Index Calculator

A modern, production-quality BMI (Body Mass Index) calculator built with HTML5, CSS3, and Vanilla JavaScript. Calculate your BMI with support for both metric and imperial units, track your history, and get personalized health recommendations.

![BMI Calculator](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow.svg)

## 🎯 Overview

BMI Calculator is a fully-featured web application that demonstrates modern frontend development practices. Built without frameworks, it showcases clean JavaScript architecture, responsive design, and smooth user interactions.

## ✨ Features

### Core Features
- **BMI Calculation**: Accurate BMI calculation using standard formulas
- **Dual Unit Support**: Switch between Metric (kg/cm) and Imperial (lbs/inches)
- **BMI Categories**: Underweight, Normal, Overweight, and Obese classifications
- **Visual Indicators**: Animated gauge meter and color-coded range bar
- **Input Validation**: Comprehensive validation with friendly error messages
- **Instant Results**: Real-time calculation with smooth animations

### Advanced Features
- **Calculation History**: Track up to 10 previous calculations
- **LocalStorage**: Persistent history and theme preferences
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Health Recommendations**: Personalized advice based on BMI category
- **Export Results**: Download BMI results as text file
- **Animated Gauge**: Visual BMI gauge with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Keyboard Accessible**: Full keyboard navigation support

## 🚀 Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**:
  - CSS Variables for theming
  - Flexbox and Grid layouts
  - Smooth animations and transitions
  - Media queries for responsiveness
- **JavaScript (ES6+)**:
  - Modular architecture
  - State management
  - DOM manipulation
  - LocalStorage API
  - Event handling

## 📁 Project Structure

```
js-bmi-calculator/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Complete styling with themes
├── js/
│   └── script.js          # Application logic
├── assets/
│   ├── icons/             # Icon assets
│   └── images/            # Image assets
└── README.md              # Project documentation
```

## 🎮 How to Use

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/js-bmi-calculator.git
```

2. Navigate to the project directory:
```bash
cd js-bmi-calculator
```

3. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

Or use a local development server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

### Using the Calculator

1. **Select Unit System**: Choose between Metric or Imperial
2. **Enter Height**: Input your height in cm or inches
3. **Enter Weight**: Input your weight in kg or lbs
4. **Calculate**: Click "Calculate BMI" button
5. **View Results**: See your BMI value, category, and recommendations
6. **Track History**: View your calculation history
7. **Export**: Download your results as a text file

## 🎨 Features Breakdown

### BMI Calculation
- **Metric Formula**: BMI = weight (kg) / (height (m))²
- **Imperial Formula**: BMI = (weight (lbs) / (height (in))²) × 703

### BMI Categories
| Category | BMI Range | Color |
|----------|-----------|-------|
| Underweight | < 18.5 | Blue |
| Normal Weight | 18.5 - 24.9 | Green |
| Overweight | 25 - 29.9 | Orange |
| Obese | ≥ 30 | Red |

### Input Validation
- Empty field detection
- Negative number prevention
- Realistic range checking:
  - Metric: Height 50-300 cm, Weight 20-500 kg
  - Imperial: Height 20-120 in, Weight 40-1100 lbs

### Visual Components
- **Animated Gauge**: SVG-based gauge meter showing BMI position
- **Range Bar**: Color-coded segments highlighting current category
- **Health Cards**: Personalized recommendations per category
- **History Timeline**: Chronological list of calculations

## 💻 Code Architecture

### Modular Functions
```javascript
initializeApp()              // Initialize the application
handleFormSubmit()           // Process form submission
validateInputs()             // Validate user inputs
calculateBMI()               // Calculate BMI value
determineBMICategory()       // Determine BMI category
renderBMIResult()            // Display BMI result
renderBMIGauge()             // Render animated gauge
updateRangeIndicator()       // Update range bar
addToHistory()               // Add to calculation history
saveToLocalStorage()         // Save data to localStorage
loadHistory()                // Load saved history
toggleTheme()                // Switch themes
exportResult()               // Export result as file
```

### State Management
```javascript
const appState = {
    currentUnit: 'metric',
    bmiHistory: [],
    currentBMI: null,
    theme: 'light'
};
```

### Best Practices
- ✅ Minimal global variables
- ✅ Reusable functions
- ✅ Optimized DOM updates
- ✅ Clean code structure
- ✅ Comprehensive comments
- ✅ Error handling
- ✅ Accessibility support

## 🎯 Code Quality

### Performance Optimizations
- Efficient DOM manipulation
- CSS transforms for animations
- Event delegation
- Debounced input validation

### Accessibility Features
- Semantic HTML elements
- ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader support

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

### Mobile Optimizations
- Touch-friendly buttons
- Optimized layouts
- Readable font sizes
- Simplified navigation

## 🔧 Customization

### Changing Theme Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #667eea;
    --success-color: #48bb78;
    --warning-color: #ed8936;
    --danger-color: #f56565;
}
```

### Modifying BMI Ranges

Update the `determineBMICategory()` function in `js/script.js`:

```javascript
function determineBMICategory(bmi) {
    if (bmi < 18.5) return 'underweight';
    if (bmi < 25) return 'normal';
    if (bmi < 30) return 'overweight';
    return 'obese';
}
```

### Adding More History Items

Change the history limit in `addToHistory()`:

```javascript
if (appState.bmiHistory.length > 10) {  // Change 10 to desired number
    appState.bmiHistory = appState.bmiHistory.slice(0, 10);
}
```

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🚀 Future Improvements

- [ ] Add BMI trends chart
- [ ] User accounts and profiles
- [ ] Goal setting and tracking
- [ ] Social sharing features
- [ ] Multiple language support
- [ ] BMI percentile for children
- [ ] Integration with fitness apps
- [ ] Meal and exercise suggestions
- [ ] Print-friendly results
- [ ] Progressive Web App (PWA)

## 📸 Screenshots

### Desktop View
![Desktop View](assets/images/screenshot-desktop.png)

### Mobile View
![Mobile View](assets/images/screenshot-mobile.png)

### Dark Mode
![Dark Mode](assets/images/screenshot-dark.png)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 BMI Calculator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

Created with ❤️ by [Your Name]

## 🙏 Acknowledgments

- Inspired by modern health and fitness applications
- BMI formula from WHO (World Health Organization)
- Color palette inspired by Tailwind CSS
- Icons from Unicode standard

---

⭐ Star this repository if you found it helpful!

📧 Questions? Open an issue or reach out!

🔗 [Live Demo](#) | [Report Bug](#) | [Request Feature](#)
