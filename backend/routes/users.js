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
    try {
      const { u_id, u_name, password } = req.body;

      db.run(
        `INSERT INTO users VALUES(?,?,?)`,
        [u_id, u_name, password],
        (err) => {
          if (err) return console.error(err);
        }
      );
      res.json({
        status: 201,
        success: true,
      });
    } catch (err) {
      if (err) return res.json({ success: false, status: 400 });
    }
  });

  return router;
};
