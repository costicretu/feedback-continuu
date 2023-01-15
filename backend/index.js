const express = require("express");
const app = express();
const connection = require("./models").connection;
const port = 8080;
const router = require("./routes");
const cors = require("cors");

const UserDb = require("./models").User;

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(
  cors({
    origin: "*",
  })
);


app.use(express.json());

app.use("/api", router);


app.get("/reset", (req, res) => {
  connection
    .sync({ force: true })
    .then(() => {
      UserDb.create({ email : "student@gmail.com", password: "student", is_professor: 0 })
      UserDb.create({ email : "profesor@gmail.com", password: "profesor", is_professor: 1 })
      res.status(201).send({
        message: "Database reset",
      });
    })
    .catch(() => {
      res.status(500).send({
        message: " Reset DB error",
      });
    });
});



app.listen(port, () => {
  console.log(`Server is online on port ${port}`);
  console.log(`http://localhost:${port}`);
});

