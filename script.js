function updateDateTime() {
  // create a new `Date` object
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();

   // update the `textContent` property of the `span` element with the `id` of `datetime`
   document.querySelector('#datetime').textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);