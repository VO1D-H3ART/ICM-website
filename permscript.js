// script.js
;(function() {
  const datetimeEl = document.getElementById('datetime');
  const loadingEl  = document.getElementById('loading');
  const qrEl = document.getElementById('qrcode');

  document.getElementById('interns').addEventListener('click', function(){
    window.location.href = 'index.html'
  });

  document.getElementById('teachers').addEventListener('click', function(){
    window.location.href = 'teachers.html'
  });

  // File base names for each day (0=Sunday…6=Saturday)
  const dayFiles = [
    'Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  // Log setup errors immediately
  if (!datetimeEl || !loadingEl || !qrEl) {
    console.error('One of the required elements is missing:', {
      datetimeEl, loadingEl, qrEl
    });
    return;
  }

  // When the image loads successfully, hide the loader
  qrEl.addEventListener('load', () => {
    loadingEl.style.display = 'none';
    qrEl.style.display = 'block';
  });

  // If the image fails to load, show an error
  qrEl.addEventListener('error', () => {
    loadingEl.textContent = `⚠️ Couldn't load QR: ${qrEl.src}`;
    console.error('Failed to load QR image:', qrEl.src);
  });

  function updateDisplay() {
    const now = new Date();

    // Update date + time
    const dateStr = now.toLocaleDateString(undefined, {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString(undefined, {
      hour: '2-digit', minute: '2-digit',
    });
    datetimeEl.textContent = `${dateStr} — ${timeStr}`;

    // Show loader while we swap images
    loadingEl.style.display = 'block';
    qrEl.style.display = 'none';

    // Build the path
    const dow = now.getDay(); // 0–6
    const fileName = `${dayFiles[dow]}.png`; // e.g. "Saturday.png"
    const fullPath = `qr-codes/perm-empolyees/${fileName}`;

    console.log('Setting QR src →', fullPath);
    qrEl.src = fullPath;
    qrEl.alt = `QR Code for ${dayFiles[dow]}`;
  }

  // First run + tick every second
  updateDisplay();
  setInterval(updateDisplay, 60000);
})();

// define this function will redirect to the home.html file
function redirectHome() {
  window.location.href = 'home.html';
}

// set a 10-second timer, then fire redirectHome
setTimeout(redirectHome, 10000);
