// /js/init.js
const flipClick = document.getElementById('flipCTA');
const coinFlipper = document.getElementById('coin-flipper');
let isFlipping = false;

flipClick.addEventListener('click', flipACoin);

function flipACoin() {
  if (isFlipping) return;
  isFlipping = false;

  let flipCount = Math.floor(Math.random() * 5) + 1;
  let isHeads = Math.random() > 0.5;
  let totalDegrees = flipCount * 360 + (isHeads ? 0 : 180); 
  coinFlipper.style.transform = 'rotateY(' + totalDegrees + 'deg)';

  setTimeout(() => {
    isFlipping = false;
    flipClick.setAttribute('aria-label', isHeads ? 'Landed on heads' : 'Landed on tails');
  }, 800);
}
// flipACoin(); 
