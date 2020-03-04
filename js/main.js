const hamburger = document.querySelector('.hamburger-menu');
const galleryContainer = document.querySelectorAll(".video-img-container");
const widthOutput = window.innerWidth;
const videoContainer = document.querySelector(".video-container");


function hamburgerToggle(){
  document.querySelector('.hamburger-menu').classList.toggle("change");
  document.querySelector(".sidebar").classList.toggle('change-sidebar')
}
hamburger.addEventListener('click', hamburgerToggle);


if(widthOutput<=1150){
  galleryContainer[1].removeAttribute("data-aos-delay");
  galleryContainer[2].removeAttribute("data-aos-delay");
}

  galleryContainer[0].addEventListener("click", ()=>{
    location.href = "earth.html";
  })
  galleryContainer[1].addEventListener("click", ()=>{
    location.href = "earth2.html";
  })
  galleryContainer[2].addEventListener("click", ()=>{
    location.href = "earth3.html";
  })
