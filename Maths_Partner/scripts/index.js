const answer = document.getElementById('answer');


const fetchCall = async () => {
    const data = [];
    const problem = document.getElementById('problem').value;
    const category = document.getElementById('category').value;
    const url = `https://newton.vercel.app/api/v2/${category}/${problem}`
    // console.log(url);

    const response = await fetch(url);
    const jsonData = await response.json();
    // console.log(jsonData.result);
    data.push(jsonData);
    // console.log(data[0].result);
    // console.log(category.value, data.result);
    answer.innerHTML = `
        <div class="ans" id="ans">
            <h3 class="mt-10">${category} : ${problem} </h3>

            <div class="finalAns" id="finalAns">
                <h4 class="f" id="f">Final Answer &nbsp; &nbsp; <b> ${data[0].result} </b></h4>
            </div>
            <div class="delete">
                <button class="delete-btn" id="delete" role="button">Delete</button>
            </div>
        </div>
    `

    // for (let i = 0; i < data.length; i++) {
    //     data.pop();
    // }
    // console.log(data);
}
