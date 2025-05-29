document.addEventListener('DOMContentLoaded', () => {
  const pianoButton = document.getElementById('load-piano');
  const drumsButton = document.getElementById('load-drums');
  const unloadButton = document.getElementById('unload-instrument');
  const instrumentIframe = document.getElementById('instrument-iframe');
  const instrumentTitle = document.getElementById('instrument-title'); //

  const pianoUrl = 'https://ryutarodayo1234.github.io/webpianoformidikeys/';
  const drumsUrl = 'https://ryutarodayo1234.github.io/webstudiodrumsformidikeys/';

  function loadInstrument(url, title) {
    if (instrumentIframe) {
      // Setting the src will cause the iframe to load the new page.
      // The browser handles unloading the old page and its resources (CSS, JS).
      instrumentIframe.src = url;
    }
    if (instrumentTitle) {
      instrumentTitle.textContent = title;
    }
    // The 'loading-spinner' could be shown here before src change
    // and hidden after the iframe's 'load' event.
    // For simplicity, that's omitted here but is a good UX improvement.
  }

  if (pianoButton) {
    pianoButton.addEventListener('click', () => {
      loadInstrument(pianoUrl, 'Web Piano');
    });
  }

  if (drumsButton) {
    drumsButton.addEventListener('click', () => {
      loadInstrument(drumsUrl, 'Web Studio Drums');
    });
  }

  if (unloadButton) {
    unloadButton.addEventListener('click', () => {
      // about:blank is a safe, empty page.
      loadInstrument('about:blank', 'Web Instruments');
    });
  }

  // Optional: Set an initial state (e.g., no instrument loaded)
  if (instrumentTitle) {
      instrumentTitle.textContent = 'Web Instruments'; //
  }
});

