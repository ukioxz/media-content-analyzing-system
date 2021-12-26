const express = require("express");
const fs = require("fs");
const mysql = require('mysql2');

const app = express();
const jsonParser = express.json();

const connectionOptions = {
    host: "localhost",
    user: "root",
    password: "K168cV672003",
    database: "mcas"
};

const dbConnection = mysql.createConnection(connectionOptions);

app.get("/api/report/get/all", function (req, res) {
  dbConnection.connect(function (err) {
      if (err) throw err;

      dbConnection.query("SELECT * FROM report", (err, result, fields) => {
          if (err) throw err;
          res.send(result);
      });
  });
});

app.get("/api/report/:id", function (req, res) {
  const sql =
      "SELECT * " +
      "FROM report " +
      `WHERE id = ${req.params.id}`;

  dbConnection.connect(function (err) {
      if (err) throw err;

      dbConnection.query(sql, (err, result, fields) => {
          if (err) throw err;
          result ? res.send(result) : res.sendStatus(404);
      });
  });
});

app.post("/api/report/post/add", jsonParser, function (req, res) {
  if (!req.body)
      return res.sendStatus(400);

  let report = [req.body.id ,req.body.name, req.body.description, req.body.DataStream_id];

  const sql = "insert into report (id, name,  description, DataStream_id) values (?, ?, ?, ?)";

  dbConnection.connect(function (err) {
      if (err) throw err;

      dbConnection.query(sql, report, (err, result, fields) => {
          if (err) throw err;
          result ? res.send(result) : res.sendStatus(404);
      });
  });
});
app.delete("/api/report/delete/:id", function (req, res) {
  const sql =
      "DELETE " +
      "FROM report " +
      `WHERE id = ${req.params.id}`;

  dbConnection.connect(function (err) {
      if (err) throw err;

      dbConnection.query(sql, (err, result, fields) => {
          if (err) throw err;
          result ? res.send(result) : res.sendStatus(404);
      });
  });
});

app.put("/api/report/post/update", jsonParser, function (req, res) {
  const sql =
      "UPDATE report " +
      "SET id = ?, name = ?, description = ?, DataStream_id = ?" +
      ` WHERE id = ${req.body.id} `;
  const parts = [req.body.id, req.body.name, req.body.description, req.body.DataStream_id]

  dbConnection.connect(function (err) {
      if (err) throw err;

      dbConnection.query(sql, parts,(err, result, fields) => {
          if (err) throw err;
          result ? res.send(result) : res.sendStatus(500);
      });
  });
});

const PORT = 3000 || process.env.PORT;

try {
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
} catch (error) {
    console.log(error);
}
