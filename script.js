// 1. RUN-AWAY LOGIC FOR "NO" BUTTON
function runAwayFromCursor() {
    const noBtn = document.getElementById('no-button');
    const container = document.getElementById('container');
  
    // Container dimensions
    const rect = container.getBoundingClientRect();
  
    // Subtract the button size so it doesn't go partially off screen
    const maxX = rect.width - noBtn.offsetWidth;
    const maxY = rect.height - noBtn.offsetHeight;
  
    // Generate random new (left, top)
    const newLeft = Math.floor(Math.random() * maxX);
    const newTop = Math.floor(Math.random() * maxY);
  
    // Apply the new position
    noBtn.style.left = newLeft + 'px';
    noBtn.style.top = newTop + 'px';
  }
  
  // Attach mouseover listener to "No" button after DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('no-button');
    noBtn.addEventListener('mouseover', runAwayFromCursor);
  
    // Display initial image (miffypink.gif) once everything is ready
    displayMiffyPink();
  });
  
  /************************************
   2. CLICK HANDLER FOR YES/NO BUTTONS
   ************************************/
  function selectOption(option) {
    if (option === 'yes') {
      // Flash rainbow, then show "miffyheartbaloon.png"
      flashRainbowColors(function() {
        document.getElementById('question').style.display = 'none';
        document.getElementById('options').style.display = 'none';
        displayMiffyHeart();
      });
    } 
    else if (option === 'no') {
      // If user somehow manages to click "No", do the usual "You sure?" + enlarge "Yes"
      document.getElementById('no-button').innerText = 'You sure?';
      const yesButton = document.getElementById('yes-button');
      const currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
      const newSize = parseFloat(currentFontSize) * 2;
      yesButton.style.fontSize = newSize + 'px';
    } 
    else {
      alert('Invalid option!');
    }
  }
  
  /************************************
   3. RAINBOW FLASH
   ************************************/
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
  
  /************************************
   4. IMAGE DISPLAY FUNCTIONS
   ************************************/
  // Show miffypink.gif initially
  function displayMiffyPink() {
    const imageContainer = document.getElementById('image-container');
    const miffyPinkImage = new Image();
    miffyPinkImage.src = 'miffypink.gif';
    miffyPinkImage.alt = 'Miffy Pink';
  
    miffyPinkImage.onload = () => {
      imageContainer.innerHTML = '';
      imageContainer.appendChild(miffyPinkImage);
    };
  }
  
  // Show miffyheartbaloon.png + "I miss you so much!"
  function displayMiffyHeart() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
  
    const miffyHeartImage = new Image();
    miffyHeartImage.src = 'miffyheartbaloon.png';
    miffyHeartImage.alt = 'Miffy Heart Balloon';
  
    miffyHeartImage.onload = () => {
      imageContainer.appendChild(miffyHeartImage);
  
      // Reveal hearts on left/right
      document.getElementById('heart-left').style.display = 'block';
      document.getElementById('heart-right').style.display = 'block';
  
      // Create "I miss you so much!"
      const missYouText = document.createElement('div');
      missYouText.id = 'miss-you-text';
      missYouText.innerText = 'I miss you so much!';
      imageContainer.appendChild(missYouText);
    };
  }
  