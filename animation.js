document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections and cards
    document.querySelectorAll('section, .card').forEach(element => {
        element.classList.add('animate');
        observer.observe(element);
    });

    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
});
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = `${width}%`;
            }
        });
    }, { threshold: 0.1 });

    progressBars.forEach(bar => observer.observe(bar));
});