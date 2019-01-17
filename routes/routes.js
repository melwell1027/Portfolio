const express = require("express");
const path = require("path");
const app = express.Router();

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/aboutme", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/about-me.html"));
});

app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
});

app.get("/resume", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/resume.html"));
});


module.exports = app;