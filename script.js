// Simulate loading and fade in the content
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loading-screen').style.opacity = '0';
    setTimeout(function() {
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('content').style.opacity = '1';
    }, 500); 
  }, 3000);
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
function showPrevCard() {
  // Implement logic to show previous card
}

function showNextCard() {
  // Implement logic to show next card
}
