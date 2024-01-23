import "./CourseItem.css";
import Button  from "./Button";

const CourseItem = (props) => {
  const isAdmin = localStorage.getItem("isAdmin");
  return (
    <div className="courseItem__div">
      <p className="course_description">{props.course.c_name}</p>
      <p className="course_description">{props.course.start_date}</p>
      <p className="course_description">{props.course.end_date}</p>
      <div className="btns">
        {isAdmin === "1" && <Button name="edit"/>}
        {isAdmin === "0" && <Button name={props.course.isEnrolled === 1 ? "unenroll" : "enroll"}/>}
        <Button name="view"/>
      </div>
    </div>
  );
};

export default CourseItem;
