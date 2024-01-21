import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useState } from "react";

function Dashboard(props) {
    const [showForm, setShowForm] = useState(0);
    const [showAllCourses, setShowAllCourses] = useState(1);
    const handleAddCourse = () => {
        setShowForm(1);
        setShowAllCourses(0);
    };
    const handleAllCourses = () => {
        setShowForm(0);
        setShowAllCourses(1);
    };
    return (
        <div className="grid-container">
            <Sidebar
                isAdmin={props.isAdmin}
                handleAddCourse={handleAddCourse}
                handleAllCourses={handleAllCourses}
            />
            <Home isAdmin={props.isAdmin} showForm={showForm} />
        </div>
    );
}

export default Dashboard;
