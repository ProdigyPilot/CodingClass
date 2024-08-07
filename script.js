document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (for demonstration purposes)
    const VALID_USERNAME = 'yourUsername';
    const VALID_PASSWORD = 'yourPassword';

    const messageElement = document.getElementById('message');

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
        // Redirect or show the next page (example)
        window.location.href = 'points.html'; // Replace with your actual page
    } else {
        messageElement.textContent = 'Invalid username or password';
        messageElement.style.color = 'red';
    }
});
