const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const bodyParser = require("body-parser");
const sqlite = require("sqlite3").verbose();

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite.Database("./test.db", sqlite.OPEN_READWRITE, (err) => {
  if (err) return console.error(err);
});

const coursesRoute = require("./routes/courses")(db);
const usersRoute = require("./routes/users")(db);
const authRoute = require("./routes/auth")(db);

app.use("/api/courses", coursesRoute);
app.use("/api/users", usersRoute);
app.use("/api", authRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
