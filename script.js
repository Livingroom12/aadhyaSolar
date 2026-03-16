const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});


const slider = document.getElementById("testimonialSlider");
const cards = document.querySelectorAll(".testimonial-card");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function updateSlider(){

  const cardWidth = cards[0].offsetWidth + 25; // gap

  slider.style.transform = `translateX(-${index * cardWidth}px)`;

  cards.forEach(card => card.classList.remove("active"));

  if(cards[index]){
    cards[index].classList.add("active");
  }
}

next.addEventListener("click", ()=>{

  if(index < cards.length - 1){
    index++;
    updateSlider();
  }

});

prev.addEventListener("click", ()=>{

  if(index > 0){
    index--;
    updateSlider();
  }

});


const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {

const question = item.querySelector(".faq-question");

question.addEventListener("click", () => {

item.classList.toggle("active");

});

});
