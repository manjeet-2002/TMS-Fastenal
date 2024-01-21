import { useEffect, useState } from "react";
import "./CourseList.css";
import CourseItem from "./CourseItem";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CourseList = (props) => {
    const uid = localStorage.getItem("uid");
    const options = props.options;
    const [courseType, setcourseType] = useState(options[0]);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        if (courseType === options[0]) {
            fetch("http://localhost:5000/api/courses")
                .then((response) => response.json())
                .then((data) => setCourses(data.data));
        } else if (courseType === options[1]) {
        } else {
            console.log("reached");
            fetch(`http://localhost:5000/api/users/${uid}/courses`)
                .then((response) => response.json())
                .then((data) => setCourses(data));
        }
    }, [courseType, options, uid]);
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setcourseType(selectedValue);
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
            <div className="course__list">
                {courses.map((course) => {
                    return (
                        <CourseItem isAdmin={props.isAdmin} course={course} />
                    );
                })}
            </div>
        </>
    );
};

export default CourseList;
