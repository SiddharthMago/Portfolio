function togglenav() {
    menu = document.querySelector(".menu_links");
    icon = document.querySelector(".mini_nav_icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var words = ['Python', 'C/C++', 'Webdev', 'Finance', 'Communication', 'Marketing', 'Animation']; 
var currentIndex = 0;
var t = setInterval(function() { 
  $('#changing').html(words[currentIndex]);
  currentIndex = (currentIndex + 1) % words.length;
}, 1500);

function darkmode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}