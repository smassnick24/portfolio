function animateImageLeft() {
    var img = document.getElementById("animate-left");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == img.offsetLeft) {
        clearInterval(id);
      } else {
        pos++;
        img.style.left = pos + 'px';
      }
    }
}

function animateImageRight() {
    var img = document.getElementById("animate-right");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == img.offsetRight) {
        clearInterval(id);
      } else {
        pos--;
        img.style.right = pos + 'px';
      }
    }
}