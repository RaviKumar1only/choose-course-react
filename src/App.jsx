import './App.css'
import Courses from './components/Courses'
import { useState } from 'react';
import data from './Data';

function App() {

  const [courses, setCourses] = useState(data);

  function removeCourse(id) {
    let newCourses = courses.filter(course => course.id !== id )
    setCourses(newCourses)
  }

  if(courses.length == 0)
  {
    return (
      <div className='min-h-screen bg-gray-200 w-screen flex justify-center items-center flex-col gap-5'>
        
        <p className='text-3xl'> No Course Left</p>
        <button onClick={() => { setCourses(data) }} className='cursor-pointer rounded-lg p-2 px-6 bg-gray-400 text-blue-950'>Refresh</button>

      </div>
    )
  }

  return (
    <>
      <div className='h-auto bg-gray-200 p-5 w-screen overflow-x-hidden'>
        <Courses courses={courses} removeCourse={removeCourse}/>
      </div>
    </>
  )
}

export default App