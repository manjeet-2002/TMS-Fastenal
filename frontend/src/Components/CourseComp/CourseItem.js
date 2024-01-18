import "./CourseItem.css";
import Button  from "./Button";

const CourseItem = (props) => {
  console.log(props);
  return (
    <div className="courseItem__div">
      <p className="course_description">{props.course.name}</p>
      <div className="btns">
        {props.isAdmin === 1 && <Button name="edit"/>}
        {props.isAdmin === 0 && <Button name={props.course.isEnrolled === 1 ? "unenroll" : "enroll"}/>}
        <Button name="view"/>
      </div>
    </div>
  );
};

export default CourseItem;
