import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import "../App.css";
// import courses from '../courses.json'

// const CourseCards = ({num}) => {
//   const course = courses.slice(0, num) //use this method also

  const CourseCards = ({isHome = false}) => {

  const [courses, setCourses] =useState([])
  const [loading, setLoading] =useState(true)

  useEffect(() => {
    const fetchCourses = async(res,req) =>{
      try{
        const res = await fetch('/api/courses')
        const data = await res.json();
        
        console.log('course', data)
        setCourses(data);
      
      }catch(error){
        console.log('error',error)
      }finally{
        setLoading(false)
      }
    };
    fetchCourses()
  }, [])
 
  const courseList = isHome ? courses.slice(0, 3):courses;
 
  console.log(courses)
  
  return (
    <>
      <div class="text-center">
        <h2 class="section-heading">{isHome ? "Top Courses" : "All Course"}</h2>
      </div>

      {loading ? (
        <h1>loading</h1>
      ) : (
        <div class="course-grid">
          {courseList.map((course) => (
            <Cards key={course.courseId} course={course} />
          ))}
        </div>
      )}
    </>
  );
}

export default CourseCards