const toggleButton = document.getElementById('icon');
const menuToggle = document.getElementsByClassName('menuToggle')[0]; // Access the first element with class 'menuToggle'
    
toggleButton.addEventListener('click', () => {
  menuToggle.classList.toggle('active'); // Toggle the 'show' class on menuToggle
});

const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('expanded');
  } else {
    header.classList.remove('expanded');
  }
});

