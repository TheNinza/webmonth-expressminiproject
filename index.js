// importing libraries

const express = require("express");
const cors = require("cors");

let data = [
  { username: "Bret", email: "Sincere@april.biz" },
  { username: "Antonette", email: "Shanna@melissa.tv" },
  { username: "Samantha", email: "Nathan@yesenia.net" },
  { username: "Karianne", email: "Julianne.OConner@kory.org" },
  { username: "Kamren", email: "Lucio_Hettinger@annie.ca" },
  { username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
  { username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
  { username: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
  { username: "Delphine", email: "Chaim_McDermott@dana.io" },
  { username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" },
];

const app = express();

app.use(cors());

app.use(express.text());

app.get("/", (req, res) => {
  res.send(data);
});

app.post("/11", (req, res) => {
  console.log(req.body);
});

app.post("/adddata", (req, res) => {
  console.log(req.body);
  const secretKey = req.body.secretKey;

  if (Number(secretKey) === 1234) {
    const newUser = req.body.newUser;
    data.push(newUser);

    res.send(data);
  } else {
    res.status(400).send("User Not Created");
  }
});

app.listen(5000, () => {
  console.log("i am running");
});
