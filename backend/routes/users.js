const express = require("express");
const router = express.Router();

const sqlite = require("sqlite3").verbose();

router.get("/", (req, res) => {
  try {
    const db = new sqlite.Database(
      "./test.db",
      sqlite.OPEN_READWRITE,
      (err) => {
        if (err) return console.error(err);
      }
    );
    db.all(`select * from users`, [], (err, rows) => {
      if (err) return res.json({ success: false, status: 400, msg: "hello" });
      db.close();
      return res.json({
        status: 200,
        data: rows,
        success: true,
      });
    });
  } catch (err) {
    if (err) return res.json({ success: false, status: 400 });
  }
});

db.post("/", (req, res) => {
  res.send("USER ADDED");
});

module.exports = router;
