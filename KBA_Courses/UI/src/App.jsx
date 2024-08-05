import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import CoursesPage from "./pages/CoursesPage"
import MainLayout from "./Layout/MainLayout"
import Contact from "./components/Contact"
import AddCourse from "./components/AddCourse"
import EditCourse from "./components/EditCourse"
import CoursePage, { courseLoader } from "./components/CoursePage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import AauthLayout from "./Layout/AauthLayout"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

      <Route path="/" element={<AauthLayout/>}>
          <Route index element ={<LoginPage/>}/>
          <Route path="/sign-up" element ={<SignupPage/>}/>
      </Route>
      

      <Route path="/" element={<MainLayout/>}>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/Course" element={<CoursesPage/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Add" element={<AddCourse/>} />
          <Route path="/Edit/:id" element={<EditCourse/>} loader={courseLoader}/>
          <Route path="/CoursePage/:id" element={<CoursePage/>} loader={courseLoader} />
          <Route path="/*" element={<NotFoundPage/>} />
      </Route>
      </>
    )
  )

  return (
    <>

        <RouterProvider router={router}/>

    </>
  )
}

export default App
