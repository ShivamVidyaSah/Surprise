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

// Functions for card navigation (you'll need to implement these)
let isFlipped = false;
document.getElementById('flr-bloom').disabled = false;

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



// Trigger flower bloom animation and show the end message
function showFlowerBloom() {
  const flowerBloom = document.getElementById('flower-bloom');
  const endMessage = document.getElementById('end-message');
  const cardsContainer = document.getElementById('cards-container');
  const envelope = document.getElementById('envelope');

  // Hide envelope and cards with fade-out effect
  envelope.style.transition = 'opacity 1s ease';
  cardsContainer.style.transition = 'opacity 1s ease';

  envelope.style.opacity = '0';
  cardsContainer.style.opacity = '0';

  // After fade-out, hide the elements
  setTimeout(() => {
    envelope.style.display = 'none';
    cardsContainer.style.display = 'none';
  }, 1000); // Matches the fade-out duration

  // Start flower bloom animation
  flowerBloom.classList.remove('hidden');
  flowerBloom.style.animation = 'bloom 2s ease-in-out forwards';

  // Show the end message after the flower bloom completes
  setTimeout(() => {
    endMessage.classList.add('show');
  }, 2000); // Adjust delay to match the bloom animation duration
}

