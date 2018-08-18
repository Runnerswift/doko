onload = (function() {
  
  let home = document.getElementById("homeIcon");
    home.onclick = function() {
      window.location.replace("/checkLocation");
    };
  
  var newIcon = document.getElementById("newIcon");
    newIcon.onclick = function() {
      newReminderInput = bootbox.prompt(location, reminder);
    };

  var reminders = document.getElementById("remindersIcon")
     reminders.onclick = function() {
       window.location.replace("/myReminders");
     };

  var logout = document.getElementById("settingsIcon")
     logout.onclick = function() {
       window.location.replace("/");
     };

  button = this.document.getElementById('clickDoko');
     button.onclick = function() {
       prompt(`Where are you?`);
     };

  /* button = document.getElementById('clickDoko');
      button.onclick = function() {
        import swal from 'sweetalert';
        let ask = swal("Where Are You?");
          }
  */
});