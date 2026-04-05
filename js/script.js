// ===================================
// Application State Management
// ===================================
const appState = {
    currentUnit: 'metric',
    bmiHistory: [],
    currentBMI: null,
    theme: 'light'
};

// ===================================
// DOM Elements
// ===================================
const elements = {
    // Form elements
    bmiForm: document.getElementById('bmiForm'),
    heightInput: document.getElementById('height'),
    weightInput: document.getElementById('weight'),
    heightUnit: document.getElementById('heightUnit'),
    weightUnit: document.getElementById('weightUnit'),
    heightError: document.getElementById('heightError'),
    weightError: document.getElementById('weightError'),
    
    // Unit toggle
    unitButtons: document.querySelectorAll('.unit-btn'),
    
    // Buttons
    resetBtn: document.getElementById('resetBtn'),
    exportBtn: document.getElementById('exportBtn'),
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),
    themeToggle: document.getElementById('themeToggle'),
    
    // Result section
    resultSection: document.getElementById('resultSection'),
    bmiValue: document.getElementById('bmiValue'),
    bmiCategory: document.getElementById('bmiCategory'),
    bmiMessage: document.getElementById('bmiMessage'),
    healthRecommendations: document.getElementById('healthRecommendations'),
    rangeIndicator: document.getElementById('rangeIndicator'),
    
    // Gauge
    gaugeFill: document.getElementById('gaugeFill'),
    gaugePointer: document.getElementById('gaugePointer'),
    
    // History
    historyList: document.getElementById('historyList')
};

// ===================================
// Initialize Application
// ===================================
function initializeApp() {
    loadTheme();
    loadHistory();
    setupEventListeners();
    updateUnitLabels();
}

// ===================================
// Event Listeners Setup
// ===================================
function setupEventListeners() {
    // Form submission
    elements.bmiForm.addEventListener('submit', handleFormSubmit);
    
    // Unit toggle
    elements.unitButtons.forEach(btn => {
        btn.addEventListener('click', handleUnitToggle);
    });
    
    // Reset button
    elements.resetBtn.addEventListener('click', resetCalculator);
    
    // Export button
    elements.exportBtn.addEventListener('click', exportResult);
    
    // Clear history
    elements.clearHistoryBtn.addEventListener('click', clearHistory);
    
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Input validation on change
    elements.heightInput.addEventListener('input', () => clearError('height'));
    elements.weightInput.addEventListener('input', () => clearError('weight'));
}

// ===================================
// Form Submission Handler
// ===================================
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearAllErrors();
    
    // Get input values
    const height = parseFloat(elements.heightInput.value);
    const weight = parseFloat(elements.weightInput.value);
    
    // Validate inputs
    if (!validateInputs(height, weight)) {
        return;
    }
    
    // Calculate BMI
    const bmi = calculateBMI(height, weight);
    
    // Store current BMI
    appState.currentBMI = {
        value: bmi,
        height: height,
        weight: weight,
        unit: appState.currentUnit,
        date: new Date().toISOString()
    };
    
    // Determine category
    const category = determineBMICategory(bmi);
    
    // Render result
    renderBMIResult(bmi, category);
    
    // Update gauge
    renderBMIGauge(bmi);
    
    // Update range indicator
    updateRangeIndicator(bmi);
    
    // Add to history
    addToHistory(bmi, category, height, weight);
    
    // Show result section
    elements.resultSection.classList.add('show');
    
    // Scroll to result
    elements.resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===================================
