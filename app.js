import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, world !'));

app.listen(port, () => console.log(`Our NodeJS API is running on http://localhost:${port}`));
