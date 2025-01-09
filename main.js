// **Initial Reveal Styles**
document.querySelectorAll('.service-card, .testimonial, .contact-wrapper').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
});

// **Parallax Effect for Hero Section**
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const scrollY = window.scrollY;
    hero.style.transform = `translateY(${scrollY * 0.5}px)`;
});

// **Reveal Sections on Scroll**
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.service-card, .testimonial, .contact-wrapper');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'all 0.5s ease-out';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// **Hover Effect for Service Cards**
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1) rotate(2deg)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotate(0)';
    });
});

// **Click Effect for Testimonials**
document.querySelectorAll('.testimonial').forEach(testimonial => {
    testimonial.addEventListener('click', () => {
        document.querySelectorAll('.testimonial').forEach(t => t.style.border = 'none');
        testimonial.style.border = '3px solid #007bff';
        testimonial.style.transition = 'border 0.3s ease';
    });
});

// **Hero Button Ripple Effect**
const heroButton = document.querySelector('.cta');
if (heroButton) {
    heroButton.addEventListener('click', e => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
        ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
        e.target.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// **Bubble Animation**
const bubbleContainer = document.querySelector('.bubble-container');

if (bubbleContainer) {
    const createBubble = () => {
        const bubble = document.createElement('div');
        const size = Math.random() * 50 + 20; // Taille entre 20px et 70px
        const posX = Math.random() * window.innerWidth; // Position horizontale aléatoire
        const posY = Math.random() * window.innerHeight; // Position verticale aléatoire
        const animationDuration = Math.random() * 5 + 5; // Durée entre 5s et 10s

        // Appliquer les styles à la bulle
        bubble.classList.add('bubble');
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${posX}px`;
        bubble.style.top = `${posY}px`;
        bubble.style.animationDuration = `${animationDuration}s`;

        bubbleContainer.appendChild(bubble);

        // Supprimer la bulle après l'animation
        setTimeout(() => {
            bubble.remove();
        }, animationDuration * 1000);
    };

    // Générer des bulles à intervalle régulier
    setInterval(createBubble, 300);
}
