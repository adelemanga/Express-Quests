const users = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

// const getMovies = (req, res) => {
//   res.json(movies);
// };

// const getMovieById = (req, res) => {
//   const id = parseInt(req.params.id);

//   const movie = movies.find((movie) => movie.id === id);

//   if (movie != null) {
//     res.json(movie);
//   } else {
//     res.status(404).send("Not Found");
//   }
// };

const getUsers = (req, res) => {
  res.status(202).json(movies.users);
};

const getUsersById = (req, res) => { 
  const userId = users.find((users) => users.id === users);
  if (user != null) {
    res.json(movies.users);
  } else{res.status(404).send("Not Found");
  }

  // const postMovies = (req, res) => {
  //   const {id, users, tittle, director, year, color, duration} = req.body;
  //   database
  //   .query(
  //     "INSERT INTO movies(id, users, title, director, year, color, duration)VALUES(4, Philippes, The moon, Elvis, 1884, green, 200)",
  //      [id, users, title, director, year, color, duration]
  //     )
  // };

module.exports = {
  // getMovies,
  // getMovieById,
  getUsers,
  postMovies,
  getUsersById,
}