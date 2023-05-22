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


const getUsers = (req, res) => {
  res.status(202).json(movies.users);
};

const getUsersById = (req, res) => { 
  const userId = users.find((users) => users.id === users);
  if (user != null) {
    res.json(movies.users);
  } else{res.status(404).send("Not Found");
  }

  const postUsers = (req, res) => {
    const {id, users, title, director, year, color, duration} = req.body;
    database
    .query(
      "INSERT INTO users(id, users, title, director, year, color, duration)VALUES(4, Philippes, The moon, Elvis, 1884, green, 200)",
       [id, users, title, director, year, color, duration]
      )
  };

module.exports = {

  getUsers,
  postUsers,
  getUsersById,
}