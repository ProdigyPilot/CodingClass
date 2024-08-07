document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.getElementById('profileLink');
    const sideMenu = document.getElementById('sideMenu');
    const scheduleButton = document.getElementById('scheduleButton');
    const scheduleDropdown = document.getElementById('scheduleDropdown');
    const pointsButton = document.getElementById('pointsButton');
    const pointsDropdown = document.getElementById('pointsDropdown');
    const logoutButton = document.getElementById('logoutButton');
    const sideLogoutButton = document.getElementById('sideLogoutButton');
    const userNameElement = document.getElementById('userName');
    const sideUsernameElement = document.getElementById('sideUsernameContent');
    const scheduleList = document.getElementById('scheduleList');
    const scheduleReminder = document.getElementById('scheduleReminder');
    const adminPanel = document.getElementById('adminPanel');
    const userSelect = document.getElementById('userSelect');
    const pointsInput = document.getElementById('pointsInput');
    const addPointsButton = document.getElementById('addPointsButton');
    const subtractPointsButton = document.getElementById('subtractPointsButton');
    const adminMessage = document.getElementById('adminMessage');

    // Retrieve username from localStorage
    const username = localStorage.getItem('username');
    if (username) {
        userNameElement.textContent = username;
        sideUsernameElement.textContent = username;

        // Check if user is an admin
        if (username === 'ProdigyPilot') {
            adminPanel.style.display = 'block';
        }
    } else {
        // Redirect to login if no username is found
        window.location.href = 'login.html';
    }

    // Populate user select dropdown for admin
    const users = ['FarhanCodingPublic', 'TahmmedCodingAcc', 'ShabibCodingAcc']; // List of users
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user;
        option.textContent = user;
        userSelect.appendChild(option);
    });

    // Function to toggle side menu visibility
    profileLink.addEventListener('click', function(event) {
        event.preventDefault();
        sideMenu.classList.toggle('open');
    });

    // Function to toggle points dropdown visibility
    pointsButton.addEventListener('click', function(event) {
        event.preventDefault();
        pointsDropdown.classList.toggle('show');
    });

    // Function to toggle schedule dropdown visibility
    scheduleButton.addEventListener('click', function(event) {
        event.preventDefault();
        scheduleDropdown.classList.toggle('show');
    });

    // Log out button actions
    const handleLogout = () => {
        localStorage.removeItem('username'); // Remove the username from localStorage
        window.location.href = 'login.html'; // Redirect to login page
    };

    logoutButton.addEventListener('click', handleLogout);
    sideLogoutButton.addEventListener('click', handleLogout);

    // Example schedules for different users
    const schedules = {
        'FarhanCodingPublic': [
            { day: 'Monday', time: '3:00 PM', event: 'Coding class', link: 'https://discord.gg/JcuBBP5aha' },
            { day: 'Friday', time: '4:00 PM', event: 'Coding class', link: 'https://discord.gg/JcuBBP5aha' }
        ],
        'TahmmedCodingAcc': [
            { day: 'Monday', time: '3:00 PM', event: 'Coding class', link: 'https://discord.gg/JcuBBP5aha' },
            { day: 'Friday', time: '4:00 PM', event: 'Coding class', link: 'https://discord.gg/JcuBBP5aha' }
        ],
        'ShabibCodingAcc': [
            { day: 'Monday', time: '3:00 PM', event: 'Coding class', link: 'https://discord.gg/JcuBBP5aha' },
            { day: 'Friday', time: '4:00 PM', event: 'Coding class', link: 'https://discord.gg/JcuBBP5aha' }
        ]
    };

    // Add schedule items to the list for the current user
    const userSchedule = schedules[username] || [];
    userSchedule.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.day} - ${item.time}: ${item.event} 
            <a href="${item.link}" class="schedule-link" target="_blank" style="display: none;">Join</a>`;
        scheduleList.appendChild(li);
    });

    // Example points display
    const points = 0; // You can replace this with dynamic points retrieval
    document.getElementById('userPoints').textContent = points;
    document.getElementById('pointsValue').textContent = points;

    // Update date and time
    function updateDateTime() {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        document.getElementById('currentTime').textContent = time;
        
        // Check today's schedule
        const today = now.toLocaleDateString('en-US', { weekday: 'long' });
        const todaySchedule = userSchedule.filter(item => item.day === today);

        if (todaySchedule.length > 0) {
            scheduleReminder.textContent = `You have ${todaySchedule.length} event(s) today.`;
            todaySchedule.forEach(item => {
                // Check if current time matches any schedule item
                const scheduleItem = [...scheduleList.querySelectorAll('li')].find(li => li.innerHTML.includes(item.time));
                if (scheduleItem) {
                    const joinButton = scheduleItem.querySelector('.schedule-link');
                    if (joinButton) {
                        joinButton.style.display = time === item.time ? 'inline' : 'none'; // Show the link if time matches
                    }
                }
            });
        } else {
            scheduleReminder.textContent = 'You don\'t have any events today.';
        }
    }

    // Update time every second
    setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial call

    // Admin panel functionality
    addPointsButton.addEventListener('click', function() {
        const selectedUser = userSelect.value;
        const pointsToAdd = parseInt(pointsInput.value, 10);

        if (selectedUser && !isNaN(pointsToAdd)) {
            // Handle adding points to the selected user
            adminMessage.textContent = `Added ${pointsToAdd} points to ${selectedUser}.`;
        } else {
            adminMessage.textContent = 'Please select a user and enter valid points.';
        }
    });

    subtractPointsButton.addEventListener('click', function() {
        const selectedUser = userSelect.value;
        const pointsToSubtract = parseInt(pointsInput.value, 10);

        if (selectedUser && !isNaN(pointsToSubtract)) {
            // Handle subtracting points from the selected user
            adminMessage.textContent = `Subtracted ${pointsToSubtract} points from ${selectedUser}.`;
        } else {
            adminMessage.textContent = 'Please select a user and enter valid points.';
        }
    });
});
