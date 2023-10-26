//reference to the strengths and education sections
const strengthsSection = document.getElementById("strengths");
const educationSection = document.getElementById("education");

//reference to the "Show More" button for strengths
const strengthsButton = document.getElementById("strengths-button");

// Set an initial state
let strengthsExpanded = false;

// Function to chck the visibility of the strengths section
function toggleStrengths() {
    strengthsExpanded = !strengthsExpanded;
    strengthsSection.querySelectorAll("p").forEach(p => {
        p.style.display = strengthsExpanded ? "block" : "none";
    });
    strengthsButton.innerText = strengthsExpanded ? "Show Less" : "Show More";
}

// "Show More" button for strengths
strengthsButton.addEventListener("click", toggleStrengths);

// Initial setup to hide the strength paragraphs
strengthsSection.querySelectorAll("p").forEach(p => {
    p.style.display = "none";
});
