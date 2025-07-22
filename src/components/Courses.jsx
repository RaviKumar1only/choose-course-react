import React from 'react'
import Course from './Course';

function Courses({courses, removeCourse}) {
  return (
    <div className='min-h-screen bg-gray-200'>
      <div className='w-screen h-auto flex flex-wrap gap-5 justify-center overflow-x-hidden'>
          {
            courses.map((course) => {
                  return <Course {...course} removeCourse={removeCourse}/>
            }) 
          }
      </div>
    </div>
  )
}

export default Courses