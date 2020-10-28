// Load jQuery from NPM
import $ from 'jquery';
import Typed from 'typed.js';

window.jQuery = $;
window.$ = $;

window.oncontextmenu = function goBack(e) {
  e.preventDefault();
  window.location.href = 'index.html';
};

const follower = $('.mouseFollower');

const typed = new Typed('.mouseFollower', {
  strings: [
    'Welcome to the page of the Buchla 700 emulator.',
    'It mimics the operating system of the 700.',
    'This is the main menu. Click on one of items to get more info.',
  ],
  typeSpeed: 50,
  showCursor: false,
  fadeOut: true,
  onComplete: (self) => {
    $(self).hide();
    $(self).css('display', 'none');
    console.log(self);
  },
});

$(document).mousemove((e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;
  follower.css({
    top: mouseY - $(window).scrollTop() + 40,
    left: mouseX + 40,
  });
});
