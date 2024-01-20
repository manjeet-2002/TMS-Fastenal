const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //
  router.post("/login", (req, res) => {
    const { email, password } = req.body;

    try {
      db.get(
        `SELECT COUNT(*) as isPresent FROM users WHERE email = (?) AND password = (?)`,
        [email, password],
        (err, result) => {
          if (err)
            return res.status(500).json({ message: "Internal Server Error" });

          if (result.isPresent)
            return res
              .status(200)
              .json({ isAuth: true, message: "Login successfull" });
          else
            return res
              .status(401)
              .json({ isAuth: false, message: "Bad Credentials" });
        }
      );
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  router.post("/signup", (req, res) => {
    try {
      const { email, u_name, password } = req.body;

      db.get(
        `SELECT COUNT(*) AS userExists FROM users WHERE email = (?)`,
        [email],
        (err, result) => {
          if (err)
            return res.status(500).json({ message: "Internal Server Error" });

          if (result.userExists) {
            return res.status(400).json({ message: "Email already in use" });
          } else {
            db.run(
              `INSERT INTO users (u_name, password, email) VALUES(?,?,?)`,
              [u_name, password, email],
              (err) => {
                if (err) return console.error(err);
                res.status(201).json({
                  status: 201,
                  message: "SignUp successfull",
                });
              }
            );
          }
        }
      );
    } catch (err) {
      if (err)
        return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  return router;
};
