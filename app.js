const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const axios = require('axios');

app.use(express.static('public'));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
});


////////////////// api here //////////////////////////
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        const data = response.data;
        res.render('index', { data }); 
        res.json(data);
        // res.send(data)
        console.log(response);
        // console.log("hello");
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});
