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

const updateUsers =(req, res)=> {
  const id = parseInt(req.params.id);
  const {title, director, year, color, duration}=req.body;
} 
  database
  .query("update users set title =?, director=?, year=?, color=?, duration=? where id=?", [title, director, year, color, duration]
  [id, users, title, director, year, color, duratio, id])
  .then(([Result])=>{
    if(Result.affectedRows === 0){
      res.status(404).send("Not Found");
    } else{
      res.sendStatus(204);
    }
  })
  .catch((err)=>{
    console.error(err);
    res.status(500).sebd("Error editing to the users")
  })




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
}