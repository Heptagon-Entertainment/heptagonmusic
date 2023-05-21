const scriptURL =
   "https://script.google.com/macros/s/AKfycbwPRSDiZYH0EYju2vB-XDqyq6wGtTNbnZ6unQr_5RRlQvkb_zh9pDgvej23qgjVzvZ6DA/exec";
const form = document.getElementById("emailForm");
const unsubscribedSpan = document.getElementById("unsubscribed");

function onSubmit(event) {
   event.preventDefault();

   const emailInput = form.querySelector("input[placeholder='Email address']");
   const email = emailInput.value.trim();

   fetch(scriptURL, {
      method: "POST",
      headers: {
         "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${encodeURIComponent(email)}`,
   })
      .then((response) => {
         if (response.ok) {
            unsubscribedSpan.textContent =
               "You have been unsubscribed from our newsletter.";
            form.reset();
         } else {
            throw new Error("Error occurred while unsubscribing.");
         }
      })
      .catch((error) => {
         console.error("Error!", error.message);
         unsubscribedSpan.textContent =
            "An error occurred. Please try again later.";
      });
}

form.addEventListener("submit", onSubmit);
