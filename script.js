// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission alert (replace with actual backend integration)
document.getElementById('repair-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your booking! We will contact you shortly with a quote.');
    this.reset();
});