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
    for (let i = 0; i < data.length; i++) {
        answer.innerHTML = `
        <div class="ans" id="ans">
            <h3 class="mt-10">${fLetterCaps} : ${problem} </h3>
            <div class="finalAns" id="finalAns">
                <h3 class="f" id="f">Final Answer &nbsp; : &nbsp; <b> ${data[i].result} </b></h3>
            </div>
            
        </div>
    `
    }

}

//  Create Cards and Show to the Dom
for (var i = 0; i < data.length; i++) {
    var card = document.createElement("div");
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