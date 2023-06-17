const answer = document.getElementById('answer');

let data = [];

if (localStorage.getItem("problems")) {
    data = JSON.parse(localStorage.getItem("problems"));
}

const fetchCall = async () => {

    const problem = document.getElementById('problem').value;
    const category = document.getElementById('category').value;
    const url = `https://newton.vercel.app/api/v2/${category}/${problem}`

    const response = await fetch(url);
    const jsonData = await response.json();
    // console.log(jsonData.result);
    data.push(jsonData);
    localStorage.setItem("problems", JSON.stringify(data));
    // console.log(data[0].result);
    // console.log(category.value, data.result);
    const fLetterCaps = category.charAt(0).toUpperCase() + category.slice(1);
    for (var i = 0; i < data.length; i++) {
        answer.innerHTML = `
        <div class="ans" id="ans">
            <h3 class="mt-10">${fLetterCaps} : ${problem} </h3>
            <div class="finalAns" id="finalAns">
                <h4 class="f" id="f">Final Answer &nbsp; : &nbsp; <b> ${data[i].result} </b></h4>
            </div>
            
        </div>
    `
    }
}


for (var i = 0; i < data.length; i++) {
    var card = document.createElement("div");
    card.classList.add("problem-card");
    card.innerHTML = `
        <div class="cards"> 
            <p>Category: ${data[i].operation}</p>
            <h3>Problem: ${data[i].expression}</h3>
            <p>Solution: ${data[i].result}</p>
            <button class="deleteBtn delete-btn" data-index="${i}">Delete</button>
        </div>
    `;
    document.getElementById('historyCardsContainer').appendChild(card);
}


var deleteButtons = document.getElementsByClassName("deleteBtn");
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function () {
        var index = this.getAttribute("data-index");
        data.splice(index, 1);
        localStorage.setItem("problems", JSON.stringify(data));
        this.parentNode.remove();
    });
}