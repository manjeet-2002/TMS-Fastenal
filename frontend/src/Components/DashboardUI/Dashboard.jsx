import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
    const navigate = useNavigate();
    
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

    useEffect(()=>{
        if(localStorage.getItem("uid")===null) navigate("/login");
    },[]);
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
