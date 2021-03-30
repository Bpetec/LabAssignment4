var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');
        var username = usernameInput.innerHTML;
        var password = passwordInput.innerHTML;
        username = usernameInput.value;
        password = passwordInput.value;
        if (username === 'bpete' && password === 'abc123') {
            this.goToHome();
        }
        else {
            this.displayError();
        }
    };
    Login.prototype.displayError = function () {
        var errorBox = document.getElementById('error-box');
        errorBox.innerHTML = "User not found!";
        errorBox.innerHTML;
        ;
        errorBox.style = "display: block;";
        var interval = setInterval(function () {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    };
    Login.prototype.goToHome = function () {
        window.location.href = 'index.html';
    };
    return Login;
}());
var login = new Login();
