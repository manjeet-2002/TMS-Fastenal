import React from "react";
import "./LogSign.css";

export const Login = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>TMS</title>
      <link rel="stylesheet" href="SignUp.css" />
      <div className="outer-box">
        <div className="inner-box">
          <header className="signup-header">
            <h1>Log In</h1>
          </header>
          <main className="signup-body">
            <form action="#">
              <p>
                <label htmlFor="email">Enter Your Email Id</label>
                <input
                  type="email"
                  id="email"
                  placeholder="xyz@fastenal.com"
                  required=""
                />
              </p>
              <p>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password here"
                  required=""
                />
              </p>
              <p>
                <input
                  type="submit"
                  id="submit"
                  defaultValue="Create Account"
                />
              </p>
            </form>
          </main>
          <footer className="signup-footer">
            <p>
              Didn't have an Account? <a href="#">SignUp</a>{" "}
            </p>
          </footer>
        </div>
        <div className="circle c1" />
        <div className="circle c2" />
      </div>
    </>
  );
};
