// ===== EmailJS Init =====
(function () {
  emailjs.init("Vdzakau0tw0X6ZmQl"); // ✅ Public Key
})();

// ===== Navbar Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}

// ===== Testimonial Slider =====
const slider = document.getElementById("testimonialSlider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (slider && next && prev) {
  const cards = document.querySelectorAll(".testimonial-card");
  let index = 0;

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 25;
    slider.style.transform = `translateX(-${index * cardWidth}px)`;

    cards.forEach(card => card.classList.remove("active"));
    if (cards[index]) cards[index].classList.add("active");
  }

  next.addEventListener("click", () => {
    if (index < cards.length - 1) {
      index++;
      updateSlider();
    }
  });

  prev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });
}

// ===== FAQ Accordion =====
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
  const question = item.querySelector(".faq-question");

  if (question) {
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  }
});

// ===== Contact Form + EmailJS =====
const form = document.getElementById("form");
const successMsg = document.getElementById("successMsg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 🔄 Button loading state
    const btn = form.querySelector(".submit-btn");
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    emailjs
      .sendForm("service_b3wmlqh", "template_o0hdyzj", this)
      .then(() => {

        // ✅ Success Message
        if (successMsg) {
          successMsg.style.display = "flex";
        }

        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We'll get back to you within 24 hours.",
          confirmButtonColor: "#f5a623",
        });

        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message. Please try again later.",
          confirmButtonColor: "#d33",
        });
      })
      .finally(() => {
        // 🔁 Button reset
        btn.disabled = false;
        btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Message`;
      });
  });
}