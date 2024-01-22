import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Error from "./Components/Error";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./Components/ContextProvider/Context";
import Dashboard from "./Components/DashboardUI/Dashboard";
const courses = [
  {
    name: "javascript",
    startDate: new Date(2012, 2, 10),
    endDate: new Date(2012, 3, 12),
    isEnrolled: 1,
    isCompleted: 1,
  },
  {
    name: "html",
    startDate: new Date(2020, 2, 10),
    endDate: new Date(2022, 2, 10),
    isEnrolled: 0,
    isCompleted: 0,
  },
  {
    name: "css",
    startDate: new Date(2012, 2, 10),
    endDate: new Date(2012, 3, 12),
    isEnrolled: 1,
    isCompleted: 1,
  },
  {
    name: "react js",
    startDate: new Date(2012, 2, 10),
    endDate: new Date(2012, 3, 12),
    isEnrolled: 0,
    isCompleted: 0,
  },
  {
    name: "game development",
    startDate: new Date(2012, 2, 10),
    endDate: new Date(2012, 3, 12),
    isEnrolled: 1,
    isCompleted: 0,
  },
  {
    name: "web development",
    startDate: new Date(2012, 2, 10),
    endDate: new Date(2012, 3, 12),
    isEnrolled: 1,
    isCompleted: 1,
  },
  {
    name: "c++",
    startDate: new Date(2022, 2, 10),
    endDate: new Date(2025, 3, 12),
    isEnrolled: 1,
    isCompleted: 0,
  },
  {
    name: "backend",
    startDate: new Date(2012, 2, 10),
    endDate: new Date(2012, 3, 12),
    isEnrolled: 1,
    isCompleted: 0,
  },
  {
    name: "ruby on rails",
    startDate: new Date(2025, 2, 10),
    endDate: new Date(2025, 3, 12),
    isEnrolled: 0,
    isCompleted: 0,
  },
  {
    name: "python",
    startDate: new Date(2026, 2, 10),
    endDate: new Date(2026, 3, 12),
    isEnrolled: 1,
    isCompleted: 0,
  },
];

let options = ["All Courses", "Upcoming Courses", "Courses Enrolled"];
options = ["All Courses", "Upcoming Courses"];

function App() {
  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);

  const history = useNavigate();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard isAdmin={0}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
