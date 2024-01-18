const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //
  router.get("/", (req, res) => {
    try {
      db.all(`select * from users`, [], (err, rows) => {
        if (err) return res.json({ success: false, status: 400, msg: "hello" });

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

  router.post("/", (req, res) => {
    res.send("USER ADDED");
  });

  return router;
};
