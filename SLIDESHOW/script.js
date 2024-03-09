(function(){
  "use strict";
  
  let currentImage = 0;
  const myphotos = ["image001.jpg", "image002.jpg", "image003.jpg", "image004.jpg", "image005.jpg", "image006.jpg", "image007.jpg", "image008.jpg", "image009.jpg", "image010.jpg", "image011.jpg", "image012.jpg", "image013.jpg", "image014.jpg", "image015.jpg", "image016.jpg", "image017.jpg", "image018.jpg", "image019.jpg", "image020.jpg"];

  const container = document.getElementById('content');
  const nextBtn = document.getElementById('next');  
  const prevBtn = document.getElementById('previous');  
  
  nextBtn.addEventListener('click', function (event) {
    event.preventDefault();
	
	currentImage++; if (current . . .
	});
	
	prevBtn.addEventListener('click', function (event) {
	  event.preventDefault(); cu...
	 });
	 
	function swapImage(){
	  const newSlide = document.createElement('img');
	  newSlide.src = 'slides/${myphotos[currentImage]}';
	  newSlide.className = "fadeinimg";
	  container.appendChild(newSlide);
	  
	  if (container.children.lenth > 2) {
	    container.removeChild(container.children[0]);
	  }
	}
  }());
  
  