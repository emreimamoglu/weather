const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.get("/api/place/textsearch", function (req, res) {
  const query = req.query.query;
  const key = req.query.key;

  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${key}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send(error.message));
});

app.get("/api/weather", function (req, res) {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const key = req.query.appid;

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(4000, function () {
  console.log("Proxy server listening on port 4000");
});
