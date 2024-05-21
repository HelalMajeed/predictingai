const search = document.getElementById("searchInput");
const background = document.getElementById("bg");
const searchButton = document.getElementById('searchButton');
const logo = document.getElementById("logo");
const resultDiv = document.getElementById("result");
const cancel = document.getElementById("cancel");
const wrapper = document.querySelector('.result-wrapper');
const result = document.querySelector('.result');
var prompt = "predict about ";
// var prompt = "";
var yes = true;


search.addEventListener('input', (event) => {
  prompt += search.value;
});

async function run() {

  try {
    const response = await fetch('https://predictingai.onrender.com/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    const text = data.text;
    console.log(text);
    resultDiv.append(text);
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

// all actions for search button 
searchButton.addEventListener('click', (event) => {

  showResult();
  moveBG();
  run();

});


function moveBG() {
  const loader = document.createElement("div");
  loader.className = "loader";
  background.appendChild(loader);
  searchButton.style.display = "none";
  if (yes) {
    background.classList.toggle("move-up");
    logo.classList.toggle("move-up");
  }
  setTimeout(() => {
    const loader = document.querySelector(".loader"); 
    if (loader) {
      loader.remove();
    }
    searchButton.style.display = "block";
  }, 10000);
}

function showResult() {
    wrapper.style.display = 'flex'; // Make the wrapper visible
    result.classList.add('animate'); // Start the animation
    setTimeout(() => {
      cancel.style.display = "block";
    }, 7000);
 
}

cancel.addEventListener('click', (event) => {
  wrapper.style.display = "none";
  cancel.style.display = "none";
  background.classList.toggle("move-up");
  logo.classList.toggle("move-up");
  wrapper.reset();
  yes = !yes;
})
