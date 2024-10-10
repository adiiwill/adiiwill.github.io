async function loadCertificates() {
    try {
        const response = await fetch('certificates.json');
        const certificates = await response.json();
        const container = document.getElementById('certificates-container');

        certificates.forEach(cert => {
            const certElement = document.createElement('div');
            certElement.className = 'certificate-body';
            certElement.innerHTML = `
                        <div class="certificate-done"><i class='bx bxs-certification'></i> Certified</div>
                        <div class="certificate-name"><p>${cert.name}</p></div>
                        <div class="certificate-data">
                            <p class="certificate-issuer">${cert.issuer}</p>
                            <p><i>Issued ${cert.date}</i></p>
                        </div>
                        <a href="${cert.url}" target="_blank" class="certificate-check">Show Credential<sup class='bx bx-link-external'></sup></a>
                    `;
            container.appendChild(certElement);
        });
    } catch (error) {
        console.error('Error loading certificates:', error);
    }
}

loadCertificates();