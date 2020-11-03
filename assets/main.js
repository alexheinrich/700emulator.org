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

  const setFollower = (e) => {
    follower.style.top = (e.pageY + 40) + 'px';
    follower.style.left = (e.pageX + 40) + 'px';
  }
  document.addEventListener('mousemove', throttle(setFollower, 5));
} catch (e) {}


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



const canvas = document.querySelector('.canvas')
if (canvas) {

  const ctx = canvas.getContext('2d')
  ctx.beginPath();
  ctx.moveTo(0, 680);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.strokeStyle = '#09D323';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  canvas.onclick = (e) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.fillRect(x - 1, y - 1, 5, 5);
  }
}