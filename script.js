document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();

    let valid = true;

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (fullName.length < 5) {
        showError('fullNameError', 'Name must be at least 5 characters');
        valid = false;
    }

    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email');
        valid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        showError('phoneError', 'Enter a valid 10-digit phone number');
        valid = false;
    }

    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        showError('passwordError', 'Password is not strong enough');
        valid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        // Reset the form
        document.getElementById('registrationForm').reset();
        // Optionally reload the page
        // location.reload();
    }
});

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
}
