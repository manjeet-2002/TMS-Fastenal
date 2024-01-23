import { useState, useEffect } from "react";
import AddCourseForm from "./AddCourse/AddCourseForm";
import CourseList from "../CourseComp/CourseList";

function Home(props) {
    const [courses, setCourses] = useState([]);
    const uid = localStorage.getItem("uid");
    useEffect(() => {
        if (props.showAllCourses === 1) {
            fetch("http://localhost:5000/api/courses")
                .then((response) => response.json())
                .then((data) => {
                    setCourses(data.data);
                });
        }
        if (props.showMyCourses === 1) {
            fetch(`http://localhost:5000/api/users/${uid}/courses`)
                .then((response) => response.json())
                .then((data) => {
                    setCourses(data);
                });
        }
    }, [props.showAllCourses, props.showMyCourses, uid, props.courseType]);
    return (
        <main className="main-container">
            {props.showForm === 1 && <AddCourseForm />}
            {props.showForm === 0 && (
                <CourseList
                    showAllCourses={props.showAllCourses}
                    showMyCourses={props.showMyCourses}
                    courses={courses}
                    options={props.options}
                    courseType={props.courseType}
                />
            )}
        </main>
    );
}

export default Home;
