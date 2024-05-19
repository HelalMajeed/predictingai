imageButton.addEventListener('click', (event) => {
    console.log('Image Button Clicked');
    resultDiv.style.display = "block";
    activateButton(imageButton, textButton);
    searchContainer.style.display = 'none';
    searchContainer.value = "";
    searchButton.style.display = "none";
    imsg.style.display = "block";

});
