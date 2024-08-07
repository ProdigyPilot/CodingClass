document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate inputs
    if (username === '' || password === '') {
        document.getElementById('loginMessage').textContent = 'Both fields are required.';
        document.getElementById('loginMessage').style.color = 'red';
        return;
    }

    // Hardcoded credentials for demo purposes
    const VALID_USERNAME1 = 'FarhanCodingAcc';
    const VALID_PASSWORD1 = 'Q7!bT9@wP2kV#zR4xL8m';

    const VALID_USERNAME2 = 'ShabibCodingAcc';
    const VALID_PASSWORD2 = 'L7#sB2!xV9pQ&dR5mYf';

    const VALID_USERNAME3 = 'TahmmedCodingAcc';
    const VALID_PASSWORD3 = 'F4$hG6%rN1uW^vJ8zKp';

    const VALID_USERNAME4 = 'ProdigyPilot';
    const VALID_PASSWORD4 = 'taskin4958';

    const messageElement = document.getElementById('loginMessage');

    if (username === VALID_USERNAME1 && password === VALID_PASSWORD1) {
        // Store the username in localStorage
        localStorage.setItem('username', username);
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else if (username === VALID_USERNAME2 && password === VALID_PASSWORD2) {
        // Store the username in localStorage
        localStorage.setItem('username', username);
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
        window.location.href = 'dashboard.html';
        
    } else if (username === VALID_USERNAME3 && password === VALID_PASSWORD3) {
        // Store the username in localStorage
        localStorage.setItem('username', username);
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';

        window.location.href = 'dashboard.html';
    } else if (username === VALID_USERNAME4 && password === VALID_PASSWORD4) {
        // Store the username in localStorage
        localStorage.setItem('username', username);
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
        
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid username or password';
        messageElement.style.color = 'red';
    }
});

// Redirect to Discord server
document.getElementById('discordLoginButton').addEventListener('click', function() {
    // Replace with your Discord server invite link
    window.location.href = 'https://discord.gg/25aRYNBtR8';
});
