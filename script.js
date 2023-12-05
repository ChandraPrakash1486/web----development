// Function to display the greeting message and hide after 5 seconds
window.onload = function() {
    var greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.style.display = "block";
  
    setTimeout(function() {
      greetingMessage.style.display = "none";
    }, 5000); // Hide after 5 seconds (5000 milliseconds)
  };
  