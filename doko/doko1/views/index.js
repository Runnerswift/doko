onload = function() {

  var loginEmail = document.getElementById('loginEmail');
  var loginPass = document.getElementById('loginPass');
  var login = document.getElementById("button");

  login.onclick = function() {
      window.location.replace("/checkLocation");
    }
};