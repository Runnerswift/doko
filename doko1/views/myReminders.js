onload = (function() {
  
  var home = document.getElementById("homeIcon");
    home.onclick = function() {
      window.location.replace("/checkLocation");
    };

  var newIcon = document.getElementById("newIcon");
    newIcon.onclick = function() {
      window.location.replace("/createReminder")
    };

  var reminders = document.getElementById("remindersIcon")
    reminders.onclick = function() {
      window.location.replace("/myReminders");
    };
  
  var logout = document.getElementById("settingsIcon")
    logout.onclick = function() {
      window.location.replace("/");
    };
});