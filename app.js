// Grabbing all the slide elements
const slides = document.querySelectorAll(".slide");

// Grabbing buttons
const nextButton = document.querySelector(".nextBtn");
const prevButton = document.querySelector(".prevBtn");

// Iteraing over each slides and setting the left property
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextButton.addEventListener("click", function (e) {
  counter++;
  slideAway();
});

prevButton.addEventListener("click", function (e) {
  counter--;
  slideAway();
});

function slideAway() {
  if (counter < 0) {
    counter = slides.length - 1;
  }

  counter = counter % slides.length;

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
