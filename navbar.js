const navbar = document.querySelector('.c-navbar');
var prevScrollpos = window.scrollY;
const navbarHeight = navbar.offsetHeight; // Get navbar height test 1

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-" + navbarHeight + "px";
  }
  prevScrollpos = currentScrollPos;
}