import Typed from 'typed.js';
import { StateHandler } from './scripts/StateHandler.js';
import { InstrumentDesigner } from './scripts/modules/InstrumentDesigner.js';

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

const stateHandler = new StateHandler()
const { addFunctionPoint } = stateHandler

const instrumentDesignerEl = document.querySelector('.instrument-designer')
if (instrumentDesignerEl) {
  const instrumentDesigner = new InstrumentDesigner(instrumentDesignerEl, stateHandler.state, addFunctionPoint)
  document.addEventListener('updateUI', function (event) {
    instrumentDesigner.updateUI(event.detail.state)
  })
}

