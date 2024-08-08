// Function to handle Signup Form Submission
function handleSignup() {
    const signupForm = document.querySelector('.signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Capture user inputs
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;
            const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
            const emailAddress = document.querySelector('input[name="emailAddress"]').value;

            // Store data in variables (for further processing or sending to a database)
            console.log('Signup Data:', { email, password, confirmPassword, emailAddress });

            // Here you can send data to the server or database
        });
    }
}

// Function to handle Login Form Submission
function handleLogin() {
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Capture user inputs
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            // Store data in variables (for further processing or sending to a database)
            console.log('Login Data:', { email, password });

            // Here you can send data to the server or database
        });
    }
}

// Function to handle Two Sum Comment Submission
function handleTwoSumComment() {
    const commentForm = document.querySelector('.solbox form');

    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Capture user inputs
            const comment = document.querySelector('#inputcode').value;

            // Store data in variable (for further processing or sending to a database)
            console.log('Two Sum Comment:', comment);

            // Here you can send data to the server or database
        });
    }
}

// Initialize functions
document.addEventListener('DOMContentLoaded', function() {
    handleSignup();
    handleLogin();
    handleTwoSumComment();
});
