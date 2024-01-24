const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //
  //-------GET ALL THE USERS-------------------

  router.get("/", (req, res) => {
    try {
      db.all(`select * from users`, [], (err, rows) => {
        if (err) return res.status(400).json({ message: "Bad Request" });

        return res.status(200).json({
          data: rows,
          success: true,
        });
      });
    } catch (err) {
      if (err) return res.status(400).json({ message: "Bad Request" });
    }
  });

  //----------TOGGLE COURSE ENROLLMENT-----------------

  router.put("/:u_id/enrollment", (req, res) => {
    try {
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
              res.status(404).json({ message: err });
            } else {
              db.run(
                `UPDATE courses SET enrolled=enrolled-1 WHERE c_id=(?)`,
                [c_id],
                (err) => {
                  if (err) {
                    res.status(404).json({ message: err });
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
            else if (rows.length > 0) {
              res.status(400).json({ message: "Max Attendees!!!" });
            } else {
              db.run(
                `INSERT INTO enrollments VALUES (?,?,?,?)`,
                [c_id, u_id, 0, 0],
                (err) => {
                  if (err) {
                    console.log(err);
                    return res
                      .status(500)
                      .json({ message: "User is Already Enrolled!" });
                  } else {
                    db.run(
                      `UPDATE courses SET enrolled=enrolled+1 WHERE c_id=(?)`,
                      [c_id],
                      (err) => {
                        //CHECK STATUS CODE

                        if (err) {
                          res.status(404).json({ message: err });
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
      if (err) return res.status(400).json({ message: err });
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
