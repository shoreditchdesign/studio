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

window.addEventListener('load', function() {
  setTimeout(function() {
      var navbarLinks = document.querySelectorAll('.c-navbar_link');
      navbarLinks.forEach(function(link) {
          link.style.opacity = '1';
      });
  }, 5000); // 5000 milliseconds = 5 seconds
});