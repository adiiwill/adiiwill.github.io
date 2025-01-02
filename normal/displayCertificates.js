async function loadCertificates() {
    try {
        const response = await fetch('certificates.json');
        const certificates = await response.json();
        const container = document.getElementById('certificates-container');

        certificates.forEach(cert => {
            const certElement = document.createElement('div');
            certElement.className = 'swiper-slide';
            const certContent = document.createElement('div');
            certContent.className = 'certificate-body';
            certContent.innerHTML = `
                <div class="certificate-done"><i class='bx bxs-certification'></i> Certified</div>
                <div class="certificate-name"><p>${cert.name}</p></div>
                <div class="certificate-data">
                    <p class="certificate-issuer">${cert.issuer}</p>
                    <p><i>Issued ${cert.date}</i></p>
                </div>
                <a href="${cert.url}" target="_blank" class="certificate-check">Show Credential<sup class='bx bx-link-external'></sup></a>
            `;
            certElement.appendChild(certContent);
            container.appendChild(certElement);
        });

        // Initialize Swiper after certificates are loaded
        const swiper = new Swiper('.certificates-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: false,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            }
        });

    } catch (error) {
        console.error('Error loading certificates:', error);
    }
}

// Only call loadCertificates
loadCertificates();


// Navbar and "back to top" button related code (i was lazy to make another file for it)
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const backToTop = document.querySelector('.back-to-top');
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    // Menu Toggle Functionality
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        // Toggle menu icon
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('bx-menu');
        icon.classList.toggle('bx-x');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('bx-menu');
                icon.classList.remove('bx-x');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 &&
            !navbar.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            navbar.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('bx-menu');
            icon.classList.remove('bx-x');
        }
    });

    // Update active link
    function updateActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Back to top visibility
    function updateBackToTop() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', () => {
        updateActiveLink();
        updateBackToTop();
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = window.innerWidth <= 768 ? 20 : 80;
            const offsetTop = targetSection.offsetTop - offset;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Back to top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initial update
    updateActiveLink();
    updateBackToTop();
});