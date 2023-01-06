const express = require('express');
const app = express();
// const cors = require('cors')

//-- Security
// app.use(cors())

//-- Needed for a post request
// app.use(express.json())

app.set('port', 3001);
app.locals.title = 'The Source';

app.get('/', (request, response) => {
  response.send('Oh hey The Source');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});



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

// app.set('port', 3001)
// app.listen(app.get('port', () => {
// 	console.log(`${ app.locals.title } is now running on port http://localhost:${app.get('port')}!`)
// }))

app.get('/music', (request, response) => {
    const music = app.locals.music
	response.status(200).json({music})
})

// app.get('/music/:id', (request, response) => {

// })
