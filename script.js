// navigation bar 
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-times');
};

// Close navbar when scrolling
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var menuBtn = document.querySelector('#menu-btn');
  navbar.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  menuBtn.classList.add('fa-bars');
});


