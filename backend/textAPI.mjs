search.addEventListener('input', (event) => {
  prompt = `predict about ${search.value}`;
});

async function sendData() {
  ;
}

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
    resultDiv.innerText = text;
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

searchButton.addEventListener('click', (event) => {
  showResult();
  moveBG();
  run();
});

