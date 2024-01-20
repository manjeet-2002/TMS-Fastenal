import { useState } from "react";
import "./CourseList.css";
import CourseItem from "./CourseItem";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
            <FormControl>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={courseType}
                    label="Age"
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div className="course__list">{courses}</div>
        </>
    );
};

export default CourseList;
