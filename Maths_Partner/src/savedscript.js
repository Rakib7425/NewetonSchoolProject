let data = [];

if (localStorage.getItem("problems")) {
    data = JSON.parse(localStorage.getItem("problems"));
}

if (data.length > 0) {
    //  Create Cards and Show to the Dom
    for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        card.classList.add("problem-card");
        card.innerHTML = `
        <div class="cards"> 
            <h4>Category: ${data[i].operation}</h4>
            <h4>Problem: ${data[i].expression}</h4>
            <h3>Solution: ${data[i].result}</h3>
            <button class="deleteBtn delete-btn" data-index="${i}">Delete</button>
        </div>
    `;
        document.getElementById('historyCardsContainer').appendChild(card);
    }

    let deleteButtons = document.getElementsByClassName("deleteBtn");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            data.splice(index, 1);
            localStorage.setItem("problems", JSON.stringify(data));
            this.parentNode.remove();
        });
    }
}
else {
    let h1 = document.createElement("h1");
    h1.innerHTML = `<h1> No Data Found </h1>`;
    document.getElementById('historyCardsContainer').appendChild(h1);
}

