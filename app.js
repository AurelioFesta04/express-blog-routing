const express = require('express');
const postsRouter = require('./routers/posts');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});