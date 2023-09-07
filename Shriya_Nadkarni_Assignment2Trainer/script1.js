var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');

btnLogin.onclick = function () {
    idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' + username.value + '</h1>' + '<h3>Click here to go to home page</h3>' + '<input type="button"  id="myButton" value="Home">';

    // Add the event listener here, after the button is created
    document.getElementById("myButton").addEventListener("click", function () {
        // Redirect to another HTML page
        window.location.href = "home.html";
    });
}
