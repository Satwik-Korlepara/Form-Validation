# Registration Form with Validation

## Overview
This project features a responsive registration form with client-side validation. Built using HTML, CSS, and JavaScript, the form ensures that user inputs meet specific criteria before submission. It provides feedback to users with error messages when inputs are invalid.

![image](https://github.com/user-attachments/assets/d70f73ed-b265-4538-9066-75ab16dfd208)


## Features
- **Full Name**: Requires a minimum of 5 characters.
- **Email**: Validates that the input includes an '@' symbol.
- **Phone Number**: Validates that the input is a 10-digit number.
- **Password**: Requires a minimum length of 8 characters and checks for common passwords and matches with the full name.
- **Confirm Password**: Ensures that the password and confirm password fields match.

## Technologies Used
- **HTML**: For structuring the form and webpage.
- **CSS**: For styling and visual enhancements.
- **JavaScript**: For form validation and error handling.

## How to Use
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/registration-form-validation.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd registration-form-validation
    ```

3. **Open `index.html` in a Web Browser**:
    You can open the `index.html` file directly in your web browser to view and interact with the form.

## Code Explanation
- **HTML (`index.html`)**: Contains the structure of the registration form including input fields for full name, email, phone number, password, and confirm password.
- **CSS (`styles.css`)**: Styles the form and ensures a modern and responsive design.
- **JavaScript (`script.js`)**: Handles form submission, validation logic, and displays error messages when necessary.

### JavaScript Validation Logic
- The script validates the form fields upon submission.
- Displays appropriate error messages if the input is invalid.
- Prevents form submission if there are validation errors.
