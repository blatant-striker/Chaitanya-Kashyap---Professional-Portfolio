// DOM Elements for Modern Navbar
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarLinks = document.querySelectorAll('.navbar-link');

// Scroll Event for Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Mobile Navigation Toggle
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    navbarToggle.classList.toggle('active');
});

// Active link highlighting and close mobile menu when clicking a link
navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navbarLinks.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Close mobile menu if open
        if (navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
        }
    });
});

// Set active nav link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize Swiper for Design Showcase
const initSwiper = () => {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'slide',
        grabCursor: true,
        preloadImages: true,
        lazy: {
            loadPrevNext: true,
        },
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });
};

// Project Cards Animation
const animateProjectCards = () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image img');
        
        card.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
};

// Function to switch between vector and real photo
function switchImages() {
    const vectorImage = document.getElementById('vector-image');
    const realPhoto = document.getElementById('real-photo');
    
    vectorImage.classList.toggle('active');
    realPhoto.classList.toggle('active');
}

// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    // Show/hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Add animation class to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-item, .project-card, .cert-item, .hobby-item, .social-link-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
};

// Auto-play video when in viewport
const handleVideoPlayback = () => {
    const videos = document.querySelectorAll('video');
    if (!videos.length) return;
    
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    
    const checkVideos = () => {
        videos.forEach(video => {
            if (isInViewport(video)) {
                if (video.paused) video.play();
            } else {
                if (!video.paused) video.pause();
            }
        });
    };
    
    window.addEventListener('scroll', checkVideos);
    window.addEventListener('resize', checkVideos);
    checkVideos();
};

// Social links hover effect
const initSocialLinks = () => {
    const socialLinks = document.querySelectorAll('.social-link-item');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
};

// Call the animation function on scroll
window.addEventListener('scroll', animateOnScroll);

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const desktopThemeToggle = document.getElementById('desktopThemeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    
    // Set initial state of the switch based on current theme
    if (mobileThemeToggle) {
        mobileThemeToggle.checked = document.body.classList.contains('dark-theme');
    }
    
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        
        // Update the toggle icon
        const isDarkTheme = document.body.classList.contains('dark-theme');
        const icon = desktopThemeToggle.querySelector('i');
        
        if (isDarkTheme) {
            icon.className = 'fas fa-moon';
            if (mobileThemeToggle && !mobileThemeToggle.checked) {
                mobileThemeToggle.checked = true;
            }
        } else {
            icon.className = 'fas fa-sun';
            if (mobileThemeToggle && mobileThemeToggle.checked) {
                mobileThemeToggle.checked = false;
            }
        }
    }
    
    // Add click event listener to desktop toggle
    if (desktopThemeToggle) {
        desktopThemeToggle.addEventListener('click', toggleTheme);
    }
    
    // Add change event listener to mobile toggle switch
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('change', toggleTheme);
    }
    initSwiper();
    animateProjectCards();
    animateOnScroll();
    handleVideoPlayback();
    initSocialLinks();
    
    // Preload images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const newImg = new Image();
            newImg.src = src;
        }
    });
});
