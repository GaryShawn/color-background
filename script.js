// console.log("JavaScript file is connected! And Working");

// // console.log("Hello, Console!"); // Logs text in the browser console
// // alert("This is an alert! from javascript"); // Shows a pop-up alert
// document.write("This text is written in HTML! by Javascript"); // Writes directly into HTML

// let name = "John"; // String
// let age = 25; // Number
// let isStudent = true; // Boolean
// console.log(name, age, isStudent);


// function greet() {
//     alert("Hello, Fuction Test working");
// }

// function changeText() {
//     document.getElementById("myText").innerHTML = "Text changed from javascript!";
// }

// Function to generate a random color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change background color
function changeBackgroundColor() {
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;

    let audio = new Audio("audio.mp3");
    audio.play();
    
    // Select or create the color display paragraph
    let colorText = document.getElementById("colorText");
    
    if (!colorText) { // If the element doesn't exist, create it
        colorText = document.createElement("p");
        colorText.id = "colorText";
        document.body.appendChild(colorText);
    }

    // Update the text inside the paragraph
    colorText.textContent = `Current Color: Hex value ${newColor}`;

    // Fade effect: remove old fade, then add new fade-in class
    colorText.style.opacity = 0;  // Start with invisible text
    setTimeout(() => {
        colorText.style.transition = "opacity 1s ease"; // Add transition
        colorText.style.opacity = 1;  // Fade in
    }, 10);  // Tiny delay to trigger transition

    // Increment the click counter
    clickCount++;

    // Update the counter on the page
    document.getElementById("counter").textContent = `Click count: ${clickCount}`;
}

// Event listener for button click
document.getElementById("colorBtn").addEventListener("click", changeBackgroundColor);


// Counter variable
let clickCount = 0;

// Function to reset counter
function resetCounter() {
    clickCount = 0;
    document.getElementById("counter").textContent = "Click count: 0";
}

// Event listener for reset button
document.getElementById("resetBtn").addEventListener("click", resetCounter);

// Handle form submission and display greeting
document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the name entered by the user
    let userName = document.getElementById("userName").value;

    // Display the greeting message
    let greetingMessage = document.getElementById("greetingMessage");
    
    if (userName) {
        greetingMessage.textContent = `Hello, ${userName}! Welcome to our site.`;
    } else {
        greetingMessage.textContent = "Please enter your name!";
    }

    // Clear the input field after submission
    document.getElementById("userName").value = "";
});


