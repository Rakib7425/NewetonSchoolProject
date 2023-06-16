const ansdiv = document.getElementById('ansdiv');
const problem = document.getElementById('problem');
const category = document.getElementById('category');

const data = [];

const fetchCall = async () => {
    const url = `https://newton.vercel.app/api/v2/${category.value}/${problem.value}`
    // console.log(url);

    const response = await fetch(url);
    const jsonData = await response.json();
    // console.log(jsonData.result);
    data.push(jsonData);
    console.log(data);
}

