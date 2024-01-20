import React from "react";

function Sidebar(props) {
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">Dashboard</div>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item" onClick={props.handleAllCourses}>All Courses</li>
                <li className="sidebar-list-item" onClick={props.handleUpcomingCourses}>Upcoming Courses</li>
                <li className="sidebar-list-item" onClick={props.handleAddCourse}>Add Course</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
