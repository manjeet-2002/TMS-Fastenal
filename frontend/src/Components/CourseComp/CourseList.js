import { useState, useEffect } from "react";
import "./CourseList.css";
import CourseItem from "./CourseItem";

const CourseList = (props) => {
    const [courseToDisplay, setCourseToDisplay] = useState([]);
    const courseStateList = {
        pastCourses: [],
        currentCourses: [],
        upcomingCourses: [],
    };
    courseStateList.pastCourses = props.courses.filter(
        (course) => new Date(course.end_date).getTime() < new Date().getTime()
    );
    courseStateList.currentCourses = props.courses.filter(
        (course) =>
            new Date(course.start_date).getTime() <= new Date().getTime() &&
            new Date(course.end_date).getTime() >= new Date().getTime()
    );
    courseStateList.upcomingCourses = props.courses.filter(
        (course) => new Date(course.start_date).getTime() > new Date().getTime()
    );
    console.log(props);
    console.log(courseStateList);
    // useEffect(() => {
    //     if (props.courseType === props.options[0]) {
    //         setCourseToDisplay(courseStateList.pastCourses);
    //     } else if (props.courseType === props.options[1]) {
    //         setCourseToDisplay(courseStateList.currentCourses);
    //     } else {
    //         setCourseToDisplay(courseStateList.upcomingCourses);
    //     }
    // }, [props.showAllCourses, props.showMycourses, props.options]);
    return (
        <>
            {props.courseType === props.options[0] && <div className="course__list">
                {courseStateList.pastCourses.map((course) => {
                    return (
                        <CourseItem course={course} />
                    );
                })}
            </div>}
            {props.courseType === props.options[1] && <div className="course__list">
                {courseStateList.currentCourses.map((course) => {
                    return (
                        <CourseItem course={course} />
                    );
                })}
            </div>}
            {props.courseType === props.options[2] && <div className="course__list">
                {courseStateList.upcomingCourses.map((course) => {
                    return (
                        <CourseItem course={course} />
                    );
                })}
            </div>}
        </>
    );
};

export default CourseList;
