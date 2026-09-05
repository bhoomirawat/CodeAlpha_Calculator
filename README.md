# Simple Calculator

A basic web-based calculator built using **HTML, CSS, and JavaScript**. It supports standard arithmetic operations with a clean, responsive UI.

## 🖥️ Demo Preview

The calculator has a simple grid-based button layout with a display screen on top, styled with a soft purple theme.

## 📂 Project Structure

```
├── index.html   # Markup structure of the calculator
├── style.css    # Styling for layout, buttons, and display
└── code.js      # Core logic for calculations
```

## ✨ Features

- Basic arithmetic operations: addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`)
- Clear (`C`) button to reset the display
- Responsive 4x4 button grid layout
- Error handling for invalid expressions (shows `Error`)
- Clean, modern UI with hover effects on buttons

## 🛠️ Tech Stack

- **HTML5** – Structure of the calculator
- **CSS3** – Styling (Flexbox, CSS Grid)
- **JavaScript (Vanilla)** – Logic and DOM manipulation

## 🚀 How to Run

1. Download/clone all three files (`index.html`, `style.css`, `code.js`) into the same folder.
2. Open `index.html` in any web browser.
3. Start calculating!

## ⚙️ How It Works

- Clicking a number/operator button calls `appendValue()`, which appends the value to the display.
- Clicking `=` calls `calculate()`, which evaluates the expression using JavaScript's `eval()` and shows the result.
- Clicking `C` calls `clearDisplay()`, which resets the display field.

## 📌 Known Limitations

- Uses `eval()` for calculations, which is not recommended for production-grade apps (can be replaced with a safer expression parser).
- No keyboard input support currently.
- No decimal point (`.`) button included yet.

## 🔮 Future Improvements

- Add keyboard support for input
- Add decimal point and percentage (`%`) functionality
- Replace `eval()` with a safer custom expression evaluator
- Add memory functions (M+, M-, MR, MC)

## 👩‍💻 Author

Made by **Bhoomi Rawat**
