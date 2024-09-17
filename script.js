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

document.getElementById('flr-bloom').addEventListener('click', function() {
  // Hide the envelope and cards with a fade-out effect
  const envelope = document.getElementById('envelope');
  const cardsContainer = document.getElementById('cards-container');
  const endMessage = document.getElementById('end-message');

  // Fade out the envelope and cards
  envelope.style.transition = 'opacity 1s ease, transform 1s ease';
  cardsContainer.style.transition = 'opacity 1s ease, transform 1s ease';

  envelope.style.opacity = '0';
  cardsContainer.style.opacity = '0';

  setTimeout(function() {
    // After fade-out, hide them completely
    envelope.style.display = 'none';
    cardsContainer.style.display = 'none';

    // Show the end message
    endMessage.classList.remove('hidden');
    endMessage.classList.add('show');
  }, 1000); // Matches the fade-out duration
});

// Restart function for "Yes" button (resets envelope and cards visibility)
function restartCards() {
  const envelope = document.getElementById('envelope');
  const cardsContainer = document.getElementById('cards-container');
  const endMessage = document.getElementById('end-message');

  // Hide the end message
  endMessage.classList.remove('show');
  endMessage.classList.add('hidden');

  // Show the envelope and cards again after a short delay
  setTimeout(function() {
    envelope.style.display = 'block';
    cardsContainer.style.display = 'block';

    envelope.style.opacity = '1';
    cardsContainer.style.opacity = '1';
  }, 500);
}

document.getElementById('nxt-button').addEventListener('click',function() {
   
  const display = document.getElementById('final-display');
  const msg = document.getElementById('final-message');
  const endMessage = document.getElementById('end-message');

  setTimeout(function() {
    endMessage.classList.remove('show');
    endMessage.classList.add('hidden');
  
  }, 500);
 

  setTimeout(function() {
  display.classList.remove('hidden');
  display.classList.add('show');
  }, 500);
  
})