// Input Validation
// ===================================
function validateInputs(height, weight) {
    let isValid = true;
    
    // Validate height
    if (!height || isNaN(height)) {
        showError('height', 'Please enter a valid height');
        isValid = false;
    } else if (height <= 0) {
        showError('height', 'Height must be greater than 0');
        isValid = false;
    } else if (appState.currentUnit === 'metric' && (height < 50 || height > 300)) {
        showError('height', 'Height must be between 50-300 cm');
        isValid = false;
    } else if (appState.currentUnit === 'imperial' && (height < 20 || height > 120)) {
        showError('height', 'Height must be between 20-120 inches');
        isValid = false;
    }
    
    // Validate weight
    if (!weight || isNaN(weight)) {
        showError('weight', 'Please enter a valid weight');
        isValid = false;
    } else if (weight <= 0) {
        showError('weight', 'Weight must be greater than 0');
        isValid = false;
    } else if (appState.currentUnit === 'metric' && (weight < 20 || weight > 500)) {
        showError('weight', 'Weight must be between 20-500 kg');
        isValid = false;
    } else if (appState.currentUnit === 'imperial' && (weight < 40 || weight > 1100)) {
        showError('weight', 'Weight must be between 40-1100 lbs');
        isValid = false;
    }
    
    return isValid;
}

function showError(field, message) {
    const errorElement = elements[`${field}Error`];
    const inputElement = elements[`${field}Input`];
    
    errorElement.textContent = message;
    inputElement.classList.add('error');
}

function clearError(field) {
    const errorElement = elements[`${field}Error`];
    const inputElement = elements[`${field}Input`];
    
    errorElement.textContent = '';
    inputElement.classList.remove('error');
}

function clearAllErrors() {
    clearError('height');
    clearError('weight');
}

// ===================================
// BMI Calculation
// ===================================
function calculateBMI(height, weight) {
    let bmi;
    
    if (appState.currentUnit === 'metric') {
        // BMI = weight (kg) / (height (m))^2
        const heightInMeters = height / 100;
        bmi = weight / (heightInMeters * heightInMeters);
    } else {
        // BMI = (weight (lbs) / (height (in))^2) * 703
        bmi = (weight / (height * height)) * 703;
    }
    
    return Math.round(bmi * 10) / 10;
}

// ===================================
// BMI Category Determination
// ===================================
function determineBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        return 'overweight';
    } else {
        return 'obese';
    }
}

// ===================================
// Render BMI Result
// ===================================
function renderBMIResult(bmi, category) {
    // Update BMI value
    elements.bmiValue.textContent = bmi.toFixed(1);
    
    // Update category badge
    const categoryText = {
        underweight: 'Underweight',
        normal: 'Normal Weight',
        overweight: 'Overweight',
        obese: 'Obese'
    };
    
    elements.bmiCategory.innerHTML = `
        <span class="category-badge ${category}">${categoryText[category]}</span>
    `;
    
    // Update message
    const messages = {
        underweight: 'You are below the healthy weight range. Consider consulting with a healthcare provider.',
        normal: 'Great! You are within the healthy weight range. Keep up the good work!',
        overweight: 'You are above the healthy weight range. Consider a balanced diet and regular exercise.',
        obese: 'You are significantly above the healthy weight range. Please consult with a healthcare provider.'
    };
    
    elements.bmiMessage.textContent = messages[category];
    
    // Render health recommendations
    renderHealthRecommendations(category);
}

// ===================================
// Health Recommendations
// ===================================
function renderHealthRecommendations(category) {
    const recommendations = {
        underweight: [
            'Increase calorie intake with nutrient-rich foods',
            'Include protein in every meal',
            'Eat more frequently throughout the day',
            'Consider strength training exercises',
            'Consult with a nutritionist'
        ],
        normal: [
            'Maintain a balanced diet',
            'Stay physically active (150 min/week)',
            'Get adequate sleep (7-9 hours)',
            'Stay hydrated',
            'Regular health check-ups'
        ],
        overweight: [
            'Create a calorie deficit through diet',
            'Increase physical activity',
            'Focus on whole foods',
            'Limit processed foods and sugars',
            'Consider consulting a healthcare provider'
        ],
        obese: [
            'Consult with a healthcare provider',
            'Create a sustainable weight loss plan',
            'Increase daily physical activity',
            'Focus on portion control',
            'Consider professional support'
        ]
    };
    
    const recs = recommendations[category];
    const html = `
        <h3>Health Recommendations</h3>
        <ul>
            ${recs.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    `;
    
    elements.healthRecommendations.innerHTML = html;
}

