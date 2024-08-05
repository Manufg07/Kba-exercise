import React, { useState } from 'react'
import rp from '../assets/rp.png'
import { Link } from 'react-router-dom';
import "../App.css";
const Cards = ({course}) => {

  const [showFullDescription, setShowFullDescription] = useState() 

  let description = course.description;
  
  if(!showFullDescription){
    description = description.substring(0,200)+ "..."
  }

  const toggleText = () =>{
    setShowFullDescription (!showFullDescription)
  }

  // const [a,b] = useState

  return (
    <>
      <div className="course-card">
        <h2 className="course-title">{course.title}</h2>
        <img src={rp} alt="course thumbnail" className="course-image" />
        <p className="course-description">{description}</p>
        <button onClick={toggleText} className="toggle-description">
          {showFullDescription ? "less" : "more"}
        </button>
        <Link
          to={`/CoursePage/${course.courseId}`}
          className="learn-more-button"
        >
          Learn More
        </Link>
      </div>
    </>
  );
}
export default Cards