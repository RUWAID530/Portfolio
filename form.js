document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            message: form.querySelector('#message').value
        };

        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        
        // Reset form and show success message
        form.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
});