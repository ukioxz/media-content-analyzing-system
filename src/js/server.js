const express = require("express");
const fs = require("fs");
const mysql = require('mysql2');

const app = express();
const jsonParser = express.json();

const connectionOptions = {
    host: "localhost",
    user: "root",
    password: "devPass2021$",
    database: "mcas"
};

const dbConnection = mysql.createConnection(connectionOptions);

app.get("/api/accounts/all", function (req, res) {
    dbConnection.connect(function (err) {
        if (err) throw err;

        dbConnection.query("SELECT * FROM account", (err, result, fields) => {
            if (err) throw err;
            res.send(result);
        });
    });
});

app.get("/api/accounts/:id", function (req, res) {
    const sql =
        "SELECT * " +
        "FROM account " +
        `WHERE id = ${req.params.id}`;

    dbConnection.connect(function (err) {
        if (err) throw err;

        dbConnection.query(sql, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.post("/api/accounts/add", jsonParser, function (req, res) {
    if (!req.body)
        return res.sendStatus(400);

    let account = [req.body.name, req.body.role, req.body.login, req.body.password];

    const sql =
        "insert into account (name, role, login, password) values (?, ?, ?, ?)";

    dbConnection.connect(function (err) {
        if (err) throw err;

        dbConnection.query(sql, account, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.delete("/api/accounts/delete/:id", function (req, res) {
    const sql =
        "DELETE " +
        "FROM account " +
        `WHERE id = ${req.params.id}`;

    dbConnection.connect(function (err) {
        if (err) throw err;

        dbConnection.query(sql, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.put("/api/accounts/update", jsonParser, function (req, res) {
    const sql =
        "UPDATE account " +
        "SET name = ?, role = ?, login = ?, password = ?" +
        `WHERE id = ${req.body.id}`;
    const parts = [req.body.name, req.body.role, req.body.login, req.body.password]

    dbConnection.connect(function (err) {
        if (err) throw err;

        dbConnection.query(sql, parts,(err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(500);
        });
    });
});

app.listen(3000);
