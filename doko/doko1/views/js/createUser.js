onload = function() {

  var signUp = document.getElementById('signUp');
    signUp.onclick = function() {
      alert(`Sorry, we're not accepting new users at this time`);
    };

  var cancel = document.getElementById('cancel');
    cancel.onclick = function() {
      window.location.replace("/");
    }
    
  let about = document.getElementById("aboutIcon");
    about.onclick = function() {
      window.location.replace("/about");
    };
};