//--- Simple node server from https://nodejs.org/en/docs/guides/getting-started-guide/
// On our build, we have info for a host,
// will add that to GET.
//CRASHES!

// const http = require('http');

// const hostname = 'the-source.fly.dev';
// const port = 8080;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


//---WINNER -----//
//--- Simplified server for deployment on fly.io
// Server says its running and deployed on fly, but
// can't GET in browser or postman
//----
const express = require("express");
const app = express();
// const port = process.env.PORT || 3000;
const port = process.env.PORT || 8080;

//// app.get("/", (req, res) => {
 ////   greeting = "<h1>Hello From Node on Fly!</h1>";
//     // name = req.params["name"];
//     // if (name) {
//     //   res.send(greeting + "</br>and hello to " + name);
//     // } else {
////       res.send(greeting);
//     // }
////   });

//--- this works
// app.get('/', (request, response) => {
//   response.status(200).json({
//     smoke: "test"
//   })
//  });

  // app.get('/api/v1/music', async(request, response) => {
  //   console.log('hope springs', {tracks})
  //   const tracks = await knex.select().from("tracks");
  //   response.status(200).json( {tracks} );  
  // });

  app.get('/', (request, response) => {
       //console.log('hope springs', {tracks})
       console.log('helloooo')
       console.log("attempt 2", tracks)
       console.log("attempt 3", {tracks})
        // response.status(200).json( {tracks} );  
      response.status(200).json(tracks)
  })
/*
  app.post('/api/v1/music', (request, response) => {
    //const id = Date.now();
    //const { name, type } = request.body;
    const { coverart, artist, genre, title, audiofile} = request.body
    // app.locals.pets.push({ id, name, type });
  
    response.status(201).json({ id, coverart, artist, genre, title, audiofile });
  });
*/
// app.get(["/", "/:name"], (req, res) => {
//   greeting = "<h1>Hello From Node on Fly!</h1>";
//   name = req.params["name"];
//   if (name) {
//     res.send(greeting + "</br>and hello to " + name);
//   } else {
//     res.send(greeting);
//   }
// });

app.listen(port, () => console.log(`The Source app is now listening on port ${port}!`));

//--- This server works on POSTMAN, but could not deploy on heroku

//READ - https://discuss.codecademy.com/t/body-parser-deprecated/606183
// I kept getting an error saying deprecated previously.
// Try removing body parser

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
