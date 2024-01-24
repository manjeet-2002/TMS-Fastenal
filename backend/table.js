const { Database } = require("sqlite3");

let sql;
//Hello
const sqlite3 = require("sqlite3").verbose();

const db = new Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

// db.run(`DROP TABLE modules`);
// ---------Creating Courses Table--------
// db.run(`ALTER TABLE courses ADD COLUMN enrolled INTEGER DEFAULT 0`);
/*db.serialize(() => {
  const courses_create = `CREATE TABLE courses(c_id TEXT PRIMARY KEY,
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
  db.run(sql, ["1", "JAVA", "2020-01-18", "2020-01-31", 120, 1, 30], (err) => {
    if (err) return console.log(err);
  });
  db.run(sql, ["3", "JAVA", "2020-01-18", "2020-01-31", 120, 1, 30], (err) => {
    if (err) return console.log(err);
  });
  db.run(sql, ["5", "c++", "2020-01-18", "2020-01-31", 120, 1, 30], (err) => {
    if (err) return console.log(err);
  });
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
/*
db.serialize(() => {
  const modules_create = `CREATE TABLE modules
  (m_id INTEGER,
  m_name,
  c_id,
  FOREIGN KEY(c_id) REFERENCES courses(c_id)
  PRIMARY KEY(m_id,c_id)
  )`;
  db.run(modules_create, (err) => {
    if (err) return console.error(err);
  });
  sql = `INSERT INTO modules VALUES (?,?,?)`;
  db.run(sql, [1, "Introduction to Java", "1"], (err) => {
    if (err) console.error(err);
  });
  db.run(sql, [1, "Introduction to Java", "3"], (err) => {
    if (err) console.error(err);
  });
  db.run(sql, [1, "Introduction to C++", "5"], (err) => {
    if (err) console.error(err);
  });
});
*/
// //------ Creating Enrollments Table
/*
db.serialize(() => {
  const enrollments_create = `CREATE TABLE enrollments
  (c_id,
  u_id INTEGER,
  attended INTEGER,
  score INTEGER,
  FOREIGN KEY(c_id) REFERENCES courses(c_id),
  FOREIGN KEY(u_id) REFERENCES users(u_id)
  PRIMARY KEY(u_id,c_id)
  )`;
  db.run(enrollments_create, (err) => {
    if (err) return console.error(err);
  });
  sql = `INSERT INTO enrollments VALUES (?,?,?,?)`;
  db.run(sql, ["3", 1, 1, 10], (err) => {
    if (err) console.error(err);
  });
  db.run(sql, ["2", 1, 0, 7], (err) => {
    if (err) console.error(err);
  });
  db.run(sql, ["3", 2, 0, 3], (err) => {
    if (err) console.error(err);
  });
});
*/

// db.run(`delete from users`, (err) => console.log(err));
// db.run(`delete from users`);
// db.run(`delete from enrollments`);
// db.run(`delete from modules`);

db.close();
