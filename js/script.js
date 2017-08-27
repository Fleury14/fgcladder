const tickerSub = document.querySelector('#ticker-subject');
const tickerText = document.querySelector('#ticker-text');
let textContent = [];
let currentItem = 0;

// content here
textContent.push(['Recent Matches - Tekken', '8/16: (2) Domezy(Kat) def. (1) Reckless(Steve/Hwo) 5-1.']);
textContent.push(['Recent Matches - Tekken', '8/16: (4) Fobi_Yo(Yoshi/Jack) def. (5) Fleury14(Lars) 5-2.']);
textContent.push(['Recent Matches - Tekken', '8/3: (6) Fleury14(Lars) def. (5) Jard(Paul) 5-1.']);
textContent.push(['Recent Matches - Tekken', '7/24: (3) Eraldo_Coil def. (4) Fobi_Yo 5-3.']);
textContent.push(['Rankings - Tekken', '1. Domezy (2-0)']);
textContent.push(['Rankings - Tekken', '2. Reckless (1-1)     3. Eraldo_Coil (2-1)']);
textContent.push(['Rankings - Tekken', '4. Fobi_Yo (2-1)     5. Fleury14 (1-3)']);


function itemCheck(num) {
  let x = num + 1;
  if (x == textContent.length) {x = 0}
  return x;
}

function nextItem() {
  let x = currentItem + 1;
  
  if(x==textContent.length) {currentItem=0;}
  else {currentItem++;}
  
}

function nextDisplay() {
  
  let x = itemCheck(currentItem);
  if( textContent[currentItem][0] != textContent[x][0] ) {
    tickerSub.classList.add('hidden');
  }
  
  tickerText.classList.add('hidden');
  console.log(itemCheck(currentItem));  
  setTimeout(function() {
    nextItem();

    tickerSub.innerText = textContent[currentItem][0];
    tickerText.innerText = textContent[currentItem][1];
    tickerText.classList.remove('hidden');
    if (tickerSub.classList.contains('hidden')) {
      tickerSub.classList.remove('hidden');
    }
  }, 700);
  
} //end func

tickerSub.innerText = textContent[0][0];
tickerText.innerText = textContent[0][1];

setInterval(nextDisplay, 4000);

