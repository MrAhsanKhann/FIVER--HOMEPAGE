document.addEventListener("DOMContentLoaded", function() {
    // Get the signup button and the signup modal
    var signupBtn = document.getElementById("signupBtn");
    var signupModal = document.getElementById("signupModal");
  
    // Get the close button of the signup modal
    var signupClose = document.querySelector("#signupModal .close");
  
    // When the user clicks the signup button, open the signup modal
    signupBtn.onclick = function() {
      signupModal.style.display = "block";
    }
  
    // When the user clicks on the close button, close the signup modal
    signupClose.onclick = function() {
      signupModal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == signupModal) {
        signupModal.style.display = "none";
      }
    }
  });
  // ....................................................... 

  let popup = document.getElementById("registrationForm");
  let cross = document.getElementById("cross");

  cross.addEventListener("click", function () {

    closepopup()

  })
  function openpopup() {
    popup.classList = "popup"
    console.log('openpopup');
    // console.log(popup.classList);
  }
  function closepopup() {
    popup.classList = "reg-form"
    console.log('popup');
  }
 
