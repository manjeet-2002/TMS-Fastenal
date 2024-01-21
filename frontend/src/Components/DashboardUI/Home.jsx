import React from "react";
import AddCourseForm from "./AddCourse/AddCourseForm";
import CourseList from "../CourseComp/CourseList";

let options = ["All Courses", "Upcoming Courses", "Courses Enrolled"];
// options = ["All Courses", "Upcoming Courses"]

function Home(props) {
    return (
        <main className="main-container">
            {props.showForm > 0 && <AddCourseForm />}
                {props.showForm === 0 && (
                    <CourseList isAdmin={props.isAdmin} options={options}/>
                )}
        </main>
    );
}

export default Home;
