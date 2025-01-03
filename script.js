// Get the input field by its id 'fname'
const inputField = document.getElementById('fname');

// Add an event listener for the 'blur' event (when the input loses focus)
inputField.addEventListener('blur', function() {
  // Convert the input value to uppercase
  inputField.value = inputField.value.toUpperCase();
});
