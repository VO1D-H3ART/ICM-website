// script.js
;(function() {
  const datetimeEl = document.getElementById('datetime');
  const qrEl       = document.getElementById('qrcode');

  // map JS getDay() number → capitalized file-base
  const dayFiles = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday,'
    'Friday',
    'Saturday'
  ];

  function updateDisplay() {
    const now = new Date();

    // date + time
    const dateStr = now.toLocaleDateString(undefined, {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString(undefined, {
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    datetimeEl.textContent = `${dateStr} — ${timeStr}`;

    // pick correct file
    const dow      = now.getDay();           // 0=Sunday…6=Saturday
    const fileBase = dayFiles[dow] + '.png'; // e.g. "Monday.png"
    // if you renamed your folder to "qr-codes":
    qrEl.src = `qr-codes/${fileBase}`;
    qrEl.alt = `QR Code for ${dayFiles[dow]}`;
  }

  updateDisplay();
  setInterval(updateDisplay, 1000);
})();
