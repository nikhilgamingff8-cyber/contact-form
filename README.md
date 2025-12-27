# Contact Form (HTML + CSS + JavaScript)

A simple, responsive contact form that validates input and shows user-friendly success/error messages without reloading the page.

## Features
- Responsive layout (mobile-friendly)
- Prevents page reload on submit
- Validates empty fields
- Validates email format
- Shows error (red) and success (green) messages
- Clears the form after successful submission

## Tech Stack
- HTML
- CSS
- JavaScript (DOM + Events)

## How it works (logic summary)
1. User submits the form.
2. JavaScript stops the default submit behavior using `preventDefault()`.
3. Input values are read from the DOM.
4. Validation runs:
   - Empty fields → error message
   - Invalid email → error message
   - Valid data → success message
5. CSS classes (`error`, `success`) control message color.

## What I learned
- DOM selection (`getElementById`)
- Events (`addEventListener`)
- Preventing default browser behavior (`preventDefault`)
- Form validation in JavaScript
- UI feedback using CSS classes
- Basic Git workflow (commit/push)

## Run locally
1. Clone the repo
2. Open `index.html` in your browser

---

**Author:** Nikhil Raj  
