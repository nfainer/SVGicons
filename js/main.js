(() => {
  console.log('fired! JS is FUN!!');
//variabes at the top
  var iconSet = document.querySelectorAll('svg');
//functions here
function logThisIcon() {
  console.log('clicked on this icon ', this.id);

  this.style.opacity = 0.5;
}

//event handling
  iconSet.forEach(icon => icon.addEventListener('click',
  logThisIcon));
})();
