import React from "react";

function Sidebar(props) {
    const isAdmin = localStorage.getItem("isAdmin");
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">Dashboard</div>
            </div>
            <ul className="sidebar-list">
                {
                    <li
                        className="sidebar-list-item"
                        onClick={props.handleAllCourses}
                    >
                        All Courses
                    </li>
                }
                {isAdmin === "0" && (
                    <li
                        className="sidebar-list-item"
                        onClick={props.handleMyCourses}
                    >
                        My Courses
                    </li>
                )}
                {isAdmin === "1" && (
                    <li
                        className="sidebar-list-item"
                        onClick={props.handleAddCourse}
                    >
                        Add Course
                    </li>
                )}
            </ul>
        </aside>
    );
}

export default Sidebar;
