
import { Routes,Route } from "react-router-dom"
import SignupPage from "./components/signup/SignupPage.jsx"
import LoginPage from "./components/login/LoginPage.jsx"
import Header from "./dashboard/Header.jsx"
import SideMenu from "./dashboard/SideMenu.jsx"
import DashboardPage from "./dashboard/DashboardPage.jsx"
import IncomePage from "./income/IncomePage.jsx"
import ExpensePage from "./expense/ExpensePage.jsx"
import Page404 from "./404page/Page404.jsx"
import ProtectedRoute from "./ProtectedRoute.jsx"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/signup" element={<SignupPage/>}></Route>
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
      <Route path="/income" element={<ProtectedRoute><IncomePage/></ProtectedRoute>}/>
      <Route path="/expense" element={<ProtectedRoute><ExpensePage/></ProtectedRoute>}/>
      <Route path="/*" element={<Page404/>}/>

      
    </Routes>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnHover
          theme="colored"
      />
    </>
    
    
    
  )
}

export default App
