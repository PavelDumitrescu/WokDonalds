/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menuFunction() {
  document.getElementById("myMenu").classList.toggle("show");
}

// Menu drop down ----------------------------------------

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menubtn')) {
    var dropdowns = document.getElementsByClassName("menucontent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Info drop down ----------------------------------------

function infoFunction() {
  document.getElementById("myInfo").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.infobtn')) {
    var dropdowns = document.getElementsByClassName("infocontent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
