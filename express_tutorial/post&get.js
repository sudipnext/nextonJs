const express = require("express");
const app = express();
let { people } = require("./data");

//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
app.get("/api/people", (req, res) => {
  res.status(200).json({ sucess: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ sucess: false, msg: "please name value" });
  }
  res.status(201).send({ sucess: true, person: name });
});
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ sucess: false, msg: "please name value" });
  }
  res.status(201).send({ sucess: true, data: [...people, name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
  // console.log(req.body)
  res.status(401).send("Please Provide Credentials");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
