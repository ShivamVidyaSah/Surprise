// Simulate loading and fade in the content
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loading-screen').style.opacity = '0';
    setTimeout(function() {
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('content').style.opacity = '1';
    }, 500); 
  }, 1000);
});

function openEnvelope() {
  const envelope = document.getElementById('envelope');
  envelope.classList.add('open-animation');

  // Show cards after envelope animation
  setTimeout(function() {
    envelope.classList.add('disappear');
    document.getElementById('cards-container').classList.remove('hidden');
    document.getElementById('cards-container').classList.add('show');
  }, 1000); 
}

// Function to restart the card interaction
function restartCards() {
  document.getElementById('cards-container').classList.remove('show');
  document.getElementById('flower-bloom').classList.add('hidden');
  setTimeout(function() {
    document.getElementById('flower-bloom').style.display = 'none'; // Hide flower bloom
    document.getElementById('envelope').classList.remove('disappear'); // Reset envelope state
    document.getElementById('envelope').classList.remove('open-animation'); // Reset envelope animation
    document.getElementById('content').style.opacity = '1'; // Show content
    openEnvelope(); // Reopen envelope
  }, 500);
}

// Function to end the experience
function endExperience() {
  document.getElementById('flower-bloom').style.display = 'block';
  document.getElementById('end-message').style.display = 'block'; // Show ending message
}

// Function for card navigation
let isFlipped = false;
document.getElementById('flr-bloom').disabled = true;

function showPrevCard() {
  if (isFlipped) {
    // Flip the card back to the front
    document.querySelector('.card').classList.remove('flipped');
    
    // Disable the prev button, enable the next button
    document.getElementById('prev-button').disabled = true;
    document.getElementById('next-button').disabled = false;
    document.getElementById('flr-bloom').disabled = true;
    
    isFlipped = false;
  }
}

function showNextCard() {
  if (!isFlipped) {
    // Flip the card to the back
    document.querySelector('.card').classList.add('flipped');
    
    // Disable the next button, enable the prev button
    document.getElementById('next-button').disabled = true;
    document.getElementById('prev-button').disabled = false;
    document.getElementById('flr-bloom').disabled = false;
    
    isFlipped = true;
  }
}


