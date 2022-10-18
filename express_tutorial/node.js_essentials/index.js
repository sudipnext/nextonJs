const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  console.log("Welcome to HomePage");
  res.send("<h1>Hello Express</h1>");
});
const users = [
  {
    id: "12",
    name: "Jhon",
  },
  {
    id: "13",
    name: "Sudip",
  },
];
app.get("/users", (req, res) => {
  //loading users data from databse
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id == userId);
  res.send(user);
});

app.post('/users', (req, res)=>{
    console.log(req.body)
    const newUser = req.body;
    users.push(newUser);
    res.send(users);
})

app.listen(3000, () => {
  console.log("I am listening on port 3000");
});
