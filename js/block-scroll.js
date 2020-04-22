
const body = document.querySelector("body");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.addEventListener('touchmove',preventDefault, false);
body.style.overflow = "hidden";
setTimeout(()=>{
  body.style.overflow = "visible";
  body.style.overflowX = "hidden";
  body.style.overflowY = "auto";
  document.removeEventListener('touchmove',preventDefault, false);
},5000);


function noScroll() {
  window.scrollTo(0, 0);
}


function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
  e.preventDefault();
  e.returnValue = false;
}
