onload = (function() {
  
  var home = document.getElementById("homeIcon");
    home.onclick = function() {
      window.location.replace("/checkLocation");
    };

  var newIcon = document.getElementById("newIcon");
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
  
      function toggleModal() {
        modal.classList.toggle("show-modal");
      }
  
      function windowOnClick(event) {
        if (event.target === modal) {
          toggleModal();
        }
      }
  
      newIcon.addEventListener("click", toggleModal);
      closeButton.addEventListener("click", toggleModal);
      window.addEventListener("click", windowOnClick);
      });
    
  var reminders = document.getElementById("remindersIcon")
    reminders.onclick = function() {
      window.location.replace("/myReminders");
    };
  
  var logout = document.getElementById("settingsIcon")
    logout.onclick = function() {
      window.location.replace("/");
    };