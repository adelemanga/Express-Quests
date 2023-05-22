const { Result } = require("postcss");

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

const deleteUser = (req, res)=>{
  const id = parseInt(req.params.id);

  database
  .query("delete from users where id=?", [id])
  .then(([result])=>{
    if(result.affectedRows === 0){
      res.status(404).send("Not Found");
    }else{
      res.sendStatus(204);
    }
  })
  .catch((err)=>{
    console.error(err);
    res.status(500).send("Error deleting the user")
  })
}




const getUsers = (req, res) => {
  res.status(202).json(movies.users);
};

const getUsersById = (req, res) => { 
  const userId = users.find((users) => users.id === users);
  if (user != null) {
    res.json(movies.users);
  } else{res.status(404).send("Not Found");
  }


module.exports = {

  getUsers,
  postUsers,
  getUsersById,
  updateUsers,
  deleteUser
}