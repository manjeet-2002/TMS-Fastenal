import React from 'react'
import "./LogSign.css";
export const SignUp = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Signup</title>
  <link rel="stylesheet" href="SignUp.css" />
  <div className="outer-box">
    <div className="inner-box">
      <header className="signup-header">
        <h1>Sign Up</h1>
      </header>
      <main className="signup-body">
        <form action="#">
          <p>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your name here"
              required=""
            />
          </p>
          <p>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="xyz@fastenal.com"
              required=""
            />
          </p>
          <p>
            <label htmlFor="password">Your New Password</label>
            <input
              type="password"
              id="password"
              placeholder="Set a strong password"
              required=""
            />
          </p>
          <p>
            <input type="submit" id="submit" defaultValue="Create Account" />
          </p>
        </form>
      </main>
      <footer className="signup-footer">
        <p>
          Already have an Account? <a href="#">Login</a>{" "}
        </p>
      </footer>
    </div>
    <div className="circle c1" />
    <div className="circle c2" />
  </div>
</>
  )
}
