import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../App.css'

const AddCourse = () => {

  const [title, setTitle] = useState('');
  const [courseId, setCourseId] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate()

  const submitForm = (e) =>{
    e.preventDefault()
    const newCourse = {
      title,
      courseId,
      type,
      description,
      price
    }
   const res= AddCourseSubmit(newCourse)
   toast.success('Course added successfully')
   navigate('/course')
  }
  
  const AddCourseSubmit = async(newCourse) => {
    const res = await fetch('/api/courses',{
      method : 'POST',
      headers:{
        'Content-Type' : "application/json",
      },
      body:JSON.stringify(newCourse)
    })
    return res;
  }

  return (
    <>
      {/* <!-- form - adding new course --> */}

      <section className="section-bg">
        <div className="container">
          <div className="form-wrapper">
            <form onSubmit={submitForm}>
              <h2 className="form-title">Add Course</h2>

              <div className="form-group">
                <label className="form-label" for="title">
                  Course Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-input"
                  placeholder="eg. Certified Blockchain Associate"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" for="courseId">
                  Course Id
                </label>
                <input
                  type="text"
                  id="courseId"
                  name="courseId"
                  className="form-input"
                  placeholder="eg. 1"
                  required
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" for="type">
                  Course Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="form-input"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Self-Paced">Self-Paced</option>
                  <option value="Instructor-Led">Instructor-Led</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" for="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-input"
                  rows="4"
                  placeholder="Small description on the course"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group">
                <label className="form-label" for="price">
                  Price
                </label>
                <select
                  id="price"
                  name="price"
                  className="form-input"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="Rs.5000">Rs.5000</option>
                  <option value="Rs.3500">Rs.3500</option>
                  <option value="Rs.15000">Rs.15000</option>
                </select>
              </div>

              <div>
                <button className="form-button" type="submit">
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddCourse