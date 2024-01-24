import React, { useEffect, useState } from "react";
import "./CourseDetails.css";
import axios from "axios";
import Attendance from "./Attendance";

const CourseDetails = (props) => {
  const isAdmin = localStorage.getItem("isAdmin");

  const [enrollState, setEnrollState] = useState(props.isEnrolled);
  console.log(isAdmin);
  const [courses, setCourses] = useState({
    c_id: "",
    c_name: "Loading...",
    start_date: null,
    end_date: null,
    duration: 0,
    credits: null,
    max_attendees: null,
  });
  const [module, setModule] = useState([
    { m_name: "Module 1" },
    { m_name: "Module 2" },
  ]);

  const [attendees, setAttendees] = useState([
    { u_id: 0, u_name: "Loading...", attended: 1 },
    { u_id: 1, u_name: "Loading...", attended: 0 },
  ]);

  const uid = localStorage.getItem("uid");

  async function handleEnrollment() {
    const is_enrolled = enrollState;
    const c_id = props.c_id;
    const url = `http://localhost:5000/api/users/${uid}/enrollment`;
    axios
      .put(url, {
        c_id,
        is_enrolled,
      })
      .then((res) => {
        console.log(res.data);

        if (res.status === 204) {
          setEnrollState((prevState) => !prevState);
          props.handleParentReload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    const url = `http://localhost:5000/api/courses/${props.c_id}/attendance`;
    axios
      .get(url)
      .then((res) => setAttendees(res.data))
      .catch((err) => console.error(err));
  }, [courses.c_id]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:5000/api/courses/${props.c_id}`)
        .then((res) => {
          console.log(res.data.course);
          setCourses(res.data.course);
          setModule(res.data.modules);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <div className="overlay">
      <div className="container">
        <h1 className="heading">{courses?.c_name}</h1>
        <p>Modules :</p>
        <ul>
          {module.map((item, index) => (
            <div className="box">
              <li key={index} className="list-item">
                {item.m_name}
              </li>
            </div>
          ))}
        </ul>

        <div>
          <p className="paragraph">{courses?.description}</p>
          <p className="paragraph">Duration: {courses?.duration} hours</p>
          <p className="paragraph">Start Date: {courses?.start_date} </p>
          <p className="paragraph">End Date: {courses?.end_date} </p>
          <p className="paragraph">Total Seats : {courses?.max_attendees}</p>
        </div>
        <div className="button-div">
          {new Date(courses?.end_date).getTime() >= new Date().getTime() &&
            isAdmin === "0" && (
              <button
                type="button"
                className="button"
                onClick={handleEnrollment}
              >
                {enrollState ? "Un-enroll" : "Enroll"}
              </button>
            )}
        </div>
        {isAdmin === "1" && (
          <Attendance attendees={attendees} c_id={props.c_id} />
        )}
      </div>
    </div>
  );
};
export default CourseDetails;
