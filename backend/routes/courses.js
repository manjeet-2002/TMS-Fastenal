const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //--------GET ALL COURSES-------------
  router.get("/", (req, res) => {
    const u_id = req.query.u_id;
    console.log(u_id);
    try {
      db.all(
        `select * from courses as a left join (SELECT c_id as isEnrolled FROM enrollments WHERE u_id=(?)) as b on a.c_id = b.isEnrolled`,
        [u_id],
        (err, rows) => {
          if (err)
            return res.json({
              success: false,
              status: 400,
              msg: "Resource Not found",
            });
          return res.json({
            status: 200,
            data: rows,
            success: true,
          });
        }
      );
    } catch (err) {
      if (err) return res.json({ success: false, status: 400 });
    }
  });
  //----- SHow ALL USERS ENROLLED IN THE COURSE
  //CHECK STATUS CODES
  //If there are no rows then i will return message no Student enrolled
  router.get("/:c_id/attendance", (req, res) => {
    try {
      const c_id = req.params.c_id;
      console.log("msg : " + c_id);
      db.all(
        `SELECT enrollments.u_id,users.u_name,enrollments.attended FROM enrollments JOIN users ON users.u_id=enrollments.u_id AND enrollments.c_id=(?)`,
        [c_id],
        (err, rows) => {
          if (err) {
            console.log("bye1");

            return res.status(500).json({ message: err });
          } else {
            console.log(rows);
            return res.status(200).json(rows);
          }
        }
      );
    } catch {
      console.error("error");
      res.status(500).json({ message: "Server error" });
    }
  });
  //--- PUT REQUEST FOR ATTENDANCE
  router.put("/:c_id/attendance", (req, res) => {
    const passed = 1;
    try {
      const c_id = req.params.c_id;
      console.log(":Hello");

      const users = req.body;

      users.forEach((user) => {
        console.log(user);

        db.run(
          `UPDATE enrollments SET attended=(?) WHERE u_id=(?) AND c_id=(?)`,
          [user.attended, user.u_id, c_id],
          (err) => {
            if (err) {
              passed = 0;

              // return console.log(err);
              // return res.status(500).json({ message: err });
            }
          }
        );
      });
      if (passed == 0) {
        res.status(500).json({ message: "Internal Error" });
      } else {
        res.status(200).json({ message: "Attendance Marked Succesfully!" });
      }
    } catch (error) {
      console.error("error");
      res.status(500).json({ message: "Server error" });
    }
  });
  // I WILL GET users allong with their current attendance system
  //---------GET A SPECIFIC COURSE-------------

  router.get("/:c_id", async (req, res) => {
    try {
      const c_id = req.params.c_id;
      const courseDetails = {};

      db.serialize(() => {
        db.get(
          `SELECT * FROM courses WHERE c_id=(?)`,
          [c_id],
          (err, course) => {
            console.log(course);

            if (!course)
              return res.status(404).json({ message: "resource not found" });
            if (err) return res.status(500).json({ message: "Internal Error" });
            courseDetails.course = course;
          }
        );

        db.all(
          `SELECT m_id, m_name FROM modules WHERE c_id=(?)`,
          [c_id],
          (err, modules) => {
            console.log(modules);
            if (!modules)
              return res.status(404).json({ message: "resource not found" });
            if (err) return res.status(500).json({ message: "Internal Error" });
            courseDetails.modules = modules;
            res.status(200).json(courseDetails);
          }
        );
      });
    } catch (error) {
      console.error(error);
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
        `INSERT INTO courses VALUES(?,?,?,?,?,?,?,?)`,
        [
          c_id,
          c_name,
          start_date,
          end_date,
          parseInt(duration),
          parseInt(credits),
          parseInt(max_attendees),
          0,
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

  // KINDLY SEND old enrolled value in the payload
  router.put("/", (req, res) => {
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
        enrolled: enrolled,
      } = req.body;
      console.log(c_id, modules, c_name);

      db.run(`DELETE FROM modules WHERE c_id=(?)`, [c_id], (err) => {
        if (err) return console.error(err);
      });

      db.run(`DELETE FROM courses WHERE c_id=(?)`, [c_id], (err) => {
        if (err) return console.error(err);
      });
      db.run(
        `INSERT INTO courses VALUES(?,?,?,?,?,?,?,?,?)`,
        [
          c_id,
          c_name,
          start_date,
          end_date,
          parseInt(duration),
          parseInt(credits),
          parseInt(max_attendees),
          parseInt(enrolled),
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
// -- PUT REQUEST FOR COURSE EDIT

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
