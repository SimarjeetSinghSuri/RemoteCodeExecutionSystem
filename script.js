// Function to handle Signup Form Submission
function handleSignup() {
    const signupForm = document.querySelector('.signup-form');
    const apiurl = 'Your api';

    if (signupForm) {d
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Capture user inputs
            const userName = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const confirmPassword = document.querySelector('#confirmPassword').value;
            const emailAddress = document.querySelector('#emailAddress').value;

            // Store data in variables (for further processing or sending to a database)
            console.log('Signup Data:', { userName, password, confirmPassword, emailAddress });

            // Make sure to reference the correct data when sending to server
            fetch(apiurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'UserEmail': emailAddress,
                    'Password': password,
                    'UserName': userName
                })
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
}

// Function to handle Login Form Submission
function handleLogin() {
    const loginForm = document.querySelector('.login-form');
    const apiurl='';//'Your api';
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Capture user inputs
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            // Store data in variables (for further processing or sending to a database)
            console.log('Login Data:', { email });

            fetch(apiurl, {
                method: 'POST',  // Specify the HTTP method
                headers: {
                    'Content-Type': 'application/json' ,
                },
                body: JSON.stringify({'UserEmail': email,
                    'Password' : password})  // Convert JavaScript object to JSON
            })
            .then(response => response.json())  // Parse the response as JSON
            .then(result => {
                console.log('Success:', result);  // Handle the result
            })
            .catch(error => {
                console.error('Error:', error);  // Handle errors
            });

            // Here you can send data to the server or database
        });
    }
}

// Function to handle Two Sum Comment Submission
function handleTwoSumComment() {
    const commentForm = document.querySelector('.runyourcode');
    // const apiurl='Your api';

    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            console.log("hello")
            // Capture user inputs
            const code = document.querySelector('#inputcode').value;
            const lang = document.querySelector('#options').value;
            alert("a+b= 76");

            // Store data in variable (for further processing or sending to a database)
            console.log('Two Sum Comment:', code);
            console.log('Language selected:', lang);

            fetch(apiurl, {
                method: 'POST',  // Specify the HTTP method
                headers: {
                    'Content-Type': 'application/json' ,
                },
                body: JSON.stringify({'Code': code,
                    'Language' : lang })  // Convert JavaScript object to JSON
            })
            .then(response => response.json())  // Parse the response as JSON
            .then(result => {
                console.log('Success:', result);  // Handle the result
            })
            .catch(error => {
                console.error('Error:', error);  // Handle errors
            });
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
