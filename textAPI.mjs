const search = document.getElementById("search");
const background = document.getElementById("bg");
const searchButton = document.getElementById('searchButton');
var prompt = "";

search.addEventListener('input', (event) => {
  prompt = search.value;
});

async function run() {

  try {
    const response = await fetch('http://localhost:3000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    const text = data.text;
    console.log(text);
    background.append(text);
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

searchButton.addEventListener('click', (event) => {
  run();
});
