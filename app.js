const express = require("express");

const app = express();
app.use(express.json());

const port = 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite users list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");

// app.get("/api/movies", movieHandlers.getMovies);
// app.get("/api/movies/:id", movieHandlers.getMovieById);
app.get("/api/users", movieHandlers.getUsers);
app.get("api/users/:id", movieHandlers.getUsersById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
