function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function isOutOfView(){
    navbar = document.getElementById("navbar");
    if (!elementInViewport(navbar)) {
        navbar.style.backgroundColor = "#181818";
        document.getElementById("home-button").style.backgroundColor = "#181818";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("home-button").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

$(window).scroll(isOutOfView);
