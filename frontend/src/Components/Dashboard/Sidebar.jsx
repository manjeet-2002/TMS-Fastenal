import React from "react";

function Sidebar(props) {
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">Dashboard</div>
            </div>
            <ul className="sidebar-list">
                {props.isAdmin > 0 && (
                    <li
                        className="sidebar-list-item"
                        onClick={props.handleAllCourses}
                    >
                        All Courses
                    </li>
                )}
                {props.isAdmin > 0 && (
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