// ===================================
// Render BMI Gauge
// ===================================
function renderBMIGauge(bmi) {
    // Calculate gauge position (0-100%)
    let percentage;
    
    if (bmi < 18.5) {
        percentage = (bmi / 18.5) * 25;
    } else if (bmi < 25) {
        percentage = 25 + ((bmi - 18.5) / (25 - 18.5)) * 25;
    } else if (bmi < 30) {
        percentage = 50 + ((bmi - 25) / (30 - 25)) * 25;
    } else {
        percentage = 75 + Math.min(((bmi - 30) / 20) * 25, 25);
    }
    
    // Update gauge fill
    const dashOffset = 251.2 - (251.2 * (percentage / 100));
    elements.gaugeFill.style.strokeDashoffset = dashOffset;
    
    // Update gauge color based on category
    const category = determineBMICategory(bmi);
    const colors = {
        underweight: '#4299e1',
        normal: '#48bb78',
        overweight: '#ed8936',
        obese: '#f56565'
    };
    elements.gaugeFill.style.stroke = colors[category];
    elements.gaugePointer.style.fill = colors[category];
    
    // Calculate pointer position
    const angle = -90 + (percentage / 100) * 180;
    const radians = (angle * Math.PI) / 180;
    const x = 100 + 80 * Math.cos(radians);
    const y = 100 + 80 * Math.sin(radians);
    
    elements.gaugePointer.setAttribute('cx', x);
    elements.gaugePointer.setAttribute('cy', y);
}

// ===================================
// Update Range Indicator
// ===================================
function updateRangeIndicator(bmi) {
    const category = determineBMICategory(bmi);
    const segments = document.querySelectorAll('.range-segment');
    
    // Remove active class from all segments
    segments.forEach(seg => seg.classList.remove('active'));
    
    // Add active class to current category
    const activeSegment = document.querySelector(`.range-segment.${category}`);
    if (activeSegment) {
        activeSegment.classList.add('active');
    }
    
    // Position indicator
    const categoryIndex = {
        underweight: 0,
        normal: 1,
        overweight: 2,
        obese: 3
    };
    
    const index = categoryIndex[category];
    const segmentWidth = 100 / 4;
    const left = (index * segmentWidth) + (segmentWidth / 2);
    
    elements.rangeIndicator.style.left = `calc(${left}% - 10px)`;
    elements.rangeIndicator.classList.add('show');
}

// ===================================
// Unit Toggle Handler
// ===================================
function handleUnitToggle(e) {
    const unit = e.target.dataset.unit;
    
    if (unit === appState.currentUnit) return;
    
    // Update state
    appState.currentUnit = unit;
    
    // Update UI
    elements.unitButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.unit === unit);
    });
    
    // Update labels
    updateUnitLabels();
    
    // Clear inputs and result
    resetCalculator();
}

function updateUnitLabels() {
    if (appState.currentUnit === 'metric') {
        elements.heightUnit.textContent = '(cm)';
        elements.weightUnit.textContent = '(kg)';
        elements.heightInput.placeholder = 'e.g., 170';
        elements.weightInput.placeholder = 'e.g., 70';
    } else {
        elements.heightUnit.textContent = '(inches)';
        elements.weightUnit.textContent = '(lbs)';
        elements.heightInput.placeholder = 'e.g., 67';
        elements.weightInput.placeholder = 'e.g., 154';
    }
}

// ===================================
// Reset Calculator
// ===================================
function resetCalculator() {
    // Clear form
    elements.bmiForm.reset();
    
    // Clear errors
    clearAllErrors();
    
    // Hide result
    elements.resultSection.classList.remove('show');
    
    // Reset state
    appState.currentBMI = null;
}

// ===================================
// History Management
// ===================================
function addToHistory(bmi, category, height, weight) {
    const historyItem = {
        bmi: bmi,
        category: category,
        height: height,
        weight: weight,
        unit: appState.currentUnit,
        date: new Date().toISOString()
    };
    
    // Add to beginning of array
    appState.bmiHistory.unshift(historyItem);
    
    // Keep only last 10 items
    if (appState.bmiHistory.length > 10) {
        appState.bmiHistory = appState.bmiHistory.slice(0, 10);
    }
    
    // Save to localStorage
    saveToLocalStorage();
    
    // Update UI
    renderHistory();
}

