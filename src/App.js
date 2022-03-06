
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import InstituteCard from './Components/InstituteCard';
import HomePage from './Components/HomePage';
import DisplayUser from './Pages/DisplayUser';
import EditUser from './Pages/EditUser';
import AddUser from './Pages/AddUser';
import ErrorPage from './Pages/ErrorPage';
import AddAcademy from './Pages/AddAcademy';
import {render} from "react-dom";

import EditCourse from './Pages/EditCourse';
// import AddCourse from './Pages/AddCourse';
import ViewCourse from './Pages/ViewCourse';




import{BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import AddCourse from './Pages/AddCourse';


function App() {
  return (
    <div>
      {/* <Footer /> */}
      {/* <Header /> */}
      {/* <InstituteCard />  */}
       {/* <HomePage /> */}
      {/* <EditUser /> */}
      {/* <DisplayUser /> */}
      {/* <AddUser /> */}
      {/* render( */}
       
      {/* ); */}

        {/* <AddAcademy/> */}
        {/* <ViewCourse /> */}
        {/* <AddCourse /> */}
        {/* <EditCourse/> */}
        {/* <ViewCours/> */}
      
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}>

          
          </Route>
          <Route path="admin/DisplayUser" element={<DisplayUser />} > 
           </Route>

           <Route path="admin/addAcademy" element={<AddAcademy />} > 
           </Route>
           <Route path="admin/ViewCourse" element={<ViewCourse />} > 
           </Route>
           <Route path="admin/AddUser" element={<AddUser />} > 
           </Route>
           
            <Route path="admin/AddCourses" element={<AddCourse/>} >
            {/* <Route path="/adduser" element={<AddUser/>} ></Route> */}
            
            </Route>
            <Route path="admin/EditCourses" element={<EditCourse />} > 
           </Route>
           <Route path="admin/EditUser" element={<EditUser />} > 
           </Route>

           
           
            <Route path = "*" element = {<ErrorPage/>}></Route>
           
          
        </Routes>
        <Footer />
        </Router>
     
 
   
    </div>
  );
}

export default App;
