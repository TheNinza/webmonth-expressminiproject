// importing libraries

const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const connectionString = process.env.SQLURL;

const client = new Client(connectionString);

client.connect();

// INSERT INTO users (username, email) values ('Bret', 'Sincere@april.biz'),('Antonette', 'Shanna@melissa.tv'),('Samantha', 'Nathan@yesenia.net'),('Karianne', 'Julianne.OConner@kory.org'),('Kamren', 'Lucio_Hettinger@annie.ca'),('Leopoldo_Corkery', 'Karley_Dach@jasper.info'),('Elwyn.Skiles', 'Telly.Hoeger@billy.biz'),('Maxime_Nienow', 'Sherwood@rosamond.me'),('Delphine', 'Chaim_McDermott@dana.io'),('Moriah.Stanton', 'Rey.Padberg@karina.biz');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  client.query("select * from users", (err, databaseRes) => {
    if (err) {
      console.log(err);
      res.status(500).send("Database errored out");
    } else {
      res.send(databaseRes.rows);
    }
  });
});

app.post("/adddata", (req, res) => {
  console.log(req.body);
  const secretKey = req.body.secretKey;

  if (Number(secretKey) === 1234) {
    const newUser = req.body.newUser;
    client.query(
      `INSERT INTO users (username, email) values ('${newUser.username}', '${newUser.email}')`,
      (err, databaseRes) => {
        if (err) {
          console.log(err);
          res.status(500).send("Database errored out");
        } else {
          // console.log(databaseRes);
          // res.send("ok");
          client.query("select * from users", (err, databaseRes) => {
            if (err) {
              console.log(err);
              res.status(500).send("Database errored out");
            } else {
              res.send(databaseRes.rows);
            }
          });
        }
      }
    );
  } else {
    res.status(400).send("User Not Created");
  }
});

app.listen(port, () => {
  console.log("i am running on " + port);
});
