const audioContext = new AudioContext();
let osc1 = null; // Declare oscillator in a scope accessible by both handlers
let osc2 = null; // Declare oscillator in a scope accessible by both handlers
let osc3 = null; // Declare oscillator in a scope accessible by both handlers

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC' && !osc1) {
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC' && !osc2) {
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC' && !osc3) {
        // Create an oscillator
        osc1 = audioContext.createOscillator(); // Assign to the shared variable
        osc2 = audioContext.createOscillator(); // Assign to the shared variable
        osc3 = audioContext.createOscillator(); // Assign to the shared variable
        osc1.type = 'sawtooth';
        osc1.type = 'sawtooth';
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

document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyC' && osc1) {
        osc1.stop(); // Stop the oscillator
        osc1.disconnect(); // Disconnect from the audio graph
        osc1 = null; // Clear the reference
    }
});
