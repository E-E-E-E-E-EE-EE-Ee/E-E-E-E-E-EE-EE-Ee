const audioContext = new AudioContext();

// Create an oscillator
const oscillator = audioContext.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 440;

// Create a filter node
const filter = audioContext.createBiquadFilter();
filter.type = 'lowpass'; // Filter out higher frequencies
filter.frequency.value = 1000;

// Connect the nodes in a chain
oscillator.connect(filter);
filter.connect(audioContext.destination);

// Start the sound
oscillator.start();
