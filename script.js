const audioContext = new AudioContext();
let osc1 = null; // Declare oscillator in a scope accessible by both handlers

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyQ' && !osc1) {
        // Create an oscillator
        osc1 = audioContext.createOscillator(); // Assign to the shared variable
        osc1.type = 'sawtooth';
        osc1.frequency.value = 440;

        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass'; // Filter out higher frequencies
        filter.frequency.value = 1000;

        osc1.connect(filter);
        filter.connect(audioContext.destination);
        osc1.start();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyW' && !osc2) {
        // Create an oscillator
        osc2 = audioContext.createOscillator(); // Assign to the shared variable
        osc2.type = 'square';
        osc2.frequency.value = 432.5;

        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass'; // Filter out higher frequencies
        filter.frequency.value = 1000;

        osc2.connect(filter);
        filter.connect(audioContext.destination);
        osc2.start();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyQ' && osc1) {
        osc1.stop(); // Stop the oscillator
        osc1.disconnect(); // Disconnect from the audio graph
        osc1 = null; // Clear the reference
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyW' && osc2) {
        osc2.stop(); // Stop the oscillator
        osc2.disconnect(); // Disconnect from the audio graph
        osc2 = null; // Clear the reference
    }
});
