const qs = (selector) => document.querySelector(selector);
const textInput = qs("#name-input");
const textOutput = qs("#name-output");

textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value;
  if(event.currentTarget.value.length === 0){
   textOutput.textContent = "Anonymous";
    }
      console.log(textOutput.textContent);
});