const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const coursesRoute = require("./routes/courses");

app.use("/api/courses", coursesRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
