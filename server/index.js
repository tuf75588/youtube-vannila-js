const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const fetch = require("node-fetch");
require("dotenv").config();
app.use(morgan("tiny"));
app.use(cors());

app.get("/videos", (req, res) => {
  const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLTtD0b7yyEv20-j54OYUK1Nx83jZ9dKyd&maxResults=50";
  fetch(`${url}&key=${process.env.GOOGLE_API_KEY}`)
    .then(res => res.json())
    .then(json => {
      res.json(json.items);
    });
});
//404 handler
function notFound(req, res, next) {
  res.status(404);
  const error = new Error("not found");
  next(error);
}
function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message
  });
}
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("====================================");
  console.log("listening on " + port);
  console.log("====================================");
});
