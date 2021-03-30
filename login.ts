class Login {
    constructor() {

    }

    login() {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        let username = usernameInput.innerHTML;
        let password = passwordInput.innerHTML;
        
        username = usernameInput.value;
        password = passwordInput.value;

        if(username === 'bpete' && password === 'abc123') {
            this.goToHome();
        } else {
            this.displayError();
        }
    }
    displayError() {
        const errorBox = document.getElementById('error-box');
        errorBox.innerHTML = "User not found!";
            errorBox.innerHTML
        );
        errorBox.style = "display: block;";
        const interval = setInterval(() => {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    }
    goToHome () {
        window.location.href = 'index.html'
    }
}

const login = new Login();