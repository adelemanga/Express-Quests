const { Result } = require("postcss");

const users = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
    language: French,
    city:"Paris",
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
    language: Deutsch,
    city:"Franckfort",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
    language: English,
    city:"London",
  },
];



const getUsers=(req, res)=>{
  let sql = "select *from users";
  const sqlValues = [];

  if(req.query.language != null){
    sql += "where language = ?";
    sqlValues.push(req.query.language);

    if(res.query.city != null){
      sql += "and city = ?";
      sqlValues.push(req.query.city);
    }
  }

  database
  .query(sql, sqlValues)
  .then(([users])=>{
    res.json(users);
  })

  .catch((err)=>{
    console.error(err);
    res.status(505).send("Error retrieving data from database ");
  });
};





const getUsersById = (req, res) => { 
  const userId = users.find((users) => users.id === users);
  if (user != null) {
    res.json(users);
  } else{res.status(404).send("Not Found");
  }


module.exports = {

  getUsers,
  postUsers,
  getUsersById,
  updateUsers,
  deleteUser
}