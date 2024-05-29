const search = document.getElementById("searchInput");
const background = document.getElementById("bg");
const searchButton = document.getElementById('searchButton');
const logo = document.getElementById("logo");
const resultDiv = document.getElementById("result");
const cancel = document.getElementById("cancel");
const wrapper = document.querySelector('.result-wrapper');
const result = document.querySelector('.result');
const imageButton = document.getElementById('image');
const textButton = document.getElementById('text');
const searchContainer = document.getElementById('searchInput');
const imsg = document.getElementById("imageMessage");
var appear = true;

function activateButton(clickedButton, otherButton) {
    clickedButton.classList.add('active');
    otherButton.classList.remove('active');
}

textButton.addEventListener('click', (event) => {
    // console.log('Text Button Clicked');
    activateButton(textButton, imageButton); 
    searchContainer.style.display = 'block'; 
    imsg.style.display = "none";
});

imageButton.addEventListener('click', (event) => {
    // console.log('Image Button Clicked');
    activateButton(imageButton, textButton); 
    searchContainer.style.display = 'none'; 
    searchContainer.value = "";
    searchButton.style.display = "none";
    imsg.style.display = "block";

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

