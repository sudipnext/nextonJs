const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const tasks = require("./routes/tasks"); //importing from routes/task.js
require("./db/connect");
require("dotenv").config();
//middleware
app.use(express.static('./public'))
app.use(express.json());

//setting up routes
// app.get("/hello", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

app.use("/api/v1/tasks", tasks); //using middleware on the path api/v1/tasks

//specifying ports
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
//listening on port 3000
start();
