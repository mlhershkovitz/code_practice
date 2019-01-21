const express = require('express');

const app = express();
const PORT = 5000;

const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];

const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

app.use(express.static('server/public'));

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

//server get request for songs
app.get('/song', (req, res) => {
    console.log('hit GET request for songs')
    res.send(songListArray);
});

app.post('/song', (req, res) => {
    console.log('hit POST request for new songs', req.body);
    if (newSong (req.body)) {
        res.sendStatus(201);
    }//end successfully added 
    else {
        res.sendStatus(500);
    }//end error adding
});//end post

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});