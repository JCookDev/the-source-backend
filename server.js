const { response } = require('express');
const express = require('express');
const app = express();
const cors = require('cors')

//-- Security
app.use(cors())

//-- Needed for a post request
app.use(express.json())

app.locals.music = [
    {
        id: 1,
        coverArt: 'image',
        artist: 'Future',
        genre: 'Hip-Hop',
        title: 'Puffin On Zooties',
        audioFile: 'file',
      },
      {
        id: 2,
        coverArt: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Is_This_Love_%28Bob_Marley_%26_The_Wailers_single_-_cover_art%29.jpg',
        artist: 'Bob Marley',
        genre: 'Hip-Hop',
        title: 'Sprite',
        audioFile: 'file',
      },
      {
        id: 3,
        coverArt: 'image',
        artist: 'Miss Aphrodite',
        genre: 'R&B',
        title: 'Your Hands',
        audioFile: 'file',
      },
      {
        id: 4,
        coverArt: 'image',
        artist: 'Bobby Blue Bland',
        genre: 'Blues',
        title: 'Ain\’t No Sunshine When Shes Gone',
        audioFile: 'file',
      },
]

app.set('port', 3001);
app.locals.title = 'The Source';

app.get('/', (request, response) => {
  response.send('Oh hey The Source');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

// app.get('/music', (request, response) => {
//     const music = app.locals.music
// 	response.status(200).json({music})
// })

app.get('/music', (request, response) => {
    response.status(200).json(app.locals.music);
  });

app.post('/music', (request, response) => {
    const id = Date.now()
    const music = request.body

    for (let requiredParameter of ['id', 'coverArt', 'artist', 'genre', 'title', 'audioFile']) {
        if (!music[requiredParameter]) {
          response
            .status(422)
            .send({ error: `Expected format: { id: <Number>, coverArt: <String>, artist: <String>, genre: <String>, title: <String>, audioFile: <String> }. You're missing a "${requiredParameter}" property.` });
        }
      }

    const { coverArt, artist, genre, title, audioFile } = music

    app.locals.pets.push({ id, coverArt, artist, genre, title, audioFile })

    response.status(201).json({ id, coverArt, artist, genre, title, audioFile })
})

// app.get('/music/:id', (request, response) => {

// })
