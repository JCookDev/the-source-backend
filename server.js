const express = require("express");
const cors = require("cors");
const knex = require("./knex");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.set("port", process.env.PORT || 3001);
app.locals.title = "The Source";

app.get('/', (request, response) => {
  response.status(200).json({
    smoke: "test"
  })
 })

app.get("/api/v1/music", async (request, response) => {
  const tracks = await knex.select().from("tracks");
  // console.log("EXPRESS TRACKS FROM GET=====", tracks)
  response.status(200).json( {tracks} );
});

app.post("/api/v1/music", async (request, response) => {
  const tracks = request.body;
  const requiredParams = ["coverart", "artist", "genre", "title", "audiofile"]
  for (let requiredParameter of requiredParams) {
    if (tracks[requiredParameter] === undefined) {
      return response
        .status(422)
        .send({  error: `Expected format:
            {
                coverart: <String>,
                artist: <String>,
                genre: <String>,
                title: <String>,
                audiofile: <String>
            }. You're missing a "${requiredParameter}" property.`,
      });
    }
  }
  // response.status(201).json( request.body );

      const tracks2 = await knex('tracks').insert(request.body, ['id', 'coverart', 'artist', 'genre', 'title', 'audiofile'])
      console.log("EXPRESS TRACKS =====", tracks2)
      response.status(201).json( tracks2[0] )

  // try {
  //   const tracks = await knex('tracks').insert(request.body, ['id', 'coverart', 'artist', 'genre', 'title', 'audiofile'])
  //     response.status(201).json({ tracks })
  // } catch (error) {
  //   response.status(500).json(error)
  // }
});

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}.`);
});
