import React, { useEffect, useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
const Attendance = (props) => {
  console.log(props.attendees);
  const attendeeList = props.attendees;

  const markAttendance = () => {
    console.log(attendeeList);
  };

  const handleChange = (e) => {
    const { name } = e.target;
    attendeeList[name].attended ^= 1;
  };

  return (
    <div>
      {props.attendees.map((attendee, index) => (
        <FormGroup>
          <FormControlLabel
            key={index}
            name={index}
            control={
              <Checkbox
                defaultChecked={attendee.attended}
                onChange={handleChange}
              />
            }
            label={attendee.u_name}
          />
        </FormGroup>
      ))}
      <button onClick={markAttendance}>Mark Attendance</button>
    </div>
  );
};

export default Attendance;
