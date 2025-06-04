function scrollToSignup() {
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
  }

  // Testimonial slider
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
  // Auto slide a cada 7 segundos
  setInterval(nextTestimonial, 7000);
