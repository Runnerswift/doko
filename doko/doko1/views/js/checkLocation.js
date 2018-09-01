onload = (function() {
   
let home = document.getElementById("homeIcon");
  home.onclick = function() {
  window.location.replace("/checkLocation");
  };
  
var newIcon = document.getElementById("newIcon");

  //MODAL POP-UP FOR NEW REMINDER
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
      

var reminders = document.getElementById("remindersIcon")
   reminders.onclick = function() {
     window.location.replace("/myReminders");
   };

var logout = document.getElementById("settingsIcon")
   logout.onclick = function() {
     window.location.replace("/");
     };

//MODAL FOR SEARCHING DOKO

var modal2 = document.querySelector(".modal2");
var trigger2 = document.querySelector(".trigger2");
var closeButton2 = document.querySelector(".close-button2");
  
  function toggleModal2() {
    modal2.classList.toggle("show-modal2");
  };
  
  function windowOnClick(event) {
    if (event.target === modal2) {
       toggleModal2();
    }
  };

  clickDoko.addEventListener("click", toggleModal2);
  closeButton.addEventListener("click", toggleModal2);
  window.addEventListener("click", windowOnClick);

let about = document.getElementById("aboutIcon");
    about.onclick = function() {
    window.location.replace("/about");
    };  
});