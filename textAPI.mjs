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
var yes = false;;


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
    background.classList.toggle("move-up");
    logo.classList.toggle("move-up");
<<<<<<< HEAD
  }
  setTimeout(() => {
    const loader = document.querySelector(".loader"); 
    if (loader) {
      loader.remove();
    }
    searchButton.style.display = "block";
  }, 10000);
=======
>>>>>>> 2b1b95d (fixing bugs)
}

function showResult() {
    wrapper.style.display = 'flex'; // Make the wrapper visible
    result.classList.add('animate'); // Start the animation
    const loader = document.createElement("div");
    loader.className = "loader";
    wrapper.appendChild(loader);
    setTimeout(() => {
      const loader = document.querySelector(".loader"); 
      if (loader) {
        loader.remove();
      }
    }, 10000);
    setTimeout(() => {
      cancel.style.display = "block";
    }, 10050);
    yes = true;
 
}

cancel.addEventListener('click', (event) => {
  wrapper.style.display = "none";
  cancel.style.display = "none";
  background.classList.toggle("move-up");
  logo.classList.toggle("move-up");
<<<<<<< HEAD
  wrapper.reset();
  yes = !yes;
=======
  resultDiv.innerHTML = "";
  yes = true;
>>>>>>> 2b1b95d (fixing bugs)
})
