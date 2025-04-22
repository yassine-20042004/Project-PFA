// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize counter animations
    initCounters();
});

// Scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Counter animations
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const statisticsSection = document.getElementById('statistics');
    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                
                let currentCount = 0;
                
                const updateCounter = () => {
                    currentCount += increment;
                    
                    if (currentCount < target) {
                        counter.textContent = Math.ceil(currentCount);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
            
            observer.unobserve(statisticsSection);
        }
    }, {
        threshold: 0.5
    });
    
    if (statisticsSection) {
        observer.observe(statisticsSection);
    }
}

// Add fade-in class to elements that should animate on scroll
window.addEventListener('load', function() {
    // Add fade-in class to sections
    document.querySelectorAll('section').forEach(section => {
        if (!section.classList.contains('fade-in')) {
            section.classList.add('fade-in');
        }
    });
    
    // Add fade-in class to features
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('fade-in');
    });
    
    // Add fade-in class to timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.add('fade-in');
    });
    
    // Initialize animations
    initScrollAnimations();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
            
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});