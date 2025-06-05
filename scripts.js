document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonial-slide');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  // Inicia com o primeiro
  showTestimonial(currentIndex);

  // Auto slide
  setInterval(nextTestimonial, 7000);

  // Se os botões estiverem no DOM, adicione os event listeners
  document.querySelector('.testimonial-btn:first-of-type')?.addEventListener('click', prevTestimonial);
  document.querySelector('.testimonial-btn:last-of-type')?.addEventListener('click', nextTestimonial);
});
