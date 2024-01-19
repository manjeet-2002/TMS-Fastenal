import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
// options = ["All Courses", "Upcoming Courses"]

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
