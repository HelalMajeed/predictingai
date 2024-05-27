// upload.js
document.getElementById('searchButton').addEventListener('click', async (event) => {
    event.preventDefault();
    const textInput = document.getElementById('searchInput').value;
    // console.log(textInput);

    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: textInput }),
        });

        if (response.ok) {
            alert('Text submitted successfully');
        } else {
            alert('Text submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the text');
    }
});
