import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const AddCourseForm = () => {
  const [courseName, setCourseName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [maxAttendees, setMaxAttendees] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as sending to a database
    console.log({ courseName, startDate, endDate, maxAttendees });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        maxWidth: 400,
        margin: "auto",
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Create a Course
      </Typography>
      <TextField
        label="Course Name"
        variant="outlined"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        required
      />
      <TextField
        label="Start Date"
        type="date"
        variant="outlined"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <TextField
        label="End Date"
        type="date"
        variant="outlined"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <TextField
        label="Maximum Attendees"
        type="number"
        variant="outlined"
        value={maxAttendees}
        onChange={(e) => setMaxAttendees(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default AddCourseForm;

