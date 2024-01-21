import React from "react";
import AddCourseForm from "./AddCourse/AddCourseForm";
import CourseList from "../CourseComp/CourseList";

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

function Home(props) {
    return (
        <main className="main-container">
            {props.showForm > 0 && <AddCourseForm />}
            {props.showForm === 0 && <CourseList options={options} isAdmin={props.isAdmin} courses={courses}/>}
        </main>
    );
}

export default Home;