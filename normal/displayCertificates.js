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