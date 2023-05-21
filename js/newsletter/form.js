const scriptURL =
   "https://script.google.com/macros/s/AKfycbwf5tE8C8jQ5HAlzT7gKvI5j7xvqWOjMieed13VxzMWaN52qCOGb8WoKFngPlglo7vIwA/exec";
const form = document.forms["submit-to-google-sheet"];
const subscribedSpan = document.getElementById("subscribed");

/*form.addEventListener("submit", (e) => {
   e.preventDefault();
   fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
         subscribedSpan.innerHTML = "Thank you for subscribing!";
         setTimeout(function () {
            subscribedSpan.innerHTML = "";
         }, 15000);
         form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
});
*/

function onSubmit() {
   fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
         subscribedSpan.innerHTML = "Thank you for subscribing!";
         setTimeout(function () {
            subscribedSpan.innerHTML = "";
         }, 15000);
         form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
}
