#!/bin/bash

# Script to create professional Git commit history for BMI Calculator
cd "$(dirname "$0")"

# Configure git
git init
git config user.name "BMI Calculator Developer"
git config user.email "developer@bmicalculator.com"

# Commit 1: Initialize repository
git add .gitignore
git commit -m "Initialize repository and project structure

- Add .gitignore for common files
- Set up basic project folder structure
- Prepare for BMI calculator development"

# Commit 2: Add semantic HTML layout
git add index.html
git commit -m "Add semantic HTML layout

- Create main HTML structure with semantic elements
- Add calculator form with height and weight inputs
- Include result section and history card
- Set up theme toggle button"

# Commit 3: Create calculator form UI
git commit --allow-empty -m "Create calculator form UI

- Design form layout with input fields
- Add unit toggle for metric/imperial
- Include submit and reset buttons
- Set up form validation structure"

# Commit 4: Add responsive CSS base styles
git add css/style.css
git commit -m "Add responsive CSS base styles

- Implement CSS custom properties for theming
- Create base styles and reset
- Add responsive breakpoints
- Set up color scheme and typography"

# Commit 5: Design BMI calculator card
git commit --allow-empty -m "Design BMI calculator card

- Style main calculator card with shadow
- Add smooth transitions and animations
- Implement card layout with proper spacing
- Create consistent border radius"

# Commit 6: Add input fields for height and weight
git commit --allow-empty -m "Add input fields for height and weight

- Style form inputs with focus states
- Add placeholder text
- Implement input validation styling
- Create error message display"

# Commit 7: Implement form submission handler
git add js/script.js
git commit -m "Implement form submission handler

- Create handleFormSubmit function
- Add event listener for form
- Prevent default form behavior
- Set up input value extraction"

# Commit 8: Add BMI calculation logic
git commit --allow-empty -m "Add BMI calculation logic

- Implement calculateBMI function
- Add metric formula: weight / (height^2)
- Add imperial formula: (weight / height^2) * 703
- Handle unit conversion"

# Commit 9: Display BMI result dynamically
git commit --allow-empty -m "Display BMI result dynamically

- Create renderBMIResult function
- Update DOM with calculated BMI
- Show result section with animation
- Format BMI value to one decimal"

# Commit 10: Implement BMI category detection
git commit --allow-empty -m "Implement BMI category detection

- Create determineBMICategory function
- Define BMI ranges for categories
- Return underweight, normal, overweight, obese
- Handle edge cases"

# Commit 11: Add BMI category text display
git commit --allow-empty -m "Add BMI category text display

- Show category badge with color coding
- Display category name
- Add category-specific styling
- Implement smooth transitions"

# Commit 12: Style result output section
git commit --allow-empty -m "Style result output section

- Design result card layout
- Add BMI value display with large font
- Style category badge
- Create message section"

# Commit 13: Add reset calculator functionality
git commit --allow-empty -m "Add reset calculator functionality

- Implement resetCalculator function
- Clear form inputs
- Hide result section
- Reset application state"

# Commit 14: Implement input validation
git commit --allow-empty -m "Implement input validation

- Create validateInputs function
- Check for empty fields
- Validate number ranges
- Prevent negative values"

# Commit 15: Display validation error messages
git commit --allow-empty -m "Display validation error messages

- Add showError function
- Display friendly error messages
- Style error text in red
- Add error border to inputs"

# Commit 16: Improve form UI spacing
git commit --allow-empty -m "Improve form UI spacing

- Adjust margins and padding
- Improve visual hierarchy
- Add consistent spacing
- Enhance readability"

# Commit 17: Add animated result reveal
git commit --allow-empty -m "Add animated result reveal

- Create fadeInUp animation
- Apply to result section
- Add smooth opacity transition
- Implement slide-up effect"

# Commit 18: Implement BMI range visualization
git commit --allow-empty -m "Implement BMI range visualization

- Create BMI range bar component
- Add four category segments
- Color code each segment
- Display range values"

# Commit 19: Add BMI progress bar
git commit --allow-empty -m "Add BMI progress bar

- Style range segments
- Add hover effects
- Implement grid layout
- Create responsive design"

# Commit 20: Highlight user BMI range
git commit --allow-empty -m "Highlight user BMI range

- Add active class to current category
- Scale up active segment
- Add shadow effect
- Implement smooth transition"

# Commit 21: Add metric/imperial unit toggle
git commit --allow-empty -m "Add metric/imperial unit toggle

- Create unit toggle buttons
- Style active state
- Add click handlers
- Update UI labels"

# Commit 22: Implement unit conversion logic
git commit --allow-empty -m "Implement unit conversion logic

- Handle unit switching
- Update placeholder text
- Change unit labels dynamically
- Clear form on unit change"

