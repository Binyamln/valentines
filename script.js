// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors, then show the Valentine image
        flashRainbowColors(function() {
            // Hide the question area
            document.getElementById('question').style.display = 'none';
            document.getElementById('options').style.display = 'none';
            // Display the "miffyheartbaloon.png"
            displayMiffyHeart();
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?';
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Double the font size
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the initial image (miffypink.gif)
function displayMiffyPink() {
    var imageContainer = document.getElementById('image-container');
    var miffyPinkImage = new Image();
    miffyPinkImage.src = 'miffypink.gif'; 
    miffyPinkImage.alt = 'Miffy Pink';

    miffyPinkImage.onload = function() {
        imageContainer.appendChild(miffyPinkImage);
    };
}

// Function to display the "Yes" image (miffyheartbaloon.png) and show hearts
function displayMiffyHeart() {
    var imageContainer = document.getElementById('image-container');
    // Clear whatever was there
    imageContainer.innerHTML = '';

    var miffyHeartImage = new Image();
    miffyHeartImage.src = 'miffyheartbaloon.png'; 
    miffyHeartImage.alt = 'Miffy Heart Balloon';

    miffyHeartImage.onload = function() {
        imageContainer.appendChild(miffyHeartImage);

        // Show hearts.gif on left and right
        document.getElementById('heart-left').style.display = 'block';
        document.getElementById('heart-right').style.display = 'block';
    };
}

// Show miffypink.gif initially
displayMiffyPink();



// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
      alert("Yay! You clicked 'Yes' (somehow)!");
      // ... any other code you want to run on "Yes"
    } else if (option === 'no') {
      document.getElementById('no-button').innerText = 'You sure?';
    } else {
      alert('Invalid option!');
    }
  }
  
  // (Optional) Flash rainbow colors
  function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
      document.body.style.backgroundColor = colors[i];
      i = (i + 1) % colors.length;
    }, 200);
  
    setTimeout(function() {
      clearInterval(interval);
      document.body.style.backgroundColor = '';
      if (callback) callback();
    }, 2000);
  }
  
  /* --------------------
     RUN-AWAY BUTTON LOGIC
     -------------------- */
  function runAway() {
    var yesBtn = document.getElementById('yes-button');
    var container = document.getElementById('container');
  
    // Container's bounding rectangle (for width/height)
    var rect = container.getBoundingClientRect();
  
    // Subtract the button's width/height so it doesn't go out of bounds
    var maxX = rect.width - yesBtn.offsetWidth;
    var maxY = rect.height - yesBtn.offsetHeight;
  
    // Random new position
    var newLeft = Math.floor(Math.random() * maxX);
    var newTop = Math.floor(Math.random() * maxY);
  
    // Apply the new position
    yesBtn.style.left = newLeft + 'px';
    yesBtn.style.top = newTop + 'px';
  }
  
  // Add an event listener to the "Yes" button so it moves on mouseover
  document.getElementById('yes-button').addEventListener('mouseover', runAway);
  