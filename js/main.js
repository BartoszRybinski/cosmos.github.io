let hamburger = document.querySelector('.hamburger-menu');

function hamburgerToggle(){
  document.querySelector('.hamburger-menu').classList.toggle("change");
  document.querySelector(".sidebar").classList.toggle('change-sidebar')
}

hamburger.addEventListener('click', hamburgerToggle);
