document.addEventListener('DOMContentLoaded', function() {
    
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateSignup()) {
                alert('Signup Successful!');
                signupForm.reset();
            }
        });
    }


    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateSignin()) {
                alert('Signin Successful!');
                signinForm.reset();
            }
        });
    }
});

function validateSignup() {
    let isValid = true;

    const username = document.getElementById('username');
    if (username.value.trim().length < 3) {
        setError(username, 'Username must be at least 3 characters');
        isValid = false;
    } else {
        setSuccess(username);
    }

    
    const email = document.getElementById('email');
    if (!isValidEmail(email.value)) {
        setError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    
    if (password.value.length < 6) {
        setError(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        setSuccess(password);
    }

    
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value !== password.value || confirmPassword.value === '') {
        setError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccess(confirmPassword);
    }

    return isValid;
}

function validateSignin() {
    let isValid = true;

    
    const email = document.getElementById('email');
    if (!isValidEmail(email.value)) {
        setError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    
    const password = document.getElementById('password');
    if (password.value === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else {
        setSuccess(password);
    }

    return isValid;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorDisplay = inputGroup.querySelector('.error-message');
    
    
    if (!errorDisplay) {
        const div = document.createElement('div');
        div.className = 'error-message';
        inputGroup.appendChild(div);
        div.innerText = message;
    } else {
        errorDisplay.innerText = message;
    }

    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorDisplay = inputGroup.querySelector('.error-message');
    if (errorDisplay) {
        errorDisplay.innerText = '';
    }
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
