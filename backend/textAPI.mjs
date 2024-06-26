search.addEventListener('input', (event) => {
  prompt = `predict about ${search.value}`;
});


async function run() {

  const loader = document.createElement("div");
  loader.className = "loader";
  wrapper.appendChild(loader);
  try {
    const response = await fetch('https://predictingai.onrender.com/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    if(data){
      const converter = new showdown.Converter();
      const result = converter.makeHtml( data.candidates[0].content.parts[0].text);
      resultDiv.innerHTML = result;
      // console.log(data.candidates[0].content.parts[0].text);
    }else {
      resultDiv.innerText = "error"
    }
    setTimeout(() => {
      loader.remove();
    }, 6000);
    searchButton.style.display = "block";

  } catch (error) {
    console.error('Error generating content:', error);
    resultDiv.innerText = "error"
  }
}

searchButton.addEventListener('click', (event) => {
  showResult();
  moveBG();
  run();
});


searchContainer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    showResult();
    moveBG();
    run();
  }
})