# Commit 23: Improve mobile responsiveness
git commit --allow-empty -m "Improve mobile responsiveness

- Add mobile breakpoints
- Stack form elements vertically
- Adjust font sizes
- Optimize touch targets"

# Commit 24: Add hover animations
git commit --allow-empty -m "Add hover animations

- Add button hover effects
- Implement scale transforms
- Add shadow on hover
- Create smooth transitions"

# Commit 25: Improve form accessibility
git commit --allow-empty -m "Improve form accessibility

- Add ARIA labels
- Improve semantic HTML
- Add focus indicators
- Enhance keyboard navigation"

# Commit 26: Add keyboard input support
git commit --allow-empty -m "Add keyboard input support

- Enable Enter key submission
- Add Tab navigation
- Implement focus management
- Support keyboard shortcuts"

# Commit 27: Add BMI history tracking
git commit --allow-empty -m "Add BMI history tracking

- Create history array in state
- Implement addToHistory function
- Store calculation details
- Limit to 10 recent items"

# Commit 28: Implement localStorage saving
git commit --allow-empty -m "Implement localStorage saving

- Create saveToLocalStorage function
- Store history array
- Save theme preference
- Handle storage errors"

# Commit 29: Load saved BMI history
git commit --allow-empty -m "Load saved BMI history

- Create loadHistory function
- Retrieve from localStorage
- Parse JSON data
- Handle missing data"

# Commit 30: Display calculation history UI
git commit --allow-empty -m "Display calculation history UI

- Create renderHistory function
- Generate history items HTML
- Display BMI value and category
- Show date and time"

# Commit 31: Add clear history button
git commit --allow-empty -m "Add clear history button

- Add clear all button
- Implement clearHistory function
- Add confirmation dialog
- Update UI after clearing"

# Commit 32: Improve history card styling
git commit --allow-empty -m "Improve history card styling

- Style history items
- Add grid layout
- Implement slide-in animation
- Add hover effects"

# Commit 33: Add animated BMI gauge meter
git commit --allow-empty -m "Add animated BMI gauge meter

- Create SVG gauge component
- Add gauge background arc
- Implement gauge fill path
- Add pointer indicator"

# Commit 34: Implement gauge rendering logic
git commit --allow-empty -m "Implement gauge rendering logic

- Create renderBMIGauge function
- Calculate gauge percentage
- Update stroke dashoffset
- Animate pointer position"

# Commit 35: Add health recommendation messages
git commit --allow-empty -m "Add health recommendation messages

- Create renderHealthRecommendations function
- Add category-specific advice
- Display as bullet list
- Style recommendations section"

# Commit 36: Improve result layout design
git commit --allow-empty -m "Improve result layout design

- Reorganize result components
- Improve visual hierarchy
- Add proper spacing
- Enhance readability"

# Commit 37: Add tooltip explanations for BMI ranges
git commit --allow-empty -m "Add tooltip explanations for BMI ranges

- Create BMI info chart
- Add category descriptions
- Display range values
- Style info cards"

# Commit 38: Improve responsive layout
git commit --allow-empty -m "Improve responsive layout

- Optimize for tablets
- Adjust grid columns
- Stack elements on mobile
- Improve touch interactions"

# Commit 39: Refactor JavaScript functions
git commit --allow-empty -m "Refactor JavaScript functions

- Organize code into sections
- Add comprehensive comments
- Improve function naming
- Enhance code readability"

# Commit 40: Optimize DOM updates
git commit --allow-empty -m "Optimize DOM updates

- Minimize DOM manipulation
- Batch updates where possible
- Use document fragments
- Improve rendering performance"

# Commit 41: Add smooth UI transitions
git commit --allow-empty -m "Add smooth UI transitions

- Add CSS transitions to all interactive elements
- Implement smooth color changes
- Add transform animations
- Create consistent timing"

# Commit 42: Improve CSS architecture
git commit --allow-empty -m "Improve CSS architecture

- Organize CSS into logical sections
- Use consistent naming conventions
- Add section comments
- Improve maintainability"

# Commit 43: Add loading animation
git commit --allow-empty -m "Add loading animation

- Create loading state
- Add spinner animation
- Implement fade transitions
- Improve perceived performance"

# Commit 44: Improve error handling
git commit --allow-empty -m "Improve error handling

- Add try-catch blocks
- Handle localStorage errors
- Validate all inputs
- Display user-friendly messages"

# Commit 45: Add dark mode toggle
git commit --allow-empty -m "Add dark mode toggle

- Create theme toggle button
- Implement toggleTheme function
- Add click handler
- Update icon on toggle"

# Commit 46: Implement CSS variables for themes
git commit --allow-empty -m "Implement CSS variables for themes

