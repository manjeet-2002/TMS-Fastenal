import React from 'react'
import AddCourseForm from './AddCourse/AddCourseForm'


function Home(props) {
  return (
    <main className='main-container'>
        {props.showForm > 0 && <AddCourseForm/>}
    </main>
  )
}

export default Home