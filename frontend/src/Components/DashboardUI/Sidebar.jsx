import React, { useState } from "react";

function Sidebar(props) {
    const [isAllCourseOpen, setIsAllCourseOpen] = useState(1);
    const isAdmin = localStorage.getItem("isAdmin");
    const handleAllCourses = () => {
        setIsAllCourseOpen(1);
        props.handleAllCourses();
    };
    const handleAddCourse = () => {
        setIsAllCourseOpen(0);
        props.handleAddCourse();
    };
    const handleMyCourses = () => {
        setIsAllCourseOpen(0);
        props.handleMyCourses();
    };
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">Dashboard</div>
            </div>
            <ul className="sidebar-list">
                {
                    <li
                        className={`sidebar-list-item${
                            isAllCourseOpen ? " selected" : ""
                        }`}
                        onClick={handleAllCourses}
                    >
                        All Courses
                    </li>
                }
                {isAdmin === "0" && (
                    <li
                        className={`sidebar-list-item${
                            !isAllCourseOpen ? " selected" : ""
                        }`}
                        onClick={handleMyCourses}
                    >
                        My Courses
                    </li>
                )}
                {isAdmin === "1" && (
                    <li
                        className={`sidebar-list-item${
                            !isAllCourseOpen ? " selected" : ""
                        }`}
                        onClick={handleAddCourse}
                    >
                        Add Course
                    </li>
                )}
            </ul>
        </aside>
    );
}

export default Sidebar;
