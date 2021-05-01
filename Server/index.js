
const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')

app.use(cors())

const server = require('http').createServer(app);

const webScrapping = require('./webScrapping')

const newsRoute = require('./routes/news');

app.use("/api", newsRoute);

server.listen(port, "127.0.0.1", () => {
    console.log(`Server is listening at http://127.0.0.1:${port}`)
});