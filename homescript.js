const datetimeEl = document.querySelector('#datetime');

function updateDateTime() {
  const now = new Date();
  
  const fullDateTime = now.toLocaleString(undefined, {
    weekday:  'long',
    year:     'numeric',
    month:    'long',
    day:      'numeric',
    hour:     '2-digit',
    minute:   '2-digit',
    second:   '2-digit',
    hour12:   true    // ← 12-hour clock with AM/PM
  });
  
  datetimeEl.textContent = fullDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);
