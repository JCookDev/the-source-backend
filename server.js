//--- Simplified server for deployment on fly.io
const express = require("express");
const app = express();
// const port = process.env.PORT || 3000;
const port = process.env.PORT || 8080;

app.get(["/", "/:name"], (req, res) => {
  greeting = "<h1>Hello From Node on Fly!</h1>";
  name = req.params["name"];
  if (name) {
    res.send(greeting + "</br>and hello to " + name);
  } else {
    res.send(greeting);
  }
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));

//--- This server works on POSTMAN, but could not deploy on heroku

// const express = require("express");
// const cors = require("cors");
// const knex = require("./knex");
// const app = express();
// const bodyParser = require("body-parser");
// require('dotenv').config()

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors());
// app.use(express.json());

// app.set("port", process.env.PORT || 3001);
// app.locals.title = "The Source";

// app.listen(app.get("port"), () => {
//   console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}.`);
// });

// app.get('/', (request, response) => {
//   response.status(200).json({
//     smoke: "test"
//   })
//  }) 

// app.get("/music", async (request, response) => {
//   const tracks = await knex.select().from("tracks");
//   response.status(200).json({ tracks });
// });

// app.post("/music", async (request, response) => {
//   const tracks = request.body;
//   for (let requiredParameter of ["id", "coverart", "artist", "genre", "title", "audiofile"]) {
//     if (!tracks[requiredParameter]) {
//       return response
//         .status(422)
//         .send({  error: `Expected format:
//             {
//                 id: <Number>,
//                 coverart: <String>,
//                 artist: <String>,
//                 genre: <String>,
//                 title: <String>,
//                 audiofile: <String>
//             }. You're missing a "${requiredParameter}" property.`,
//       });
//     }
//   }
//   response.status(201).json( request.body );
//   try {
//     const tracks = await knex('tracks').insert(request.body, ['id', 'coverart', 'artist', 'genre', 'title', 'audiofile'])
//     response => response.status(201).json({ tracks })
//   } catch (error) {
//     response.status(500).json(error)
//   }
// });
