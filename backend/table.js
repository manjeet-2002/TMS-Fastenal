const { Database } = require("sqlite3");

let sql;
//Hello
const sqlite3 = require("sqlite3").verbose();

const db = new Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

//---------Creating Courses Table--------

/*const courses_create = `CREATE TABLE courses(c_id INTEGER PRIMARY KEY,
    c_name TEXT,
    start_date TEXT,
    end_date TEXT,
    duration INTEGER,
    credits INTEGER,
    max_attendees INTEGER)`;
db.run(courses_create, (err) => {
  if (err) console.log(err);
});
sql = `INSERT INTO COURSES VALUES(?,?,?,?,?,?,?)`;
db.run(sql, [1, "JAVA", "2020-01-18", "2020-01-31", 120, 1, 30], (err) => {
  if (err) return console.log(err);
});
db.run(sql, [3, "JAVA", "2020-01-18", "2020-01-31", 120, 1, 30], (err) => {
  if (err) return console.log(err);
});
db.run(sql, [5, "c++", "2020-01-18", "2020-01-31", 120, 1, 30], (err) => {
  if (err) return console.log(err);
});
*/

//------------Creating Users table------------
/*
db.serialize(() => {
  const users_create = `CREATE TABLE users(u_id INTEGER PRIMARY KEY, u_name, password)`;

  db.run(users_create, (err) => {
    if (err) return console.log(err);
  });

  sql = `INSERT INTO users VALUES(?,?,?)`;

  db.run(sql, [1, "Manjeet", "manjeet123"], (err) => {
    if (err) return console.log(err);
  });

  db.run(sql, [2, "Amrit", "Amrit123"], (err) => {
    if (err) return console.log(err);
  });

  db.all("SELECT * from users", (error, rows) => {
    console.log(rows);
  });
});
*/

//-------Creating Module Table--------------

/*db.serialize(() => {
  const modules_create = `CREATE TABLE modules
  (m_id INTEGER,
  m_name,
  duration INTEGER,
  c_id INTEGER,
  FOREIGN KEY(c_id) REFERENCES courses(c_id)
  PRIMARY KEY(m_id,c_id)
  )`;
  db.run(modules_create, (err) => {
    if (err) return console.error(err);
  });
  sql = `INSERT INTO modules VALUES (?,?,?,?)`;
  db.run(sql, [1, "Introduction to Java", 3, 1], (err) => {
    if (err) console.error(err);
  });
  db.run(sql, [1, "Introduction to Java", 10, 3], (err) => {
    if (err) console.error(err);
  });
  db.run(sql, [1, "Introduction to C++", 10, 5], (err) => {
    if (err) console.error(err);
  });
});*/

db.close();
