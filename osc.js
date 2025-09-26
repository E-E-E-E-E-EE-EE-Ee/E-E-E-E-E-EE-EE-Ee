// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create an oscillator node
const oscillator = audioContext.createOscillator();

// Set the wave type (e.g., 'sine', 'square', 'sawtooth', 'triangle')
oscillator.type = 'sawtooth'; 

// Set the frequency of the sound in Hz (e.g., 440 Hz for A4)
oscillator.frequency.setValueAtTime(440, audioContext.currentTime);

// Connect the oscillator to the audio output (speakers)
oscillator.connect(audioContext.destination);

// Start the oscillator
oscillator.start();

// Stop the oscillator after a certain duration (e.g., 2 seconds)
// Note: You cannot call start() again on a stopped oscillator.
// To play the sound again, you need to create a new oscillator.
oscillator.stop(audioContext.currentTime + 2); 
