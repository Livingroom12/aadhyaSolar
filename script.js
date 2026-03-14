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
  slider.style.transform = `translateX(-${index * 325}px)`;

  cards.forEach(card => card.classList.remove("active"));

  if(cards[index+1]){
    cards[index+1].classList.add("active");
  }
}

next.addEventListener("click", ()=>{
  if(index < cards.length-3){
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