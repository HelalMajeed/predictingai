const textButton = document.getElementById('text');
const imageButton = document.getElementById('image');
const searchContainer = document.getElementById('search');
const searchButton = document.getElementById('searchButton');

function activateButton(clickedButton, otherButton) {
    clickedButton.classList.add('active');
    otherButton.classList.remove('active');
}

textButton.addEventListener('click', (event) => {
    console.log('Text Button Clicked');
    activateButton(textButton, imageButton); 
    searchContainer.style.display = 'block'; 
});

imageButton.addEventListener('click', (event) => {
    console.log('Image Button Clicked');
    activateButton(imageButton, textButton); 
    searchContainer.style.display = 'block'; 
});

function toggleSearchButton() {
    if (searchContainer.value.trim() === '') {
        searchButton.style.display = "none";
    } else {
        searchButton.style.display = "block";
    }
}

searchContainer.addEventListener('input', (event) => {
    toggleSearchButton();
})

fetch('http://localhost:3000/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => {
        console.error('Error fetching data:', error);
        console.log('Response status:', error.response.status);
        console.log('Response text:', error.response.statusText);
    });
