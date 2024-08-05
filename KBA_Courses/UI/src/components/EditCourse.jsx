// import React from 'react'


// const EditCourse = () => {
//   return (
//     <>
//     <section class="bg-white mb-20">
//   <div class="container m-auto max-w-2xl py-2">
//     <div class="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
//       <form>
//         <h2 class="text-3xl text-purple-800 text-center font-semibold mb-6">
//           Update Course
//         </h2>

//         <div class="mb-4">
//           <label class="block text-gray-700 font-bold mb-2">
//             Course Name
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             class="border rounded w-full py-2 px-3 mb-2"
//             placeholder="eg. Certified Blockchain Associate"
//             required
  
//           />
//         </div>



//         <div class="mb-4">
//           <label
//             htmlFor="type"
//             class="block text-gray-700 font-bold mb-2"
//           >
//             Course Type
//           </label>
//           <select
//             id="type"
//             name="type"
//             class="border rounded w-full py-2 px-3"
//             required
      
//           >
//             <option value="Self-Paced">Self-Paced</option>
//             <option value="Instructor-Led">Instructor-Led</option>
//             <option value="Hybrid">Hybrid</option>
//           </select>
//         </div>

//         <div class="mb-4">
//           <label
//             htmlFor="description"
//             class="block text-gray-700 font-bold mb-2"
//           >
//             Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             class="border rounded w-full py-2 px-3"
//             rows="4"
//             placeholder="add a short course description"
        
//           ></textarea>
//         </div>

//         <div class="mb-4">
//           <label
//             htmlFor="type"
//             class="block text-gray-700 font-bold mb-2"
//           >
//             Price
//           </label>
//           <select
//             id="price"
//             name="price"
//             class="border rounded w-full py-2 px-3"
//             required
         
//           >
//             <option value="Rs.5000">Rs.5000</option>
//             <option value="Rs.3500">Rs.3500</option>
//             <option value="Rs.15000">Rs.15000</option>
//           </select>
//         </div>

//         <div>
//           <button
//             class="bg-purple-500 hover:bg-purple-600 my-10 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Update Course
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </section>
//     </>
//   )
// }

// export default EditCourse

import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import "../App.css";

const EditCourse = () => {

  const course = useLoaderData()
  console.log('course',course)
  const [title, setTitle] = useState(course.title);
  const [courseId, setCourseId] = useState(course.courseId);
  const [type, setType] = useState(course.type);
  const [description, setDescription] = useState(course.description);
  const [price, setPrice] = useState(course.price);

  const navigate = useNavigate()

  const submitForm = (e) =>{
    e.preventDefault()
    const updatedCourse = {
      title,
      courseId,
      type,
      description,
      price
    }
   const res= updateCourseSubmit(updatedCourse)
   navigate(`/coursePage/${courseId}`)
  }
  
  const updateCourseSubmit = async(updatedCourse) => {
    const res = await fetch(`/api/courses/${courseId}`,{
      method : 'PUT',
      headers:{
        'Content-Type' : "application/json",
      },
      body:JSON.stringify(updatedCourse)
    })
    return res;
  }

  return (
    <>
      {/* <!-- form - adding new course --> */}

      <section class="update-course-section">
        <div class="update-course-container">
          <div class="update-course-card">
            <form onSubmit={submitForm}>
              <h2 class="update-course-heading">Update Course</h2>

              <div class="form-group">
                <label class="form-label">Course Name</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  class="form-input"
                  placeholder="eg. Certified Blockchain Associate"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div class="form-group">
                <label htmlFor="type" class="form-label">
                  Course Type
                </label>
                <select
                  id="type"
                  name="type"
                  class="form-select"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Self-Paced">Self-Paced</option>
                  <option value="Instructor-Led">Instructor-Led</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div class="form-group">
                <label htmlFor="description" class="form-label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  class="form-textarea"
                  rows="4"
                  placeholder="Small description on the course"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div class="form-group">
                <label htmlFor="type" class="form-label">
                  Price
                </label>
                <select
                  id="price"
                  name="price"
                  class="form-select"
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
                <button class="submit-button" type="submit">
                  Update Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditCourse