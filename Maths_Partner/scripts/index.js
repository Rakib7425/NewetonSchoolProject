const answer = document.getElementById('answer');

let data = [];

if (localStorage.getItem("problems")) {
    data = JSON.parse(localStorage.getItem("problems"));
}

const fetchCall = async () => {

    const problem = document.getElementById('problem').value;
    const category = document.getElementById('category').value;
    const url = `https://newton.vercel.app/api/v2/${category}/${encodeURIComponent(problem)}`

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
            <h2 class="mt-10">${fLetterCaps} : ${problem} </h2>
            <div class="finalAns" id="finalAns">
                <h2 class="f" id="f">Final Answer : &nbsp; <b> ${data[i].result} </b></h2>
            </div>
        </div>
    `
    }

}

