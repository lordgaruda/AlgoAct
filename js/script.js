// =========================================
// AlgoAct - Interactive Features
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // Mobile Navigation Toggle
    // =========================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon between menu and close
            const icon = this.querySelector('.material-icons');
            if (navMenu.classList.contains('active')) {
                icon.textContent = 'close';
            } else {
                icon.textContent = 'menu';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('.material-icons').textContent = 'menu';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    menuToggle.querySelector('.material-icons').textContent = 'menu';
                }
            });
        });
    }
    
    // =========================================
    // Smooth Scrolling for Anchor Links
    // =========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // =========================================
    // Navbar Scroll Effect
    // =========================================
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow on scroll
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // =========================================
    // Intersection Observer for Animations
    // =========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate value cards
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate risk cards
    const riskCards = document.querySelectorAll('.risk-card');
    riskCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // =========================================
    // Back to Top Button (Optional)
    // =========================================
    // Create back to top button dynamically
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<span class="material-icons">arrow_upward</span>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);
    
    // Add styles for back to top button
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1976d2, #1565c0);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.4);
        }
        
        .back-to-top:active {
            transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // =========================================
    // Form Validation (if forms are added later)
    // =========================================
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#f44336';
                } else {
                    input.style.borderColor = '#e0e0e0';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
    
    // =========================================
    // Active Navigation Link Highlighting
    // =========================================
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentLocation) {
            link.classList.add('active');
        }
    });
    
    // =========================================
    // External Links - Open in New Tab
    // =========================================
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    externalLinks.forEach(link => {
        // Skip if already has target attribute
        if (!link.hasAttribute('target')) {
            const currentDomain = window.location.hostname;
            const linkDomain = new URL(link.href).hostname;
            
            // Only open in new tab if it's truly external
            if (linkDomain !== currentDomain) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        }
    });
    
    // =========================================
    // Preload Images on Hover
    // =========================================
    const imageLinks = document.querySelectorAll('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]');
    
    imageLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const img = new Image();
            img.src = this.href;
        });
    });
    
    // =========================================
    // Console Message
    // =========================================
    console.log('%cAlgoAct', 'color: #1976d2; font-size: 24px; font-weight: bold;');
    console.log('%cDeveloped by @lordgaruda', 'color: #757575; font-size: 14px;');
    console.log('%cGitHub: https://github.com/lordgaruda', 'color: #1976d2; font-size: 12px;');
    
    // =========================================
    // Initialize dynamic 3D interactions
    // =========================================
    try {
        initParticles(); // from particles.js (if available)
    } catch (e) {
        // particles.js not loaded or failed — continue silently
    }

    initMouseParallax();
    initTiltCards();
    initScrollParallax();

});

// =========================================
// Service Worker Registration (Optional - for PWA)
// =========================================
if ('serviceWorker' in navigator) {
    // Uncomment below to enable service worker
    // window.addEventListener('load', function() {
    //     navigator.serviceWorker.register('/sw.js').then(function(registration) {
    //         console.log('ServiceWorker registration successful');
    //     }, function(err) {
    //         console.log('ServiceWorker registration failed: ', err);
    //     });
    // });
}

// =========================================
// Performance Monitoring
// =========================================
window.addEventListener('load', function() {
    // Log page load time
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    }
});

// =========================================
// Dynamic 3D helpers
// =========================================

// Throttle helper using RAF
function rafThrottle(fn) {
    let busy = false;
    return function(...args) {
        if (busy) return;
        busy = true;
        requestAnimationFrame(() => {
            fn.apply(this, args);
            busy = false;
        });
    };
}

// Mouse-based parallax for elements with data-parallax attribute
function initMouseParallax() {
    const layers = document.querySelectorAll('[data-parallax]');
    if (!layers.length) return;

    const onMove = rafThrottle((e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        layers.forEach(el => {
            const depth = parseFloat(el.getAttribute('data-parallax')) || 0.03;
            const translateX = -x * depth * 100;
            const translateY = -y * depth * 70;
            el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) translateZ(0)`;
        });
    });

    window.addEventListener('mousemove', onMove);
}

// Tilt effect on cards
function initTiltCards() {
    const cards = document.querySelectorAll('.feature-card, .value-card, .risk-card, .github-card, .sidebar-card');
    if (!cards.length) return;

    cards.forEach(card => {
        card.classList.add('tilt-enabled');

        const onMove = (e) => {
            const rect = card.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;
            const rx = (py - 0.5) * 12; // rotateX
            const ry = (px - 0.5) * -12; // rotateY
            const tz = 20; // translateZ for pop

            card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${tz}px)`;
            card.style.transition = 'transform 0.08s ease';
        };

        const onLeave = () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s cubic-bezier(.2,.8,.2,1)';
        };

        card.addEventListener('mousemove', rafThrottle(onMove));
        card.addEventListener('mouseleave', onLeave);
    });
}

// Scroll-based parallax for elements with data-scroll-depth
function initScrollParallax() {
    const scrollers = document.querySelectorAll('[data-scroll-depth]');
    if (!scrollers.length) return;

    const onScroll = rafThrottle(() => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        scrollers.forEach(el => {
            const depth = parseFloat(el.getAttribute('data-scroll-depth')) || 0.2;
            const translate = -(scrollY * depth);
            el.style.transform = `translate3d(0, ${translate}px, 0)`;
        });
    });

    window.addEventListener('scroll', onScroll, { passive: true });
}