function renderHistory() {
    if (appState.bmiHistory.length === 0) {
        elements.historyList.innerHTML = '<p class="history-empty">No calculations yet</p>';
        return;
    }
    
    const html = appState.bmiHistory.map(item => {
        const date = new Date(item.date);
        const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const categoryText = {
            underweight: 'Underweight',
            normal: 'Normal',
            overweight: 'Overweight',
            obese: 'Obese'
        };
        
        const unitLabels = item.unit === 'metric' 
            ? { height: 'cm', weight: 'kg' }
            : { height: 'in', weight: 'lbs' };
        
        return `
            <div class="history-item">
                <div class="history-bmi">${item.bmi.toFixed(1)}</div>
                <div class="history-details">
                    <div class="history-category ${item.category}">
                        ${categoryText[item.category]}
                    </div>
                    <div class="history-measurements">
                        ${item.height} ${unitLabels.height} • ${item.weight} ${unitLabels.weight}
                    </div>
                </div>
                <div class="history-date">${dateStr}</div>
            </div>
        `;
    }).join('');
    
    elements.historyList.innerHTML = html;
}

function clearHistory() {
    if (appState.bmiHistory.length === 0) return;
    
    if (confirm('Are you sure you want to clear all history?')) {
        appState.bmiHistory = [];
        saveToLocalStorage();
        renderHistory();
    }
}

// ===================================
// LocalStorage Functions
// ===================================
function saveToLocalStorage() {
    try {
        localStorage.setItem('bmiHistory', JSON.stringify(appState.bmiHistory));
        localStorage.setItem('bmiTheme', appState.theme);
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function loadHistory() {
    try {
        const saved = localStorage.getItem('bmiHistory');
        if (saved) {
            appState.bmiHistory = JSON.parse(saved);
            renderHistory();
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
    }
}

// ===================================
// Theme Management
// ===================================
function toggleTheme() {
    appState.theme = appState.theme === 'light' ? 'dark' : 'light';
    applyTheme();
    saveToLocalStorage();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', appState.theme);
    const icon = elements.themeToggle.querySelector('.theme-icon');
    icon.textContent = appState.theme === 'dark' ? '☀️' : '🌙';
}

function loadTheme() {
    try {
        const saved = localStorage.getItem('bmiTheme');
        if (saved) {
            appState.theme = saved;
            applyTheme();
        }
    } catch (error) {
        console.error('Error loading theme:', error);
    }
}

// ===================================
// Export Result
// ===================================
function exportResult() {
    if (!appState.currentBMI) return;
    
    const bmi = appState.currentBMI.value;
    const category = determineBMICategory(bmi);
    const date = new Date().toLocaleDateString();
    
    const categoryText = {
        underweight: 'Underweight',
        normal: 'Normal Weight',
        overweight: 'Overweight',
        obese: 'Obese'
    };
    
    const unitLabels = appState.currentUnit === 'metric'
        ? { height: 'cm', weight: 'kg' }
        : { height: 'in', weight: 'lbs' };
    
    const text = `
BMI CALCULATION RESULT
=====================
Date: ${date}

Your BMI: ${bmi.toFixed(1)}
Category: ${categoryText[category]}

Measurements:
- Height: ${appState.currentBMI.height} ${unitLabels.height}
- Weight: ${appState.currentBMI.weight} ${unitLabels.weight}

BMI Categories:
- Underweight: < 18.5
- Normal Weight: 18.5 - 24.9
- Overweight: 25 - 29.9
- Obese: ≥ 30

Generated by BMI Calculator
    `.trim();
    
    // Create blob and download
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bmi-result-${date}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===================================
// Initialize App on Load
// ===================================
document.addEventListener('DOMContentLoaded', initializeApp);
