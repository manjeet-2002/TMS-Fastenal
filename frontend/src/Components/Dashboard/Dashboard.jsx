import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useState } from "react";

function App() {
    const [showForm, setShowForm] = useState(0);
    const [showAllCourses, setShowAllCourses] = useState(1);
    const [showUpcomingCourses, setUpcomingCourses] = useState(0);
    const handleAddCourse = () => {
        setShowForm(1);
        setShowAllCourses(0);
        setUpcomingCourses(0);
    };
    const handleAllCourses = () => {
        setShowForm(0);
        setShowAllCourses(1);
        setUpcomingCourses(0);
    };
    const handleUpcomingCourses = () => {
        setShowForm(0);
        setShowAllCourses(0);
        setUpcomingCourses(1);
    };
    return (
        <div className="grid-container">
            <Header />
            <Sidebar
                handleAddCourse={handleAddCourse}
                handleAllCourses={handleAllCourses}
                handleUpcomingCourses={handleUpcomingCourses}
            />
            <Home showForm={showForm} />
        </div>
    );
}

export default App;
