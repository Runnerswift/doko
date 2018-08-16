onload = (function() {
  
  var home = document.getElementById("homeIcon");
    home.onclick = function() {
      window.location.replace("/checkLocation");
    };

  var reminders = document.getElementById("remindersIcon")
    reminders.onclick = function() {
      window.location.replace("/myReminders");
    };
  
  var newIcon = document.getElementById("newIcon");
    newIcon.onclick = function() {
      newReminderLocation = prompt(`Location:`);
      newReminderInput = prompt(`New Reminder:`);
    };

  var logout = document.getElementById("settingsIcon")
    logout.onclick = function() {
      window.location.replace("/");
    };

  var editButton = document.getElementById('editIcon');
      editButton.onclick = function() {
        alert("Edit Function Disabled" , "error");
      };
  
  var deleteButton = document.getElementById('deleteIcon');
      deleteButton.onclick = function() {
        alert("Cannot Delete");
      };
});