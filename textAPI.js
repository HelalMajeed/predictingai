// const container = document.getElementsByClassName("background");
// const searchButton = document.getElementById('searchButton');
// async function api() {
//     const options = {
//     method: 'GET',
//     url: 'https://instagram-api38.p.rapidapi.com/',
//     params: {
//         url: 'https://www.instagram.com/reel/CzGaxlMtbMt/?igsh=MzRlODBiNWFlZA=='
//     },
//     headers: {
//         'X-RapidAPI-Key': '841f787f0emsh587e39391cffb1ap1e1766jsn4d058e248d3e',
//         'X-RapidAPI-Host': 'instagram-api38.p.rapidapi.com'
//     }
//     };

//     try {
//         const response = await axios.request(options);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// api()
const container = document.getElementsByClassName("background"); // Use querySelector to select the first element with class "background"
const newsearchButton = document.getElementById('searchButton');

async function api() {
    const options = {
        method: 'GET',
        url: 'https://instagram-api38.p.rapidapi.com/',
        params: {
            url: 'https://www.instagram.com/reel/CzGaxlMtbMt/?igsh=MzRlODBiNWFlZA=='
        },
        headers: {
            'X-RapidAPI-Key': '841f787f0emsh587e39391cffb1ap1e1766jsn4d058e248d3e',
            'X-RapidAPI-Host': 'instagram-api38.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);

        // Append the response data to the end of the background container
        const responseData = response.data;
        container.insertAdjacentHTML('beforeend', responseData); // Append data to the end of the container

        console.log("Request successful");
    } catch (error) {
        console.error(error);
        console.log("Request failed");
    }
}

// Add event listener to the search button
newsearchButton.addEventListener('click', function() {
    api(); // Call the api function when the button is clicked
});
