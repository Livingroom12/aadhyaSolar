const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});


const slider = document.getElementById("testimonialSlider");
const cards = document.querySelectorAll(".testimonial-card");

let index = 0;

function moveSlider(){
  const cardWidth = cards[0].offsetWidth + 25; // card width + gap
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

document.querySelector(".next").onclick = () => {
  if(index < cards.length - 1){
    index++;
    moveSlider();
  }
}

document.querySelector(".prev").onclick = () => {
  if(index > 0){
    index--;
    moveSlider();
  }
}

window.addEventListener("resize", moveSlider);


const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {

const question = item.querySelector(".faq-question");

question.addEventListener("click", () => {

item.classList.toggle("active");

});

});