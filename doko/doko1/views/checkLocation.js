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
      });

   //MAP
     function myMap() {
       var mapCanvas = document.getElementById("map");
       var mapOptions = {
         center: new google.maps.LatLng(51.5, -0.2),
         zoom: 10
       };
       var map = new google.maps.Map(mapCanvas, mapOptions);
     } 

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