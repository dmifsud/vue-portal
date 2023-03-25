const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const crypto = require("crypto");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;
const DATA_FILE = "./mock-backend/data.json";
// MOCK API

const fakeDB = {
  read: (cb, errCb) => {
    fs.readFile(DATA_FILE, "utf8", (err, data) => {
      if (err) {
        if (errCb) {
          errCb(err);
        }
        return;
      }

      if (cb && typeof cb === "function") {
        const jsonData = JSON.parse(data);
        cb(jsonData);
      }
    });
  },
};

app.get("/data", (req, res) => {
  fakeDB.read(
    (data) => {
      res.send(data);
    },
    (err) => {
      console.error(err);
      res.status(500).send("Server Error");
    }
  );
});

app.get("/users", (req, res) => {
  fakeDB.read(
    (data) => {
      setTimeout(() => {
        res.send(data.users);
      }, 500);
      
    },
    (err) => {
      console.error(err);
      res.status(500).send("Server Error");
    }
  );
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  fakeDB.read(
    (data) => {
      setTimeout(() => {
        const userFound = data.users.find(user => user.id === +userId)
        if (userFound) {
          res.send(userFound);
        } else {
          res.status(404).send({
            errMessage: 'user not found'
          });
        }
      }, 500);
      
    },
    (err) => {
      console.error(err);
      res.status(500).send("Server Error");
    }
  );
});


// END MOCK API

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
