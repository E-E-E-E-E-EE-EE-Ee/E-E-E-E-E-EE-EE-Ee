const audioContext = new AudioContext();

document.addEventListener('keydown', (event) => {
  // Check that the key is 'C' and an oscillator is not currently active
  if (event.code === 'KeyC' && !window.osc1) {
    // Create a NEW oscillator every time the key is pressed
    const osc1 = audioContext.createOscillator();
    window.osc1 = osc1; // Store reference on the window object (or other accessible scope)

    osc1.type = 'sawtooth';
    osc1.frequency.value = 440;

    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1000;

    osc1.connect(filter);
    filter.connect(audioContext.destination);
    osc1.start();
  }
});

document.addEventListener('keyup', (event) => {
  // Check for the key and ensure an oscillator is active
  if (event.code === 'KeyC' && window.osc1) {
    window.osc1.stop();
    window.osc1.disconnect();
    window.osc1 = null; // Clear the reference for the next keypress
  }
});
