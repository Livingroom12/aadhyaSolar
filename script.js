// ===== EmailJS Init =====
(function () {
  emailjs.init("Vdzakau0tw0X6ZmQl"); // ✅ Public Key
})();

// ===== Navbar Toggle =====

fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    // ✅ IMPORTANT: Navbar load pachi j select karo
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
  });


// ===== Testimonial Slider =====
const slider = document.getElementById("testimonialSlider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slider && nextBtn && prevBtn) {
  const cards = document.querySelectorAll(".testimonial-card");
  let index = 0;

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function updateSlider() {
    cards.forEach(card => card.classList.remove("active"));
    if (cards[index]) cards[index].classList.add("active");

    if (isMobile()) {
      const cardWidth = cards[index].offsetWidth;
  const cardMargin = 35;
  const totalShift = index * (cardWidth + cardMargin * 2);
  slider.style.transform = `translateX(-${totalShift}px)`;
    } else {
      // Desktop: center active card
      const wrapper = document.querySelector(".testimonial-wrapper");
      const wrapperWidth = wrapper.offsetWidth;
      const card = cards[index];
      const cardWidth = card.offsetWidth;
      const gap = 25;

      let offsetLeft = 0;
      for (let i = 0; i < index; i++) {
        offsetLeft += cards[i].offsetWidth + gap;
      }

      const centerOffset = offsetLeft - (wrapperWidth / 2) + (cardWidth / 2);
      slider.style.transform = `translateX(-${centerOffset}px)`;
    }
  }

  nextBtn.addEventListener("click", () => {
    index++;
    if (index >= cards.length) index = 0;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = cards.length - 1;
    updateSlider();
  });

  window.addEventListener("resize", () => updateSlider());

  // Initial
  updateSlider();
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



// =================Counter========================



const counters = document.querySelectorAll('.count');

function runCounter() {
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    let count = 0;

    const speed = 100;

    function updateCount() {
      const increment = target / speed;

      if (count < target) {
        count += increment;

        if (target % 1 !== 0) {
          counter.innerText = count.toFixed(1) + "+";
        } else {
          counter.innerText = Math.ceil(count) + "+";
        }

        setTimeout(updateCount, 20);
      } else {
        if (target % 1 !== 0) {
          counter.innerText = target.toFixed(1) + "+";
        } else {
          counter.innerText = target + "+";
        }
      }
    }

    updateCount();
  });
}

// ✅ Run when page loads
window.addEventListener("load", runCounter);