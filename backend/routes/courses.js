const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //--------GET ALL COURSES-------------
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

  //---------GET A SPECIFIC COURSE--------------

  router.get("/:c_id", (req, res) => {
    try {
      const c_id = req.params.c_id;

      db.get(`SELECT * FROM courses WHERE c_id=(?)`, [c_id], (err, course) => {
        console.log(course);

        if (!course)
          return res.status(404).json({ message: "resource not found" });
        if (err) return res.status(500).json({ message: "Internal Error" });
        res.status(200).json(course);
      });
    } catch {
      console.error("error");
      res.status(500).json({ message: "Server error" });
    }
  });

  //-----------POST A COURSE AND RESPECTIVE MODULES---------------

  router.post("/", (req, res) => {
    try {
      const {
        courseId: c_id,
        courseName: c_name,
        startDate: start_date,
        endDate: end_date,
        courseDuration: duration,
        courseCredits: credits,
        maxAttendees: max_attendees,
        dynamicList: modules,
      } = req.body;
      console.log(c_id, modules, c_name);
      db.run(
        `INSERT INTO courses VALUES(?,?,?,?,?,?,?)`,
        [
          c_id,
          c_name,
          start_date,
          end_date,
          parseInt(duration),
          parseInt(credits),
          parseInt(max_attendees),
        ],
        (err) => {
          if (err) return console.error(err);
        }
      );
      modules.forEach((module) => {
        console.log(module);
        db.run(
          `INSERT INTO modules VALUES (?,?,?)`,
          [module.m_id, module.name, c_id],
          (err) => {
            if (err) return console.error(err);
          }
        );
      });

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
//   router.post("/", (req, res) => {
//     try {
//       const {
//         c_id,
//         c_name,
//         start_date,
//         end_date,
//         duration,
//         credits,
//         max_attendees,
//       } = req.body;

//       db.run(
//         `INSERT INTO courses VALUES(?,?,?,?,?,?,?)`,
//         [c_id, c_name, start_date, end_date, duration, credits, max_attendees],
//         (err) => {
//           if (err) return console.error(err);
//         }
//       );
//       res.json({
//         status: 201,
//         success: true,
//       });
//     } catch (err) {
//       if (err) return res.json({ success: false, status: 400 });
//     }
//   });

//   return router;
// };

//--- POSTING A NEW COURSE
