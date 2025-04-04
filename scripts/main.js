// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky navigation
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('bg-opacity-100');
            nav.classList.remove('bg-opacity-80');
        } else {
            nav.classList.remove('bg-opacity-100');
            nav.classList.add('bg-opacity-80');
        }
    });

    // Mobile menu toggle functionality
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const desktopMenu = document.querySelector('.hidden.md\\:block');
    
    mobileMenuButton.addEventListener('click', function() {
        desktopMenu.classList.toggle('hidden');
        desktopMenu.classList.toggle('block');
        desktopMenu.classList.toggle('absolute');
        desktopMenu.classList.toggle('top-16');
        desktopMenu.classList.toggle('left-0');
        desktopMenu.classList.toggle('right-0');
        desktopMenu.classList.toggle('bg-black');
        desktopMenu.classList.toggle('p-4');
    });

    // Product card hover effects
    const productCards = document.querySelectorAll('.group');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img').classList.add('scale-105');
            this.querySelector('.absolute').classList.remove('opacity-0');
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('img').classList.remove('scale-105');
            this.querySelector('.absolute').classList.add('opacity-0');
        });
    });

    // Video play/pause on visibility
    const heroVideo = document.querySelector('.hero-video');
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            heroVideo.pause();
        } else {
            heroVideo.play();
        }
    });
});