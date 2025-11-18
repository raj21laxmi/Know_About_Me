// Simple JS to open/close frames and loader

// Loader (brief)
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 900); // short loader
});

// Elements
const openAboutBtns = [document.getElementById('openAbout'), document.getElementById('openAbout2')].filter(Boolean);
const openProjectsBtn = document.getElementById('openProjects');
const frameAbout = document.getElementById('frameAbout');
const frameProjects = document.getElementById('frameProjects');
const overlay = document.getElementById('frameOverlay');
const closeButtons = document.querySelectorAll('[data-close]');

// open helpers
function openFrame(frame){
  frame.classList.add('open');
  overlay.classList.add('show-overlay');
  document.body.style.overflow = 'hidden';
  frame.focus();
}
function closeFrame(frame){
  frame.classList.remove('open');
  overlay.classList.remove('show-overlay');
  document.body.style.overflow = '';
}

// attach events
openAboutBtns.forEach(btn => {
  btn.addEventListener('click', () => openFrame(frameAbout));
});
if(openProjectsBtn){
  openProjectsBtn.addEventListener('click', () => openFrame(frameProjects));
}

// close buttons
closeButtons.forEach(b => b.addEventListener('click', () => {
  const p = b.closest('.frame');
  if(p) closeFrame(p);
}));

// click overlay to close both
overlay.addEventListener('click', () => {
  [frameAbout, frameProjects].forEach(f => f.classList.remove('open'));
  overlay.classList.remove('show-overlay');
  document.body.style.overflow = '';
});

// ESC key closes
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    [frameAbout, frameProjects].forEach(f => f.classList.remove('open'));
    overlay.classList.remove('show-overlay');
    document.body.style.overflow = '';
  }
});
