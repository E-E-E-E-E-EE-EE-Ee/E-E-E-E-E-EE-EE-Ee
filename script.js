const audioContext = new AudioContext();
let oscillator = null; // Declare oscillator in a scope accessible by both handlers
let osc1 = null; // Declare oscillator in a scope accessible by both handlers

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC' && !oscillator) {
    if (event.code === 'KeyC' && !osc1) {
        // Create an oscillator
        oscillator = audioContext.createOscillator(); // Assign to the shared variable
        oscillator.type = 'sawtooth';
        oscillator.frequency.value = 440;
        osc1 = audioContext.createOscillator(); // Assign to the shared variable
        osc1.type = 'sawtooth';
        osc1.frequency.value = 440;

        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass'; // Filter out higher frequencies
        filter.frequency.value = 1000;

        oscillator.connect(filter);
        osc1.connect(filter);
        filter.connect(audioContext.destination);
        oscillator.start();
        osc1.start();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyC' && oscillator) {
        oscillator.stop(); // Stop the oscillator
        oscillator.disconnect(); // Disconnect from the audio graph
        oscillator = null; // Clear the reference
    if (event.code === 'KeyC' && osc1) {
        osc1.stop(); // Stop the oscillator
        osc1.disconnect(); // Disconnect from the audio graph
        osc1 = null; // Clear the reference
    }
});
        osc1.stop(); // Stop the oscillator
        osc1.disconnect(); // Disconnect from the audio graph
        osc1 = null; // Clear the reference
    }
});
