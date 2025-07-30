# 🔍 JavaScript Testing Practice – The Odin Project

This project is part of **The Odin Project's JavaScript curriculum**, focusing on learning how to write and run tests with [Jest](https://jestjs.io/). It includes utility functions and their respective test suites to reinforce test-driven development and solid JavaScript fundamentals.

## 📦 Project Structure

```bash
odin-testing-practice/
├─ package.json             # Metadata & test script
├─ README.md                # This document
├─ src/
│  └─ main.js               # Core functions implementations
└─ test/
   ├─ arrayAnalyzer.test.js # Array analyzer function tests
   ├─ caesar.test.js        # Caesar function tests
   ├─ calculator.test.js    # Calculator object tests
   └─ string.test.js        # String related functions tests
```

## 🧪 Features & Functions

This repo includes and tests the following:

- **`capitalize(string)`**: Capitalizes the first letter of a string.
- **`reverseString(string)`**: Reverses the input string.
- **`calculator` object**:
  - `sum(a, b)`
  - `sub(a, b)`
  - `divide(a, b)`
  - `multiply(a, b)`
- **`caesarCipher(string, key)`**: Encodes a string using Caesar cipher with proper case preservation, punctuation handling, and character wrap-around.
- **`analyzeArray(array)`**: Analyzes a numeric array and returns an object with average, min, max, and length.

## ⚙️ Setup & Usage

1. **Install dependencies**:
   ```bash
   npm install

2. Run tests

   ```bash
   npm test
    ```
