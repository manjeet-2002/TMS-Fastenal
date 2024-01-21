import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Button, TextField, Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

// A custom component that renders a dynamic list of text inputs
const DynamicList = ({ control, name }) => {
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
            <Typography variant="h6">List of modules</Typography>
            {fields.map((field, index) => (
                <Box
                    key={field.id}
                    display="flex"
                    alignItems="center"
                    marginY={1}
                >
                    <Controller
                        name={`${name}.${index}.value`}
                        control={control}
                        defaultValue={field.value}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label={`Item ${index + 1}`}
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

// A custom component that renders a date input
const DateInput = ({ control, name, label }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    type="date"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            )}
        />
    );
};

// A custom component that renders the form
const AddCourseForm = () => {
    // Initialize the useForm hook
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    // A function to handle form submission
    const onSubmit = (data) => {
        console.log(data);
        // Reset the form after submission
        reset();
    };

    return (
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
                                        errors.courseName
                                            ? "This field is required"
                                            : ""
                                    }
                                />
                            )}
                        />
                        <Box display="flex" gap={2}>
                            <DateInput
                                control={control}
                                name="startDate"
                                label="Start Date"
                                rules={{ required: true }}
                            />
                            <DateInput
                                control={control}
                                name="endDate"
                                label="End Date"
                                rules={{ required: true }}
                            />
                        </Box>
                        <Controller
                            name="maxAttendees"
                            control={control}
                            rules={{ required: true, min: 1, max: 100 }}
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
                                            ? "This field is required and must be between 1 and 100"
                                            : ""
                                    }
                                />
                            )}
                        />

                        <DynamicList control={control} name="dynamicList" />
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
    );
};

export default AddCourseForm;
