import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CourseCards from '../components/CourseCards'
import AllCourse from '../components/AllCourse'



const HomePage = () => {
  return (
    <>
    <Hero />
    {/* <CourseCards  num={3} /> */}
    <CourseCards  isHome ={true} />
    <AllCourse />
    </>
  )
}

export default HomePage