import Typed from 'typed.js';

window.oncontextmenu = function goBack(e) {
  e.preventDefault();
  window.location.href = '/index.html';
};

const follower = document.querySelector('.mouseFollower');

try {
  const typed = new Typed('.mouseFollower', {
    strings: JSON.parse(document.querySelector('.mouseFollowerJson').innerHTML),
    typeSpeed: 50,
    showCursor: false,
    fadeOut: true,
    onComplete: (self) => {
    },
  });
} catch (e) {}

const setFollower = (e) => {
  follower.style.top = (e.pageY + 40) + 'px';
  follower.style.left = (e.pageX + 40) + 'px';
}


const throttle = (func, limit) => {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}


document.addEventListener('mousemove', throttle(setFollower, 5));