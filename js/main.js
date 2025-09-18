// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check for saved theme preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}

// Toggle dark mode
darkModeToggle?.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Carousel functionality for projecten.html
const carouselInner = document.getElementById('carouselInner');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');

// Typewriter animation restart function removed - no longer needed for project cards

if (carouselInner && prevBtn && nextBtn) {
    let currentIndex = 0;
    const total = carouselInner.children.length;
    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + total) % total;
        updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % total;
        updateCarousel();
    });
}

// Animate skill bars in over-mij.html
window.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
    setTimeout(() => {
      bar.style.width = percentage + '%';
    }, 300); // slight delay for effect
  });
});

// Add this to your main.js file
function sendEmail(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    emailjs.send('service_8f28va1', 'template_rp9ekre', templateParams)
        .then(function(response) {
            alert('Bericht succesvol verzonden!');
            form.reset();
        }, function(error) {
            alert('Er is een fout opgetreden. Probeer het opnieuw.');
            console.error('EmailJS error:', error);
        });
}

// Add event listener to form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }
});