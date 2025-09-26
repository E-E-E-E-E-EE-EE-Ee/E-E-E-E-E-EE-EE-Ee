const audioContext = new AudioContext();
let oscillator = null; // Declare oscillator in a scope accessible by both handlers

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC' && !oscillator) {
        // Create an oscillator
        oscillator = audioContext.createOscillator(); // Assign to the shared variable
        oscillator.type = 'sawtooth';
        oscillator.frequency.value = 440;

        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass'; // Filter out higher frequencies
        filter.frequency.value = 1000;

        oscillator.connect(filter);
        filter.connect(audioContext.destination);
        oscillator.start();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyC' && oscillator) {
        oscillator.stop(); // Stop the oscillator
        oscillator.disconnect(); // Disconnect from the audio graph
        oscillator = null; // Clear the reference
    }
});
