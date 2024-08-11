window.onload = () => {
  const smallCursor = document.querySelector('.small');
  const bigCursor = document.querySelector('.big');
  const links = document.querySelectorAll('a');

  let mouseX = 0, mouseY = 0;
  let smallX = 0, smallY = 0;
  let bigX = 0, bigY = 0;
  
  const smallSpeed = 0.15; // Speed for small cursor
  const bigSpeed = 0.08;   // Speed for big cursor (slower for trailing effect)

  // Track whether the cursor is over a link
  let isHoveringLink = false;

  const mouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const updatePosition = () => {
    // Calculate the difference and apply easing
    smallX += (mouseX - smallX) * smallSpeed;
    smallY += (mouseY - smallY) * smallSpeed;

    bigX += (mouseX - bigX) * bigSpeed;
    bigY += (mouseY - bigY) * bigSpeed;

    // Update cursor positions with transform
    smallCursor.style.transform = `translate3d(${smallX}px, ${smallY}px, 0)`;
    
    // Apply scaling based on whether the cursor is hovering over a link
    bigCursor.style.transform = `translate3d(${bigX - 5}px, ${bigY - 5}px, 0) ${isHoveringLink ? 'scale(2)' : 'scale(1)'}`;

    requestAnimationFrame(updatePosition);
  };

  // Enlarge the big cursor on hover
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      isHoveringLink = true;
    });
    
    link.addEventListener('mouseleave', () => {
      isHoveringLink = false;
    });
  });

  window.addEventListener('mousemove', mouseMove);
  updatePosition(); // Start animation loop
};

window.addEventListener('contextmenu', (e) => {
  e.preventDefault(); // Prevent the default context menu from appearing
});