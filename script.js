// Show an alert when the page loads
window.addEventListener("load", function () {
    alert("Welcome to my static site!");
  });
  
  // Change the text in the paragraph when the button is clicked
  function changeText() {
    const para = document.getElementById("dynamic-text");
    para.textContent = "You clicked the button! 🎉";
  }
  