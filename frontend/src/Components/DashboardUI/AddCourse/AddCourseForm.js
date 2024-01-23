import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Button, TextField, Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { v1 as uuidv1 } from "uuid";
import axios from "axios";
import { DatePicker } from "antd";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { RangePicker } = DatePicker;

// A custom component that renders a dynamic list of text inputs
const DynamicList = ({ control, name, errors }) => {
  // Get the field array methods from the control object
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  // A function to handle adding a new item to the list
  const handleAdd = () => {
    append({ value: "" });
  };

  // A function to handle removing an item from the list
  const handleRemove = (index) => {
    remove(index);
  };

  return (
    <Box>
      {/* {console.log(uuidv1(), "Hello")} */}
      <Typography variant="h6">List of modules</Typography>
      {fields.map((field, index) => (
        <Box key={field.id} display="flex" alignItems="center" marginY={1}>
          <Controller
            name={`${name}.${index}.value`}
            control={control}
            defaultValue={field.value}
            render={({ field }) => (
              <TextField
                {...field}
                label={`Module ${index + 1}`}
                variant="outlined"
                size="small"
                fullWidth
              />
            )}
          />
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleRemove(index)}
            sx={{ marginLeft: 1 }}
          >
            Remove
          </Button>
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<></>}
        onClick={handleAdd}
      >
        Add Module
      </Button>
    </Box>
  );
};

// A custom component that renders the form
const AddCourseForm = (props) => {
  const [dates, setDates] = useState([null, null]);
  // Initialize the useForm hook
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  console.log(dates);
  // A function to handle form submission
  const onSubmit = async (data) => {
    // const courseName = data.courseName;
    console.log(data);
    if (dates === null || dates[0] === null) {
      toast.error("Please select the start and end date", {
        position: "top-center",
      });
      return;
    }
    const moduleList = data.dynamicList;
    const modules = [];
    let i = 0;
    let err = false;
    moduleList.forEach((module) => {
      if (module.value.length > 0) {
        modules.push({ m_id: i++, name: module.value });
      } else {
        console.log("empty");
        err = true;
        return;
      }
    });
    if (err === true) {
      toast.error("Hey !! You added some empty Modules .", {
        position: "top-center",
      });
      return;
    }
    data.dynamicList = modules;
    console.log(dates);
    const payload = {
      ...data,
      courseId: uuidv1(),
      startDate: dates[0],
      endDate: dates[1],
    };
    console.log(payload);
    const url = "http://localhost:5000/api/courses";
    await axios
      .post(url, payload, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (res.status === 201) {
          navigate({
            pathname: "/dashboard",
          });
        }
      })
      .catch((err) => {
        console.log("error");
      });
    props.handleAllCourses();
    reset();
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Card sx={{ maxWidth: "75%", bgcolor: "white", p: 1, width: 1 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Controller
                name="courseName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Course Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.courseName}
                    helperText={
                      errors.courseName ? "This field is required" : ""
                    }
                  />
                )}
              />
              <RangePicker
                disabledTime={"start"}
                onChange={(data, dataString) => {
                  if (data === null) {
                    return;
                  }
                  console.log(data, dataString);
                  setDates(
                    dataString.map((date) => {
                      return moment(date).format("YYYY-MM-DD");
                    })
                  );
                }}
              />
              <Box display="flex" gap={2}>
                <Controller
                  name="courseDuration"
                  control={control}
                  rules={{
                    required: true,
                    min: 1,
                    max: 1000,
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Course Duration (hours)"
                      type="number"
                      variant="outlined"
                      size="small"
                      fullWidth
                      error={!!errors.courseDuration}
                      helperText={
                        errors.courseDuration
                          ? "This field is required and must be between 1 and 1000"
                          : ""
                      }
                    />
                  )}
                />
                <Controller
                  name="courseCredits"
                  control={control}
                  rules={{
                    required: true,
                    min: 1,
                    max: 1000,
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Course Credits"
                      type="number"
                      variant="outlined"
                      size="small"
                      fullWidth
                      error={!!errors.courseCredits}
                      helperText={
                        errors.courseCredits
                          ? "This field is required and must be between 1 and 1000"
                          : ""
                      }
                    />
                  )}
                />
              </Box>
              <Controller
                name="maxAttendees"
                control={control}
                rules={{ required: true, min: 1, max: 1000 }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Maximum Attendees"
                    type="number"
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.maxAttendees}
                    helperText={
                      errors.maxAttendees
                        ? "This field is required and must be between 1 and 1000"
                        : ""
                    }
                  />
                )}
              />

              <DynamicList
                errors={errors}
                control={control}
                name="dynamicList"
              />
              <Grid container justifyContent="center">
                <Button
                  sx={{ maxWidth: "50%" }}
                  variant="contained"
                  color="success"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Box>
          </form>
        </Card>
      </Grid>
      <ToastContainer />
    </>
  );
};

export default AddCourseForm;
