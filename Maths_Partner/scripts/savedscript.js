
let data = [];

if (localStorage.getItem("problems")) {
    data = JSON.parse(localStorage.getItem("problems"));
}

/* checking if there is any data stored in the `data` array. If there is data, it
creates a card for each item in the array and displays it on the DOM.
*/

if (data.length > 0) {

    /* Create Cards and Show to the Dom */

    for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        card.classList.add("problem-card");
        card.innerHTML = `
        <div class="cards"> 
            <h5>Category: ${data[i].operation}</h5>
            <h5>Problem: ${data[i].expression}</h5>
            <h4>Solution: ${data[i].result}</h4>
            <button class="deleteBtn delete-btn" data-index="${i}">Delete</button>
        </div>
    `;
        document.getElementById('historyCardsContainer').appendChild(card);
    }

    /* selecting all the elements with the class name "deleteBtn" and assigning them to the `deleteButtons` variable.

    Finally,
    delete a specific item from the data array and the local storage by clicking on the delete button associated with that item. */
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

/*  It creates a new `h1`
"No Data Found" */

else {
    let h1 = document.createElement("h1");
    h1.innerHTML = `<h1> No Data Found </h1>`;
    document.getElementById('historyCardsContainer').appendChild(h1);
}

