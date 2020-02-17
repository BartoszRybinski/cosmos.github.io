const hamburger = document.querySelector('.hamburger-menu');
const galleryContainer = document.querySelectorAll(".video-img-container");
const widthOutput = window.innerWidth;
const arrowBack = document.querySelector(".arrow-back");
const videoContainer = document.querySelector(".video-container");
const imgEarth = document.querySelector(".img-earth");

function hamburgerToggle(){
  document.querySelector('.hamburger-menu').classList.toggle("change");
  document.querySelector(".sidebar").classList.toggle('change-sidebar')
}
hamburger.addEventListener('click', hamburgerToggle);


if(widthOutput<=1150){
  galleryContainer[1].removeAttribute("data-aos-delay");
  galleryContainer[2].removeAttribute("data-aos-delay");
}

  arrowBack.addEventListener("click", ()=>{
    videoContainer.style.opacity="0";
    videoContainer.style.visibility="hidden";
  });


  imgEarth.addEventListener("click", ()=>{
    videoContainer.style.opacity="1";
    videoContainer.style.visibility="visible";
  })
