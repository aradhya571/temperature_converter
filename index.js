function convert() {
  // Get the input value in Celsius
  const celsiusInput = document.getElementById('celsius');
  const celsiusValue = parseFloat(celsiusInput.value);
  
  if (!isNaN(celsiusValue)) {
      // Convert Celsius to Fahrenheit
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      const fahrenheitInput = document.getElementById('fahresult');
      fahrenheitInput.value = fahrenheitValue.toFixed(2); 
  } else {
      alert('Please enter a valid number in Celsius.');
  }
}

  