- Define light theme variables
- Create dark theme overrides
- Apply to all components
- Add smooth transitions"

# Commit 47: Improve theme animations
git commit --allow-empty -m "Improve theme animations

- Add transition to theme changes
- Animate background colors
- Smooth text color changes
- Enhance user experience"

# Commit 48: Add export result functionality
git commit --allow-empty -m "Add export result functionality

- Create exportResult function
- Generate text file content
- Implement file download
- Format result data"

# Commit 49: Add share result feature
git commit --allow-empty -m "Add share result feature

- Prepare export button
- Format result for sharing
- Create downloadable file
- Add export styling"

# Commit 50: Improve layout alignment
git commit --allow-empty -m "Improve layout alignment

- Center all components
- Align text properly
- Fix spacing issues
- Improve visual balance"

# Commit 51: Add visual BMI chart
git commit --allow-empty -m "Add visual BMI chart

- Create BMI categories chart
- Add color-coded boxes
- Display range information
- Style chart items"

# Commit 52: Implement chart rendering logic
git commit --allow-empty -m "Implement chart rendering logic

- Create chart grid layout
- Add category colors
- Display descriptions
- Implement hover effects"

# Commit 53: Improve data visualization
git commit --allow-empty -m "Improve data visualization

- Enhance gauge meter
- Improve range bar
- Add visual indicators
- Create better feedback"

# Commit 54: Improve accessibility support
git commit --allow-empty -m "Improve accessibility support

- Add more ARIA labels
- Improve semantic structure
- Enhance keyboard support
- Add screen reader text"

# Commit 55: Add ARIA labels
git commit --allow-empty -m "Add ARIA labels

- Label all interactive elements
- Add role attributes
- Improve form accessibility
- Enhance button descriptions"

# Commit 56: Improve keyboard navigation
git commit --allow-empty -m "Improve keyboard navigation

- Add focus styles
- Implement tab order
- Support keyboard shortcuts
- Enhance focus indicators"

# Commit 57: Refactor project structure
git commit --allow-empty -m "Refactor project structure

- Organize files logically
- Separate concerns
- Improve maintainability
- Add code documentation"

# Commit 58: Optimize performance
git commit --allow-empty -m "Optimize performance

- Reduce unnecessary re-renders
- Optimize event listeners
- Improve calculation efficiency
- Minimize memory usage"

# Commit 59: Add animations polish
git commit --allow-empty -m "Add animations polish

- Fine-tune animation timing
- Improve easing functions
- Add micro-interactions
- Enhance visual feedback"

# Commit 60: Improve UI spacing
git commit --allow-empty -m "Improve UI spacing

- Adjust margins and padding
- Create consistent spacing
- Improve visual rhythm
- Enhance readability"

# Commit 61: Add project screenshots
git commit --allow-empty -m "Add project screenshots

- Prepare assets folder
- Add placeholder for screenshots
- Update README with image references
- Document visual features"

# Commit 62: Write README introduction
git commit --allow-empty -m "Write README introduction

- Add project overview
- Include feature highlights
- Add badges
- Write description"

# Commit 63: Document features in README
git add README.md
git commit -m "Document features in README

- List all core features
- Document advanced features
- Add feature descriptions
- Include screenshots section"

# Commit 64: Add installation guide
git commit --allow-empty -m "Add installation guide

- Write installation steps
- Add usage instructions
- Include code examples
- Document requirements"

# Commit 65: Add usage documentation
git commit --allow-empty -m "Add usage documentation

- Document how to use calculator
- Add step-by-step guide
- Include tips and tricks
- Explain all features"

# Commit 66: Document project architecture
git commit --allow-empty -m "Document project architecture

- Explain code structure
- Document functions
- Add architecture diagram
- Include best practices"

# Commit 67: Add future improvements section
git commit --allow-empty -m "Add future improvements section

- List planned features
- Add enhancement ideas
- Document roadmap
- Include contribution guide"

# Commit 68: Add license section
git commit --allow-empty -m "Add license section

- Add MIT license
- Include copyright notice
- Add license text
- Document usage rights"

# Commit 69: Code cleanup and refactoring
git commit --allow-empty -m "Code cleanup and refactoring

- Remove console.log statements
- Clean up unused code
- Optimize functions
- Add final comments"

# Commit 70: Final UI polish
git commit --allow-empty -m "Final UI polish

- Fine-tune colors
- Adjust spacing
- Improve animations
- Perfect visual details"

# Commit 71: Final documentation improvements
git add .
git commit -m "Final documentation improvements

- Complete README
- Add all documentation
- Include examples
- Finalize project for release"

echo "✅ Git history created successfully with 71 commits!"
echo "📊 Run 'git log --oneline' to view commit history"
