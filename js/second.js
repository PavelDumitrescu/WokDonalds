// Menu drop down ----------------------------------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menuFunction() {
  document.getElementById("myMenu").classList.toggle("show");
}

// Info drop down ----------------------------------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function infoFunction() {
  document.getElementById("myInfo").classList.toggle("show");
}

window.onclick = function(event) {
  // Close the dropdown menu if the user clicks outside of it
  if (!event.target.matches('.menubtn')) {
    var menuDropdowns = document.getElementsByClassName("menucontent");
    var i;
    for (i = 0; i < menuDropdowns.length; i++) {
      var openMenuDropdown = menuDropdowns[i];
      if (openMenuDropdown.classList.contains('show')) {
        openMenuDropdown.classList.remove('show');
      }
    }
  }
  // Close the dropdown menu if the user clicks outside of it
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
