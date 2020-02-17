function noScroll() {
  window.scrollTo(0, 0);
  }

window.addEventListener('scroll', noScroll);
setTimeout(()=>{
  window.removeEventListener('scroll', noScroll);
  document.addEventListener('wheel', preventDefault, {passive: false});
},5000);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
