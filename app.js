const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
require("dotenv").config();
const app = express();

const port = 3000;
// console.log(process.env.port);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/download", (req, res) => {
  const _url_ = "https://www.youtube.com/watch?v=lTxn2BuqyzU";
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(_url_, {
    format: "mp4",
  }).pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
