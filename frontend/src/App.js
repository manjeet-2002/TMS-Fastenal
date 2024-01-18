import logo from "./logo.svg";
import "./App.css";
import { SignUp } from "./Components/SignUp";
import { Login } from "./Components/Login";
import CourseList from "./Components/CourseComp/CourseList";

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
]

let options = ["All Courses", "Upcoming Courses", "Courses Enrolled"]
// options = ["All Courses", "Upcoming Courses"]

function App() {
    return (
        // <SignUp/>
        // <Login />
        <CourseList courses={courses} options={options} isAdmin={0}/>
    );
}

export default App;
