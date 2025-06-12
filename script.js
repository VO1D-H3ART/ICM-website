// We need only 4 QR codes Because summer school runs from monday to Thrusday
// GET THE CORRECT QR CODES 
//SINCE THERE ARE 7 DAYS IN A WEEK WE NEED TO MAKE SURE ON SATURDAY AND SUNDAY NOTHING HAPPENS
// List of QR code URLs for Monday–Friday
const qrCodes = [
  "https://api.qrserver.com/v1/create-qr-code/?data=Monday&size=200x200",   // Monday
  "https://api.qrserver.com/v1/create-qr-code/?data=Tuesday&size=200x200",  // Tuesday
  "https://api.qrserver.com/v1/create-qr-code/?data=Wednesday&size=200x200",// Wednesday
  "https://api.qrserver.com/v1/create-qr-code/?data=Thursday&size=200x200", // Thursday
  "https://api.qrserver.com/v1/create-qr-code/?data=Friday&size=200x200"    // Friday
];

function updateQRCode() {
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const qrImg = document.getElementById("qrcode");

  if (today >= 1 && today <= 5) {
    qrImg.src = qrCodes[today - 1]; // Monday is index 0
  } else {
    qrImg.alt = "No QR code available for weekends.";
    qrImg.style.display = "none"; // or show a weekend QR code if you want
  }
}
document.addEventListener("DOMContentLoaded", function() {
  function showDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: true
  };
  document.getElementById("datetime").textContent = now.toLocaleString(undefined, options);
}

showDateTime();
  
});


updateQRCode();
