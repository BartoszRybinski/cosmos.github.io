const hamburger = document.querySelector('.hamburger-menu');
const videoImgContainer = document.querySelectorAll(".video-img-container");
const widthOutput = window.innerWidth;
const videoContainer = document.querySelector(".video-container");


function hamburgerToggle(){
  document.querySelector('.hamburger-menu').classList.toggle("change");
  document.querySelector(".sidebar").classList.toggle('change-sidebar')
}
hamburger.addEventListener('click', hamburgerToggle);


if(widthOutput<=1150){
  videoImgContainer[1].removeAttribute("data-aos-delay");
  videoImgContainer[2].removeAttribute("data-aos-delay");
}

  videoImgContainer[0].addEventListener("click", ()=>{
    location.href = "earth.html";
  })
  videoImgContainer[1].addEventListener("click", ()=>{
    location.href = "aurora.html";
  })
  videoImgContainer[2].addEventListener("click", ()=>{
    location.href = "stars.html";
  })
