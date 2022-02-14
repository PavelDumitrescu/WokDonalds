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

function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
