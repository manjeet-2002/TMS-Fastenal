const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //
  //-------GET ALL THE USERS-------------------

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

  //-----------GET A SPECIFIC USER-------------------

  // router.get("/:u_id", (req, res) => {
  //   try {
  //     const u_id = parseInt(req.params.u_id);

  //     db.get(`SELECT * FROM users WHERE u_id=(?)`, [u_id], (err, course) => {
  //       console.log(course);

  //       if (!course)
  //         return res.status(404).json({ message: "resource not found" });
  //       if (err) return res.status(500).json({ message: "Internal Error" });
  //       res.status(200).json(course);
  //     });
  //   } catch {
  //     console.error("error");
  //     res.status(500).json({ message: "Server error" });
  //   }
  // });

  //----------TOGGLE COURSE ENROLLMENT-----------------

  router.put("/:u_id/enrollment", (req, res) => {
    console.log("entered");

    try {
      // console.log("Hello");
      const u_id = parseInt(req.params.u_id);
      const c_id = req.body.c_id;
      const is_enrolled = req.body.is_enrolled;
      console.log(is_enrolled);
      if (is_enrolled) {
        db.run(
          `DELETE FROM enrollments WHERE u_id=(?) AND c_id=(?)`,
          [u_id, c_id],
          (err) => {
            if (err) {
              res.status(407).json({ message: err });
            } else {
              db.run(
                `UPDATE courses SET enrolled=enrolled-1 WHERE c_id=(?)`,
                [c_id],
                (err) => {
                  if (err) {
                    res.status(407).json({ message: err });
                  } else {
                    res.status(204).json({ message: "success" });
                  }
                }
              );
            }
          }
        );
      } else {
        db.all(
          `SELECT * FROM courses WHERE c_id=(?) AND enrolled=max_attendees`,
          [c_id],
          (err, rows) => {
            //CHECK STATUS CODE
            if (err) return res.status(500).json({ message: err });
            else if (!rows) {
              res.status(400).json({ message: "Max Attendees!!!" });
            } else {
              db.run(
                `INSERT INTO enrollments VALUES (?,?,?,?)`,
                [c_id, u_id, 0, 0],
                (err) => {
                  if (err)
                    return res
                      .status(500)
                      .json({ message: "User is Already Enrolled!" });
                  else {
                    db.run(
                      `UPDATE courses SET enrolled=enrolled+1 WHERE c_id=(?)`,
                      [c_id],
                      (err) => {
                        //CHECK STATUS CODE

                        if (err) {
                          res.status(407).json({ message: err });
                        } else {
                          res.status(204).json({ message: "success" });
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        );
      }
    } catch (err) {
      console.log("BYE");
      if (err) return res.json({ success: false, status: 400 });
    }

    //ASSUMING IT IS UPCOMING COURSE
  });

  // Route to get users specific enrolled courses (for "My Courses" tab)

  router.get("/:u_id/courses", (req, res) => {
    try {
      const u_id = parseInt(req.params.u_id);
      db.all(
        `SELECT *, 1 as isEnrolled FROM enrollments JOIN courses WHERE courses.c_id=enrollments.c_id AND enrollments.u_id=(?)`,
        [u_id],
        (err, enrolled_courses) => {
          console.log(enrolled_courses);

          if (!enrolled_courses)
            return res.status(404).json({ message: "resource not found" });
          if (err) return res.status(500).json({ message: "Internal Error" });

          res.status(200).json(enrolled_courses);
        }
      );
    } catch {
      console.error("error");
      res.status(500).json({ message: "Server error" });
    }
  });
  return router;
};
