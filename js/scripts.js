import Typed from 'typed.js';

window.oncontextmenu = function goBack(e) {
  e.preventDefault();
  window.location.href = 'index.html';
};

const follower = document.querySelector('.mouseFollower');

const typed = new Typed('.mouseFollower', {
  strings: [
    'Welcome to the page of the Buchla 700 emulator.',
    // 'It mimics the operating system of the 700.',
    // 'This is the main menu. Click on one of items to get more info.',
  ],
  typeSpeed: 50,
  showCursor: false,
  fadeOut: true,
  onComplete: (self) => {
  },
});

document.addEventListener('mousemove', (e) => {
  follower.style.top = (e.pageY + 40) + 'px';
  follower.style.left = (e.pageX + 40) + 'px';
});
