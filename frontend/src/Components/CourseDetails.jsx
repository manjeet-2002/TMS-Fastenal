import React, { useState } from 'react';
const CourseDetails = () => {
 const [course, setCourse] = useState({
   title: 'React Fundamentals',
   description: 'Learn the basics of React and build interactive user interfaces.',
  //  instructor: 'John Doe',
   duration: '4 weeks',
   image: 'logo192.png', // Replace with the actual URL of your image
 });
 const handleEnroll = () => {
   // Add your enrollment logic here
   alert(`Enrolled in ${course.title}`);
 };
 const styles = {
   container: {
     maxWidth: '800px',
     margin: '50px auto',
     padding: '20px',
     backgroundColor: '#fff',
     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
     textAlign: 'center',
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
   },
   heading: {
     color: '#333',
   },
   paragraph: {
     color: '#666',
     marginBottom: '10px',
   },
   button: {
     backgroundColor: '#4CAF50',
     color: 'white',
     padding: '10px 15px',
     border: 'none',
     borderRadius: '5px',
     cursor: 'pointer',
   },
   image: {
     maxWidth: '100%',
     height: 'auto',
     marginBottom: '20px',
   },
 };
 return (
<div style={styles.container}>
<img src={course.image} alt={course.title} style={styles.image} />
<h1 style={styles.heading}>{course.title}</h1>
<p style={styles.paragraph}>{course.description}</p>
{/* <p style={styles.paragraph}>Instructor: {course.instructor}</p> */}
<p style={styles.paragraph}>Duration: {course.duration}</p>
<form>
<button type="button" style={styles.button} onClick={handleEnroll}>
         Enroll in Course
</button>
</form>
</div>
 );
};
export default CourseDetails;