// Global variables
var problems = [];

// Check if local storage has saved problems and load them
if (localStorage.getItem("problems")) {
    problems = JSON.parse(localStorage.getItem("problems"));
}

// DOM elements
var searchBtn = document.getElementById("searchBtn");
var searchBtn = document.getElementById("searchBtn");
var problemInput = document.getElementById("problemInput");
var categorySelect = document.getElementById("categorySelect");
var problemCardsContainer = document.getElementById("problemCardsContainer");
var historyCardsContainer = document.getElementById("historyCardsContainer");


// Event listener
searchBtn.addEventListener("click", function() {
    window.location.href = "history.html";
});


searchBtn.addEventListener("click", function() {
    var problem = problemInput.value;
    var category = categorySelect.value;

    if (problem.trim() === "") {
        alert("Please enter a math problem");
        return;
    }

    // API request
    fetch(`https://newton.vercel.app/api/v2/${category}/${encodeURIComponent(problem)}`)
        .then(response => response.json())
        .then(data => {
            var solution = data.result;

            // Create problem card
            var card = document.createElement("div");
            card.classList.add("problem-card");
            card.innerHTML = `
                <h3>${problem}</h3>
                <p>Category: ${category}</p>
                <p>Solution: ${solution}</p>
            `;

            // Add card to the container
            problemCardsContainer.appendChild(card);

            // Save the problem to localStorage
            var problemObj = {
                operation: category,
                expression: problem,
                result: solution
            };
            problems.push(problemObj);
            localStorage.setItem("problems", JSON.stringify(problems));
        })
        .catch(error => {
            console.log(error);
            alert("An error occurred while fetching the solution.");
        });

    // Clear input fields
    problemInput.value = "";
});

// Load history cards
if (window.location.href.includes("index.html")) {
    for (var i = 0; i < problems.length; i++) {
        var card = document.createElement("div");
        card.classList.add("problem-card");
        card.innerHTML = `
            <h3>${problems[i].expression}</h3>
            <p>Category: ${problems[i].operation}</p>
            <p>Solution: ${problems[i].result}</p>
            <button class="deleteBtn" data-index="${i}">Delete</button>
        `;
        historyCardsContainer.appendChild(card);
    }

    // Delete button event listener
    var deleteButtons = document.getElementsByClassName("deleteBtn");
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function() {
            var index = this.getAttribute("data-index");
            problems.splice(index, 1);
            localStorage.setItem("problems", JSON.stringify(problems));
            this.parentNode.remove();
        });
    }
}
