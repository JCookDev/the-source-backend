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

app.set("port", 3001);
app.locals.title = "The Source";

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}.`);
});

app.get("/music", async (request, response) => {
  const music = await knex.select().from("music");
  response.status(200).json({ music });
});

app.post("/music", async (request, response) => {
  const music = request.body;
  for (let requiredParameter of ["coverart", "artist", "genre", "title", "audiofile"]) {
    if (!music[requiredParameter]) {
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
  response.status(201).json( request.body );
  try {
    const music = await knex('music').insert(request.body, ['id', 'coverart', 'artist', 'genre', 'title', 'audiofile'])
    response => response.status(201).json({ music })
  } catch (error) {
    response.status(500).json(error)
  }
});
