// Get the HTML elements
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");

// Add click event listener to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonText = button.getAttribute("data-value");

    // Clear the display
    if (buttonText === "C") {
      result.value = "";
    }
    // Delete last character
    else if (buttonText === "backspace") {
      result.value = result.value.slice(0, -1);
    }
    // Calculate result
    else if (buttonText === "=") {
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = "Error";
      }
    }
    // Perform mathematical operation
    else {
      result.value += buttonText;
    }
  });
});
