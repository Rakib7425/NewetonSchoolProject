const answer = document.getElementById('answer');

const data = [];


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

    answer.innerHTML = `
        <div class="ans" id="ans">
            <h3 class="mt-10">${fLetterCaps} : ${problem} </h3>

            <div class="finalAns" id="finalAns">
                <h4 class="f" id="f">Final Answer &nbsp; : &nbsp; <b> ${data[0].result} </b></h4>
            </div>
            <div class="delete">
                <button class="delete-btn" id="delete" role="button">Delete</button>
            </div>
        </div>
    `
}


