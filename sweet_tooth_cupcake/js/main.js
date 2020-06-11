const toTop = document.querySelector("#toTop");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

toTop.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}
