// ==========================================
// TYPING ANIMATION
// ==========================================
const typingElement = document.querySelector('.typing-text');
const textToType = 'Data Science & AI Enthusiast | App & Game Developer | Future Cybersecurity Expert';
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50);
    }
}

// Start typing animation
window.addEventListener('load', () => {
    setTimeout(typeText, 800);
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// MOBILE MENU
// ==========================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileLinks = document.querySelectorAll('.mobile-links a');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// ==========================================
// SMOOTH SCROLL
// ==========================================
const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// ACTIVE NAVIGATION
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ==========================================
// SKILLS ANIMATION
// ==========================================
const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevel = entry.target.getAttribute('data-skill');
            setTimeout(() => {
                entry.target.style.width = skillLevel + '%';
            }, 200);
            skillObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const fadeElements = document.querySelectorAll('.skill-item, .project-card, .about-card');
fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// ==========================================
// CONTACT FORM
// ==========================================
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Show success message
        successMessage.classList.add('show');
        
        // Hide after 3 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 3000);
        
        // Reset form
        contactForm.reset();
        
        // Log data (in production, send to server)
        console.log('Form submitted:', data);
        
        // You can integrate EmailJS or your backend here
        // Example: sendEmail(data);
    });
}

// ==========================================
// PARALLAX EFFECT
// ==========================================
const heroBgImage = document.querySelector('.hero-bg-image');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroBgImage) {
        const speed = 0.5;
        heroBgImage.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// ==========================================
// GLOW EFFECTS MOUSE TRACKING
// ==========================================
const glowElements = document.querySelectorAll('.glow');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    glowElements.forEach((glow, index) => {
        const speed = (index + 1) * 0.02;
        const moveX = (mouseX - 0.5) * 100 * speed;
        const moveY = (mouseY - 0.5) * 100 * speed;
        
        glow.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// ==========================================
// SCROLL TO TOP ON PAGE LOAD
// ==========================================
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log(
    '%c Portfolio Loaded Successfully! ',
    'background: linear-gradient(135deg, #00f0ff, #0066ff); color: white; font-size: 16px; padding: 10px 20px; border-radius: 5px; font-weight: bold;'
);

console.log(
    '%c Made with ❤️ by Chiranjit Chakma ',
    'background: #0a0a0a; color: #00f0ff; font-size: 14px; padding: 8px 16px; border-radius: 5px;'
);
