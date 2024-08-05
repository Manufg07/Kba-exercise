import React, { useEffect, useState } from 'react'
import banner from '../assets/banner-kba.png'
import { Link, Navigate, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { getUserType } from '../pages/LoginPage';
import "../App.css";

const CoursePage = () => {

  const navigate = useNavigate();

  // const [course, setCourse] =useState([null])
  // const [loading, setLoading] =useState(true)
  // const {id} =useParams()

  // useEffect(() => {
  //   const fetchCourse = async(res,req) =>{
  //     try{
  //       const res = await fetch(`http://localhost:5000/courses/${id}`)
  //       const data = await res.json();
        
  //       console.log('course', data)
  //       setCourse(data);
      
  //     }catch(error){
  //       console.log('error',error)
  //     }finally{
  //       setLoading(false)
  //     }
  //   };
  //   fetchCourse()
  // }, [])
 
  const course = useLoaderData();
  const {id} = useParams();
  const userType = getUserType()

  const deleteCourse = async () => {
    const confirm = window.confirm('Sure want to delete ?')
    if(!confirm) return;
    const res = await fetch(`/api/courses/${id}`, 
      {method:'DELETE'}
    )
    toast.success('Deleted')
    navigate('/course')
  }

  return (
    <>
      {/* {loading ? <h1>Loading.....</h1>:  */}
      <div class="course-container">
        <div class="course-content">
          <section>
            <a class="back-link" href="/">
              Back to Courses
            </a>
          </section>

          <div class="course-card">
            <img src={banner} alt="Course Thumbnail" class="course-banner" />
            <div class="course-details">
              <div class="course-header">
                <h1 class="course-title">{course.title}</h1>
                <div class="course-actions">
                  <span class="course-price">{course.price}</span>
                  <button class="add-to-cart">Add to Cart</button>
                </div>
              </div>
              <div class="course-section">
                <h2 class="section-heading">Description</h2>
                <p>{course.description}</p>
              </div>

              <div class="course-section">
                <h2 class="section-heading">Prerequisites</h2>
                <ul class="list">
                  <li>Basic understanding of blockchain technology</li>
                  <li>Familiarity with programming languages</li>
                  <li>Internet access</li>
                </ul>
              </div>

              <div class="course-section">
                <h2 class="section-heading">Features</h2>
                <ul class="list">
                  <li>40 hours of content</li>
                  <li>Certificate of completion</li>
                  <li>Access to community forums</li>
                  <li>Downloadable resources</li>
                  <li>24/7 support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="admin-actions">
          {userType == "admin" && (
            <>
              <Link to={`/Edit/${id}`} class="edit-button">
                Edit Course
              </Link>
              <button onClick={() => deleteCourse(id)} class="remove-button">
                Remove Course
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const courseLoader = async({params}) =>{
    const res = await fetch(`/api/courses/${params.id}`)
    const data = await res.json();
    
    console.log('course', data)
    return data;

};

// export default CoursePage
export {CoursePage as default, courseLoader}