const { response } = require("express");
const express = require("express");
const cors = require("cors");
const knex = require("./knex");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//-- Security
app.use(cors());

//-- Needed for a post request
app.use(express.json());

// app.locals.music = [
//   {
//     id: 1,
//     coverArt: "image",
//     artist: "Future",
//     genre: "Hip-Hop",
//     title: "Puffin On Zooties",
//     audioFile: "file",
//   },
//   {
//     id: 2,
//     coverArt:
//       "https://upload.wikimedia.org/wikipedia/en/f/f8/Is_This_Love_%28Bob_Marley_%26_The_Wailers_single_-_cover_art%29.jpg",
//     artist: "Bob Marley",
//     genre: "Hip-Hop",
//     title: "Sprite",
//     audioFile: "file",
//   },
//   {
//     id: 3,
//     coverArt: "image",
//     artist: "Miss Aphrodite",
//     genre: "R&B",
//     title: "Your Hands",
//     audioFile: "file",
//   },
//   {
//     id: 4,
//     coverArt: "image",
//     artist: "Bobby Blue Bland",
//     genre: "Blues",
//     title: "Ain’t No Sunshine When Shes Gone",
//     audioFile: "file",
//   },
// ];

app.set("port", 3001);
app.locals.title = "The Source";

app.get("/", (request, response) => {
  response.send("Oh hey The Source");
});

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}.`);
});

app.get("/music", async (request, response) => {
  const music = await knex.select().from("music");
  // const music = app.locals.music;
  response.status(200).json({ music });
});

// TRY CATCH GET REQUEST
// app.get('/api/v1/papers', async (request, response) => {
//   try {
//     const papers = await database('papers').select();
//     response.status(200).json(papers);
//   } catch(error) {
//     response.status(500).json({ error });
//   }
// });

// app.get('/music', (request, response) => {
//     response.status(200).json(app.locals.music);
//   });

// app.post("/music", (request, response) => {
//   const id = Date.now();
//   const { coverArt, artist, genre, title, audioFile } = request.body;

//   app.locals.music.push({ id, coverArt, artist, genre, title, audioFile });

//   response.status(201).json({ id, coverArt, artist, genre, title, audioFile });
// });

app.post("/music", async (request, response) => {
  const music = request.body;
  for (let requiredParameter of ["id", "coverArt", "artist", "genre", "title", "audioFile"]) {
    if (!music[requiredParameter]) {
      return response
        .status(422)
        .send({  error: `Expected format:
            {
                id: <Number>,
                coverArt: <String>,
                artist: <String>,
                genre: <String>,
                title: <String>,
                audioFile: <String>
            }. You're missing a "${requiredParameter}" property.`,
      });
    }
  }
  // try {
    //     const id = await database('papers').insert(paper, 'id');
    //     response.status(201).json({ id })
    //   } catch (error) {
    //     response.status(500).json({ error });
    //   }
    // });
//     response.status(201).json({ id, coverArt, artist, genre, title, audioFile });
// });

// TRY CATCH POST REQUEST
// app.post('/api/v1/papers', async (request, response) => {
//   const paper = request.body;

//   for (let requiredParameter of ['title', 'author']) {
//     if (!paper[requiredParameter]) {
//       return response
//         .status(422)
//         .send({ error: `Expected format: { title: <String>, author: <String> }. You're missing a "${requiredParameter}" property.` });
//     }
//   }

//   try {
//     const id = await database('papers').insert(paper, 'id');
//     response.status(201).json({ id })
//   } catch (error) {
//     response.status(500).json({ error });
//   }
// });

// app.post('/music', (request, response) => {
//     const id = Date.now()
//     const music = request.body

//     for (let requiredParameter of ['id', 'coverArt', 'artist', 'genre', 'title', 'audioFile']) {
//         if (!music[requiredParameter]) {
//          /*return */ response
//             .status(422)
//             .send({ error:
//                 `Expected format:
//                 {
//                     id: <Number>,
//                     coverArt: <String>,
//                     artist: <String>,
//                     genre: <String>,
//                     title: <String>,
//                     audioFile: <String>
//                 }. You're missing a "${requiredParameter}" property.`
//             });
//         }
//       }

//     const { coverArt, artist, genre, title, audioFile } = music

//     app.locals.music.push({ id, coverArt, artist, genre, title, audioFile })

//     response.status(201).json({ id, coverArt, artist, genre, title, audioFile })
// })
