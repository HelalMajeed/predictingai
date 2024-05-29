function moveBG() {
  background.classList.toggle("move-up");
  logo.classList.toggle("move-up");
}


function showResult() {
  wrapper.style.display = 'flex'; 
  result.classList.add('animate'); 
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    if (loader) {
      loader.remove();
    }
  }, 10000);
  setTimeout(() => {
    cancel.style.display = "block";
  }, 10050);
}

cancel.addEventListener('click', (event) => {
  wrapper.style.display = "none";
  cancel.style.display = "none";
  background.classList.toggle("move-up");
  logo.classList.toggle("move-up");
  resultDiv.innerHTML = "";
});
