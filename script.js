// Toggle Menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Toggle Search Box
const searchIcon = document.getElementById('search-icon');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    searchBox.classList.toggle('active');
});

// Close Search Box When Clicking Outside
document.addEventListener('click', (e) => {
    if (!searchIcon.contains(e.target) && !searchBox.contains(e.target)) {
        searchBox.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true, // Stop autoplay during interaction
        },
        speed: 800,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // Force hide controls after interaction
    swiper.on('slideChange', () => {
        swiper.pagination.el.style.opacity = '1';
        setTimeout(() => {
            swiper.pagination.el.style.opacity = '0';
        }, 2000);
    });
});

// JavaScript to toggle the menu and show social media links
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.elegant-form');
    const successToast = document.querySelector('.success-toast');
    const formGroups = document.querySelectorAll('.form-group');

    // Form Validation
    const validateField = (field) => {
        const value = field.value.trim();
        const parent = field.closest('.form-group');
        const error = parent.querySelector('.form-error');

        if (!value) {
            parent.classList.add('invalid');
            return false;
        }

        if (field.type === 'email' && !isValidEmail(value)) {
            parent.classList.add('invalid');
            error.textContent = 'Please enter a valid email address';
            return false;
        }

        parent.classList.remove('invalid');
        return true;
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formValid = true;

        // Validate all fields
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            if (!validateField(input)) formValid = false;
        });

        if (!formValid) return;

        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        // Replace this with actual fetch/AJAX call
        setTimeout(() => {
            showSuccessToast();
            submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            submitBtn.disabled = false;
            contactForm.reset();
        }, 2000);
    };

    // Success Toast
    const showSuccessToast = () => {
        successToast.classList.add('active');
        setTimeout(() => successToast.classList.remove('active'), 4000);
    };

    // Event Listeners
    contactForm.addEventListener('submit', handleSubmit);

    // Real-time Validation
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        
        input.addEventListener('input', () => {
            validateField(input);
            if (input.value.trim()) {
                group.classList.remove('invalid');
            }
        });

        input.addEventListener('blur', () => validateField(input));
    });

    // Social Links Interaction
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Add actual social media navigation here
            console.log(`Navigating to: ${link.href}`);
        });
    });
});


// Haskell Logic Simulation
const haskellResults = ["Preparing...", "On the way!", "Ready!"];
let currentIndex = 0;
const resultElement = document.getElementById('haskell-match-result');

setInterval(() => {
    currentIndex = (currentIndex + 1) % haskellResults.length;
    if(resultElement) {
        resultElement.textContent = haskellResults[currentIndex];
    }
}, 2000);


// Advanced Document Integrity Verification Logic
function verifyDocument() {
    const input = document.getElementById('vault-input').value;
    const display = document.getElementById('vault-display');
    const loader = document.getElementById('vault-loader');
    const results = document.getElementById('vault-results');
    const docHash = document.getElementById('doc-hash');
    const docTime = document.getElementById('doc-time');

    if (!input) {
        alert("Please enter a Shipping ID or VIN to verify.");
        return;
    }

    // Show the vault display
    display.style.display = 'block';
    loader.style.display = 'block';
    results.style.display = 'none';

    // Simulate a Network Latency & Cryptographic Check
    setTimeout(() => {
        loader.style.display = 'none';
        results.style.display = 'block';
        
        // Generate a pseudo-random SHA-256 hash based on input
        const mockHash = btoa(input + "MERARE_SALT").substring(0, 32).toUpperCase();
        docHash.textContent = mockHash;
        
        // Set current timestamp
        const now = new Date();
        docTime.textContent = now.toUTCString();
    }, 1800); // 1.8 seconds to simulate network round-trip
}

