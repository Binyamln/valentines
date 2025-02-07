/*************************************
  1. RUN-AWAY LOGIC ON YES-BUTTON 
 *************************************/
// This function repositions the "Yes" button randomly 
// within the container whenever mouse hovers over it.
function runAwayFromCursor() {
    const yesBtn = document.getElementById('yes-button');
    const container = document.getElementById('container');
  
    // Get container's width/height
    const rect = container.getBoundingClientRect();
  
    // Subtract the button size so we don't place it partially out of container
    const maxX = rect.width - yesBtn.offsetWidth;
    const maxY = rect.height - yesBtn.offsetHeight;
  
    // Generate random new (left, top)
    const newLeft = Math.floor(Math.random() * maxX);
    const newTop = Math.floor(Math.random() * maxY);
  
    // Apply new position
    yesBtn.style.left = newLeft + 'px';
    yesBtn.style.top = newTop + 'px';
  }
  
  // Attach mouseover listener to "Yes" button to make it run away
  document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-button');
    yesBtn.addEventListener('mouseover', runAwayFromCursor);
  });
  
  
  /*************************************
    2. BUTTON CLICK HANDLER
   *************************************/
  function selectOption(option) {
    if (option === 'yes') {
      // (A) Flash rainbow colors, then show "miffyheartbaloon.png" + "I miss you so much"
      flashRainbowColors(function() {
        document.getElementById('question').style.display = 'none';
        document.getElementById('options').style.display = 'none';
        displayMiffyHeart();
      });
    } 
    else if (option === 'no') {
      // (B) No button changes text and makes yes button bigger
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
  
  
  /*************************************
    3. RAINBOW FLASH
   *************************************/
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
  
  
  /*************************************
    4. IMAGE DISPLAY FUNCTIONS 
   *************************************/
  // Show miffypink.gif on load
  function displayMiffyPink() {
    const imageContainer = document.getElementById('image-container');
    const miffyPinkImage = new Image();
    miffyPinkImage.src = 'miffypink.gif';
    miffyPinkImage.alt = 'Miffy Pink';
  
    miffyPinkImage.onload = () => {
      imageContainer.appendChild(miffyPinkImage);
    };
  }
  
  // Show miffyheartbaloon.png + "I miss you so much"
  function displayMiffyHeart() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // clear old image
  
    const miffyHeartImage = new Image();
    miffyHeartImage.src = 'miffyheartbaloon.png';
    miffyHeartImage.alt = 'Miffy Heart Balloon';
  
    miffyHeartImage.onload = () => {
      imageContainer.appendChild(miffyHeartImage);
  
      // Show hearts.gif on the left/right
      document.getElementById('heart-left').style.display = 'block';
      document.getElementById('heart-right').style.display = 'block';
  
      // Create a text element: "I miss you so much!"
      const missYouText = document.createElement('div');
      missYouText.id = 'miss-you-text';
      missYouText.innerText = 'I miss you so much!';
      imageContainer.appendChild(missYouText);
    };
  }
  
  
  /*************************************
    5. ON PAGE LOAD
   *************************************/
  // Display the initial miffypink.gif
  // We can do this on DOMContentLoaded to ensure container is available
  document.addEventListener('DOMContentLoaded', displayMiffyPink);
  