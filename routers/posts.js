const express = require('express');
const router = express.Router();
const postsArray = require("../data");

router.get('/', (req, res) => {
    const result = {
        post: postsArray,
        count: postsArray.length
    }
    res.send("Lista dei post");
});

router.get('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Mostra il post ${postId}`);
});

router.post('/', (req, res) => {
    const newPost = {
        title: "Viaggio a Londra",
        content: "infomazioni su un viaggio",
        image: "/images/Viaggio-Londra.jpg",
        tags: ["intrattenimento", "avventura", "paesaggi", "escursione"]
    };
    res.send("Creazione di un nuovo post");
});

router.put('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Aggiornamento del post ${postId}`);
});

router.patch('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Aggiornamento parziale del post ${postId}`);
});

router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Cancellazione del post ${postId}`);
});

module.exports = router;