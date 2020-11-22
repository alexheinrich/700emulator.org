import Typed from 'typed.js';
import { StateHandler } from './scripts/StateHandler.js';
import { InstrumentDesigner } from './scripts/modules/InstrumentDesigner.js';
import { BuchlaFPU } from './scripts/modules/BuchlaFPU.js';


// window.oncontextmenu = function goBack(e) {
//   e.preventDefault();
//   window.location.href = '/index.html';
// };

const follower = document.querySelector('.mouseFollower');

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
} catch (e) { 
  // console.error(e)
}



const stateHandler = new StateHandler()
const { addFunctionPoint, removeLastFunctionPoint } = stateHandler

const instrumentDesignerEl = document.querySelector('.instrument-designer')
const buchlaFPU = new BuchlaFPU('sdfsdf')

if (instrumentDesignerEl) {
  const instrumentDesigner = new InstrumentDesigner(instrumentDesignerEl, stateHandler.state, addFunctionPoint, removeLastFunctionPoint)
  document.addEventListener('updateUI', function (event) {
    instrumentDesigner.updateUI(event.detail.state)
  })
  document.addEventListener('triggerFunction', function (event) {
    buchlaFPU.triggerFunction(event.detail.state)
  })
}
