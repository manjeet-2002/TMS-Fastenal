import React, { useEffect, useState } from "react";
import { List, Checkbox, ListItem } from "@mui/material";
import axios from "axios";
import "./attendance.css";

const Attendance = (props) => {
  console.log(props.attendees);
  const attendeeList = props.attendees;
  const [loading, setLoading] = useState("");

  const markAttendance = async () => {
    setLoading("Please wait...");
    await axios
      .put(
        `http://localhost:5000/api/courses/${props.c_id}/attendance`,
        attendeeList
      )
      .then((res) => {
        if (res.status === 200) setLoading("Attendance Marked");
        else setLoading("Failed, Try again");
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const { name } = e.target;
    attendeeList[name].attended ^= 1;
  };

  return (
    <div className="attendance">
      <h5 className="att-title">Attendees</h5>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {props.attendees.length === 0 && <p>No Enrollments</p>}

        {props.attendees.map((attendee, index) => (
          <ListItem>
            {attendee.attended === 0 ? (
              <Checkbox name={index} onChange={handleChange} />
            ) : (
              <span className="emoji">✅</span>
            )}
            <p>{attendee.u_name}</p>
          </ListItem>
        ))}
      </List>
      {props.attendees.length !== 0 && (
        <button onClick={markAttendance}>Mark Attendance</button>
      )}
      <p>{loading}</p>
    </div>
  );
};

export default Attendance;
