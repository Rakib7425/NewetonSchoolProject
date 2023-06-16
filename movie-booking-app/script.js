
const apiCall = () => {
    const url = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd7edee1becmsh2f0b5de4df27c49p1aefbbjsndaa7b16fbcab',
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        }
    };

    try {
        const response = fetch(url, options);
        const result =  response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}