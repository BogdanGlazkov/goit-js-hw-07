const inputEl = document.querySelector("#validation-input");
const lengthEl = inputEl.dataset.length;

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == lengthEl) {
      inputEl.classList.remove("invalid");
      inputEl.classList.add("valid");
  }

   if (
     event.currentTarget.value.length < lengthEl ||
     event.currentTarget.value.length > lengthEl
   ) {
     inputEl.classList.add("invalid");
     inputEl.classList.remove("valid");
   }

   if (!event.currentTarget.value) {
      inputEl.classList.remove("invalid");
  }
});
