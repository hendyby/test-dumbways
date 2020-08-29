const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_video",
});

connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Database Connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let datacategory = [];
  connection.query("SELECT * FROM category_tb", (err, data) => {
    if (err) throw err;
    datacategory = data;
  });
  connection.query(
    "SELECT video_tb.id, video_tb.title,category_tb.name as category, video_tb.attache, video_tb.thumbnail FROM video_tb INNER JOIN category_tb on video_tb.category_id = category_tb.id",
    (err, data) => {
      if (err) throw err;
      res.render("index", { datavideo: data, datacategory: datacategory });
    }
  );
});

app.get("/detail-video/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    `SELECT video_tb.id, video_tb.title,category_tb.name as category, video_tb.attache, video_tb.thumbnail FROM video_tb INNER JOIN category_tb on video_tb.category_id = category_tb.id WHERE video_tb.id=${id}`,
    (err, data) => {
      if (err) throw err;
      res.render("detail", { datavideo: data });
    }
  );
});

app.get("/delete-video/:id", (req, res) => {
  const id = req.params.id;
  connection.query(`delete from video_tb where id=${id}`, (err, data) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.get("/edit-video/:id", (req, res) => {
  const id = req.params.id;
  let datacategory = [];

  connection.query("select * from category_tb", (err, data) => {
    if (err) throw err;
    datacategory = data;
  });

  connection.query(`select * from video_tb where id= ${id}`, (err, data) => {
    if (err) throw err;
    res.render("edit", {
      datavideo: data,
      datacategory: datacategory,
    });
  });
});

app.post("/edit-video/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const category = req.body.category;
  const attache = req.body.attache;
  const thumbnail = req.body.thumbnail;
  connection.query(
    `UPDATE video_tb SET ? where id=${id}`,
    {
      title: title,
      category_id: category,
      attache: attache,
      thumbnail: thumbnail,
    },
    (err) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

app.post("/addvideo", (req, res) => {
  const title_name = req.body.title_name;
  const category_name = req.body.category_name;
  const attache_name = req.body.attache_name;
  const thumbnail_name = req.body.thumbnail_name;
  connection.query(
    "INSERT INTO video_tb SET ?",
    {
      title: title_name,
      category_id: category_name,
      attache: attache_name,
      thumbnail: thumbnail_name,
    },
    (err) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

app.post("/addcategory", (req, res) => {
  const category_name = req.body.category_name;
  connection.query(
    "INSERT INTO category_tb SET ?",
    { name: category_name },
    (err) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

app.listen(port, () => {
  console.log(`app is running in port ${port}`);
});
