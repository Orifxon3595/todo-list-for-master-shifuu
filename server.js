const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:8080', // Vue.js ilovangizning manzili
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Ruxsat etilgan metodlar
    allowedHeaders: ['Content-Type', 'Authorization'], // Ruxsat etilgan headerlar
    credentials: true // Credentiallarga ruxsat (cookies, authorization headers)
};

app.use(cors(corsOptions));
app.use(express.json()); // JSON body parsing middleware

// Dummy route for example
app.get('/todos', (req, res) => {
    res.json([{ id: 1, task: 'Do something' }]);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
