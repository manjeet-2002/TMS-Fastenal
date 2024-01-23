import React, { useEffect, useState } from "react";
import { List, Checkbox, ListItem } from "@mui/material";
import axios from "axios";

const Attendance = (props) => {
  console.log(props.attendees);
  const attendeeList = props.attendees;

  const markAttendance = async () => {
    await axios
      .put(
        `http://localhost:5000/api/courses/${props.c_id}/attendance`,
        attendeeList
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const { name } = e.target;
    attendeeList[name].attended ^= 1;
  };

  return (
    <div>
      <List>
        {props.attendees.map((attendee, index) => (
          <ListItem>
            {attendee.attended === 0 && (
              <Checkbox name={index} onChange={handleChange} />
            )}
            <p>{attendee.u_name}</p>
          </ListItem>
        ))}
      </List>
      <button onClick={markAttendance}>Mark Attendance</button>
    </div>
  );
};

export default Attendance;
