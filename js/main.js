const hamburger = document.querySelector('.hamburger-menu');
const galleryContainer = document.querySelectorAll(".video-img-container");
const widthOutput = window.innerWidth;
const arrowBack = document.querySelector(".arrow-back");
const videoContainer = document.querySelector(".video-container");
const galleryImg1 = document.querySelector(".gallery-img-1");
const galleryImg2 = document.querySelector(".gallery-img-2");
const galleryImg3 = document.querySelector(".gallery-img-3");

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


  galleryImg1.addEventListener("click", ()=>{
    videoContainer.style.opacity="1";
    videoContainer.style.visibility="visible";
  })
