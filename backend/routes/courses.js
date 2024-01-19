const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //
  router.get("/", (req, res) => {
    try {
      db.all(`select * from courses`, [], (err, rows) => {
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
      const {
        c_id,
        c_name,
        start_date,
        end_date,
        duration,
        credits,
        max_attendees,
      } = req.body;

      db.run(
        `INSERT INTO courses VALUES(?,?,?,?,?,?,?)`,
        [c_id, c_name, start_date, end_date, duration, credits, max_attendees],
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
