import "./CourseItem.css";
import MyBtn from "./Button";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CourseDetails from "../CourseDetails";

//Modal Style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const CourseItem = (props) => {
  const isAdmin = localStorage.getItem("isAdmin");
  console.log(props);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      className="courseItem__div"
      style={{
        backgroundColor: props.course.isEnrolled
          ? "rgba(0, 178, 0, 0.5)"
          : "white",
      }}
    >
      <p className="course_description para1">{props.course.c_name}</p>
      <p className="course_description">
        Start Date :{props.course.start_date}
      </p>
      <p className="course_description">End Date:{props.course.end_date}</p>
      <div className="btns">
        {isAdmin === "1" && <MyBtn name="edit" />}
        <Button onClick={handleOpen}>View</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CourseDetails c_id={props.course.c_id} />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CourseItem;
