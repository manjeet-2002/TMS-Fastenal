import React, { useEffect, useState } from "react";
import "./CourseDetails.css";
import axios from "axios";

const CourseDetails = (props) => {
  const [courses, setCourses] = useState({
    c_id: "",
    c_name: "Loading...",
    start_date: null,
    end_date: null,
    duration: 0,
    credits: null,
    max_attendees: null,
  });
  // let course={};
  // let modules=[];
  const [module, setModule] = useState([
    { m_name: "Module 1" },
    { m_name: "Module 2" },
  ]);

  // const handleEnroll = () => {
  //   // Add your enrollment logic here
  //     const u_id=localStorage.getItem("uid");
  //   ;
  // };

  // useEffect(()=>)

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:5000/api/courses/${props.c_id}`)
        .then((res) => {
          console.log(res.data.modules);
          setCourses(res.data.course);
          setModule(res.data.modules);

          // course = res.data.course;
          // modules = res.data.modules;
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []); //par use effect kab chalega wo sochna

  return (
    <div className="overlay">
      <div className="container">
        <h1 className="heading">{courses.c_name}</h1>
        <p>Modules :</p>
        <ul>
          {module.map((item) => (
            <div className="box">
              <li className="list-item">{item.m_name}</li>
            </div>
          ))}
        </ul>

        <div>
          <p className="paragraph">{courses.description}</p>
          <p className="paragraph">Duration: {courses.duration} hours</p>
          <p className="paragraph">Start Date: {courses.start_date} </p>
          <p className="paragraph">End Date: {courses.end_date} </p>
          <p className="paragraph">Total Seats : {courses.max_attendees}</p>
        </div>
        <div className="button-div">
          <button type="button" className="button">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseDetails;
