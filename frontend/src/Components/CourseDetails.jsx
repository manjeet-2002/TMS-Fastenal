import React, { useState } from 'react';
import './CourseDetails.css';
const CourseDetails = () => {
 const [course, setCourse] = useState({
   title: 'React Fundamentals',
   description:
     'Learn the basics of React and build interactive user interfaces. If you want to learn fundamentals of React, just enroll in this course.',
   // instructor: 'John Doe',
   duration: '20 hours',
   start_date: '12-08-2024',
   end_date: '12-09-2024',
   Max_No_of_Attendees: '100',
   image: 'logo192.png', // Replace with the actual URL of your image
 });
 const handleEnroll = () => {
   // Add your enrollment logic here
   alert(`Enrolled in ${course.title}`);
 };
 const styles = {
   overlay: {
     position: 'fixed',
     top: 0,
     left: 0,
     width: '100%',
     height: '100%',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     backdropFilter: 'blur(5px)', // Blur effect for the background
   },
   container: {
     maxWidth: '70vh',
     padding: '20px',
     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
     boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
     textAlign: 'center',
     borderRadius: '15px',
   },
   heading: {
     color: '#333',
   },
   paragraph: {
     color: '#666',
     marginBottom: '10px',
   },
   image: {
     maxWidth: '100%',
     height: 'auto',
     marginBottom: '20px',
     borderRadius: '10px',
   },
   button: {
     backgroundColor: 'white',
     color: 'black',
     padding: '10px 15px',
     border: 'none',
     textAlign:'center',
     justifyContent:'center',
    //  borderRadius: '5px',
     cursor: 'pointer',
     transition: 'background-color 0.3s ease', // Smooth transition for hover effect
   },
   buttonHover: {
     backgroundColor: '#45a049', // Darker color on hover
   },
 };
 return (
<div style={styles.overlay}>
<div style={styles.container}>
<img src={course.image} alt={course.title} style={styles.image} />
<h1 style={styles.heading}>{course.title}</h1>
<p style={styles.paragraph}>{course.description}</p>
       {/* <p style={styles.paragraph}>Instructor: {course.instructor}</p> */}
<p style={styles.paragraph}>Duration: {course.duration}</p>
<p style={styles.paragraph}>Start Date: {course.start_date} </p>
<p style={styles.paragraph}>End Date: {course.end_date} </p>
<p style={styles.paragraph}>Max No. of Attendees: {course.Max_No_of_Attendees} </p>
<form>
<button
           type="button"
           style={styles.button}
           onClick={handleEnroll}
           onMouseOver={(e) => (e.target.style = styles.buttonHover)}
           onMouseOut={(e) => (e.target.style = styles.button)}
>
           Enroll
</button>
</form>
</div>
</div>
 );
};
export default CourseDetails;