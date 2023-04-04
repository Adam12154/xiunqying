// Optional: set the initial position of the images randomly
document.querySelectorAll('img').forEach(function(img) {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    img.style.left = x + 'px';
    img.style.top = y + 'px';
  });
  
  // Optional: make the images draggable
  var dragged;
  
  document.addEventListener('mousedown', function(event) {
    if (event.target.tagName == 'IMG') {
      dragged = event.target;
      dragged.style.cursor = 'grabbing';
    }
  });
  
  document.addEventListener('mousemove', function(event) {
    if (dragged) {
      var x = event.clientX - dragged.width / 2;
      var y = event.clientY - dragged.height / 2;
      dragged.style.left = x + 'px';
      dragged.style.top = y + 'px';
    }
  });
  
  document.addEventListener('mouseup', function(event) {
    if (dragged) {
      dragged.style.cursor = 'grab';
      dragged = null;
    }
  });
  