// JavaScript for Instagram Icon Animation
const instaLink = document.getElementById('insta-link');

// Add hover effect with scaling
instaLink.addEventListener('mouseover', () => {
    instaLink.style.transform = 'scale(1.3)';
    instaLink.style.transition = 'transform 0.3s ease';
});

// Reset the effect when the mouse leaves
instaLink.addEventListener('mouseleave', () => {
    instaLink.style.transform = 'scale(1)';
});

    function openGoogleForm() {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfiAk6BLNOwYvcF8i-mC9jhWydOwzYqhw96F0dg7LrzgSNMdg/viewform?usp=sf_link", '_blank');
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });