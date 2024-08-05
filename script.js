document.addEventListener('DOMContentLoaded', (event) => {
    // Handle login form submission
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission behavior

            // Get the values from the form inputs
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            // Store the values in local storage
            localStorage.setItem('loginEmail', email);
            localStorage.setItem('loginPassword', password);

            // Optional: Display a message or redirect the user
            alert('Login details saved!');
            // window.location.href = 'your-next-page.html';
        });

        // Optional: Populate the form with stored values (if any)
        const storedLoginEmail = localStorage.getItem('loginEmail');
        const storedLoginPassword = localStorage.getItem('loginPassword');

        if (storedLoginEmail) {
            document.querySelector('input[name="email"]').value = storedLoginEmail;
        }

        if (storedLoginPassword) {
            document.querySelector('input[name="password"]').value = storedLoginPassword;
        }
    }

    // Handle signup form submission
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission behavior

            // Get the values from the form inputs
            const username = signupForm.querySelector('input[name="email"]').value; // Assuming email field is used for username
            const password = signupForm.querySelector('input[name="password"]').value;
            const confirmPassword = signupForm.querySelector('input[name="Confirm password"]').value;
            const emailAddress = signupForm.querySelector('input[name="email address"]').value;

            // Store the values in local storage
            localStorage.setItem('signupUsername', username);
            localStorage.setItem('signupPassword', password);
            localStorage.setItem('signupConfirmPassword', confirmPassword);
            localStorage.setItem('signupEmailAddress', emailAddress);

            // Optional: Display a message or redirect the user
            alert('Signup details saved!');
            // window.location.href = 'your-next-page.html';
        });

        // Optional: Populate the form with stored values (if any)
        const storedSignupUsername = localStorage.getItem('signupUsername');
        const storedSignupPassword = localStorage.getItem('signupPassword');
        const storedSignupConfirmPassword = localStorage.getItem('signupConfirmPassword');
        const storedSignupEmailAddress = localStorage.getItem('signupEmailAddress');

        if (storedSignupUsername) {
            signupForm.querySelector('input[name="email"]').value = storedSignupUsername;
        }

        if (storedSignupPassword) {
            signupForm.querySelector('input[name="password"]').value = storedSignupPassword;
        }

        if (storedSignupConfirmPassword) {
            signupForm.querySelector('input[name="Confirm password"]').value = storedSignupConfirmPassword;
        }

        if (storedSignupEmailAddress) {
            signupForm.querySelector('input[name="email address"]').value = storedSignupEmailAddress;
        }
    }
});
