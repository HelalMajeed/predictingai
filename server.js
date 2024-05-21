import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

const genAI = new GoogleGenerativeAI('AIzaSyA4_W6tc3P2H8S-3smZWLdd1ATAAO0do_k');

app.use(bodyParser.json());

// Use the CORS middleware
app.use(cors());

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    res.json({ text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
