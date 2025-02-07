// script.js

// 1. Make the NO button run away on mouseover
function runAwayFromCursor() {
    const noBtn = document.getElementById('no-button');
    const container = document.getElementById('container');
  
    // Get container's dimensions
    const rect = container.getBoundingClientRect();
  
    // Subtract the button size to avoid going partially offscreen
    const maxX = rect.width - noBtn.offsetWidth;
    const maxY = rect.height - noBtn.offsetHeight;
  
    // Random new (left, top)
    const newLeft = Math.floor(Math.random() * maxX);
    const newTop = Math.floor(Math.random() * maxY);
  
    // Apply the new position
    noBtn.style.left = newLeft + 'px';
    noBtn.style.top = newTop + 'px';
  }
  
  // 2. Attach the mouseover listener to the NO button (after DOM loads)
  document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('no-button');
    noBtn.addEventListener('mouseover', runAwayFromCursor);
  
    // Show the initial miffypink.gif
    displayMiffyPink();
  });
  
  /***********************************************
   3. Button click handler (YES or NO)
  ***********************************************/
  function selectOption(option) {
    if (option === 'yes') {
      // Flash rainbow, then show hearts and "miffyheartbaloon.png"
      flashRainbowColors(() => {
        document.getElementById('question').style.display = 'none';
        document.getElementById('options').style.display = 'none';
        displayMiffyHeart();
      });
    } else if (option === 'no') {
      // If user manages to click "No"
      document.getElementById('no-button').innerText = 'You sure?';
      // Increase font size of "Yes" button
      const yesButton = document.getElementById('yes-button');
      const currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
      const newSize = parseFloat(currentFontSize) * 2;
      yesButton.style.fontSize = newSize + 'px';
    } else {
      alert('Invalid option!');
    }
  }
  
  /***********************************************
   4. Flash rainbow effect
  ***********************************************/
  function flashRainbowColors(callback) {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;
    const interval = setInterval(() => {
      document.body.style.backgroundColor = colors[i];
      i = (i + 1) % colors.length;
    }, 200);
  
    setTimeout(() => {
      clearInterval(interval);
      document.body.style.backgroundColor = '';
      if (callback) callback();
    }, 2000);
  }
  
  /***********************************************
   5. Image display
  ***********************************************/
  // Show miffypink.gif on page load
  function displayMiffyPink() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
  
    const miffyPinkImage = new Image();
    miffyPinkImage.src = 'miffypink.gif'; // must exist in same folder
    miffyPinkImage.alt = 'Miffy Pink';
  
    miffyPinkImage.onload = () => {
      imageContainer.appendChild(miffyPinkImage);
    };
  }
  
  // Show miffyheartbaloon.png and hearts, plus "I miss you so much!"
  function displayMiffyHeart() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
  
    const miffyHeartImage = new Image();
    miffyHeartImage.src = 'miffyheartbaloon.png'; // must exist in same folder
    miffyHeartImage.alt = 'Miffy Heart Balloon';
  
    miffyHeartImage.onload = () => {
      imageContainer.appendChild(miffyHeartImage);
  
      // Reveal the hearts only after YES
      document.getElementById('heart-left').style.display = 'block';
      document.getElementById('heart-right').style.display = 'block';
  
      // Add "I miss you so much!"
      const missYouText = document.createElement('div');
      missYouText.id = 'miss-you-text';
      missYouText.innerText = 'I miss you so much!';
      imageContainer.appendChild(missYouText);
    };
  }
  