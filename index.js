const smallCursor = document.querySelector('.small');
const bigCursor = document.querySelector('.big');
const links = document.querySelectorAll('a');
const loadingScreen = document.getElementById('loading-screen');
const content = document.getElementById('content');
const video = document.getElementById('background-video');

let mouseX = 0, mouseY = 0;
let smallX = 0, smallY = 0;
let bigX = 0, bigY = 0;

const smallSpeed = 0.15;
const bigSpeed = 0.08;

let isHoveringLink = false;

const mouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const updatePosition = () => {
  smallX += (mouseX - smallX) * smallSpeed;
  smallY += (mouseY - smallY) * smallSpeed;

  bigX += (mouseX - bigX) * bigSpeed;
  bigY += (mouseY - bigY) * bigSpeed;

  smallCursor.style.transform = `translate3d(${smallX}px, ${smallY}px, 0)`;
  bigCursor.style.transform = `translate3d(${bigX - 5}px, ${bigY - 5}px, 0) ${isHoveringLink ? 'scale(2)' : 'scale(1)'}`;

  requestAnimationFrame(updatePosition);
};

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    isHoveringLink = true;
  });

  link.addEventListener('mouseleave', () => {
    isHoveringLink = false;
  });
});

window.addEventListener('mousemove', mouseMove);

const fadeOutLoadingScreen = () => {
  loadingScreen.style.opacity = '0';
  content.style.opacity = '1';
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 500); // Wait for fade out animation to complete
  updatePosition();
};

// Check if the video has loaded
video.addEventListener('canplay', fadeOutLoadingScreen);

// Fallback in case video takes too long to load
setTimeout(() => {
  if (loadingScreen.style.opacity !== '0') {
    fadeOutLoadingScreen();
  }
}, 3000); // Wait for 3 seconds max

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});