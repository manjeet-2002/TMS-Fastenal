import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const options = ["Past Courses", "Current Courses", "Upcoming Courses"];

function Dashboard(props) {
    const navigate = useNavigate();
    const [showObject, setshowObject] = useState({
        showForm: 0,
        showAllCourses: 1,
        showMyCourses: 0,
    });
    const [courseType, setcourseType] = useState(options[1]);
    const handleAddCourse = () => {
        setshowObject((prevState) => ({
            ...prevState,
            showForm: 1,
            showAllCourses: 0,
            showMyCourses: 0,
        }));
    };
    const handleAllCourses = () => {
        setshowObject((prevState) => ({
            ...prevState,
            showForm: 0,
            showAllCourses: 1,
            showMyCourses: 0,
        }));
    };
    const handleMyCourses = () => {
        setshowObject((prevState) => ({
            ...prevState,
            showForm: 0,
            showAllCourses: 0,
            showMyCourses: 1,
        }));
    };
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setcourseType(selectedValue);
    };
    useEffect(() => {
        if (localStorage.getItem("uid") === null) navigate("/login");
    }, [navigate]);
    return (
        <div className="grid-container">
            <Sidebar
                handleAddCourse={handleAddCourse}
                handleMyCourses={handleMyCourses}
                handleAllCourses={handleAllCourses}
            />
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
            <Home
                options={options}
                courseType={courseType}
                showForm={showObject.showForm}
                showAllCourses={showObject.showAllCourses}
                showMyCourses={showObject.showMyCourses}
            />
        </div>
    );
}

export default Dashboard;
