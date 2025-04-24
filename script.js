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

document.getElementById('repair-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: this.name.value,
        phone: this.phone.value,
        brand: this.brand.value,
        model: this.model.value,
        issue: this.issue.value
    };
    const message = `New Repair Request\nName: ${formData.name}\nPhone: ${formData.phone}\nBrand: ${formData.brand}\nModel: ${formData.model}\nIssue: ${formData.issue}`;
    const url = generateWhatsAppUrl('+919667146563', message);
    window.open(url, '_blank');
    alert('Redirecting to WhatsApp for your quote request!');
    this.reset();
    fbq('track', 'Lead');
});