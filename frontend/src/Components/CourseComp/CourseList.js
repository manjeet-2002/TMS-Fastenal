import { useState } from "react";
import "./CourseList.css";
import CourseItem from "./CourseItem";

const CourseList = (props) => {
    const options = props.options;
    const [courseType, setcourseType] = useState(options[0]);
    const courseList = props.courses.map((course) => {
        return <CourseItem isAdmin={props.isAdmin} course={course} />;
    });
    const [courses, setCourses] = useState(courseList);
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        let newCourseList = [];
        if (selectedValue === options[0]) {
            newCourseList = props.courses.map((course) => {
                return <CourseItem isAdmin={props.isAdmin} course={course} />;
            });
        } else if (selectedValue === options[1]) {
            const newCourseListfiltered = props.courses.filter(
                (course) => course.startDate > new Date().getTime()
            );
            newCourseList = newCourseListfiltered.map((course) => {
                return <CourseItem isAdmin={props.isAdmin} course={course} />;
            });
        } else {
            const newCourseListfiltered = props.courses.filter(
                (course) => course.isEnrolled === 1
            );
            newCourseList = newCourseListfiltered.map((course) => {
                return <CourseItem isAdmin={props.isAdmin} course={course} />;
            });
        }
        setcourseType(selectedValue);
        setCourses(newCourseList);
    };
    return (
        <>
            <div>
                <select
                    name="filter"
                    value={courseType}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="course__list">{courses}</div>
        </>
    );
};

export default CourseList;
