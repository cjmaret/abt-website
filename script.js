let dots = document.querySelectorAll(".dot");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let slides = document.querySelectorAll(".mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  slides.forEach(slide => {
      slide.style.display = "none";
  })
  dots.forEach(dot => {
      dot.className = dot.className.replace("active", "");
  });

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide(dots[i]);
  })
})


// let i;
// for (i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
// }
// for (i = 0; i < dots.length; i++) {
//   dots[i].className = dots[i].className.replace(" active", "");
// }