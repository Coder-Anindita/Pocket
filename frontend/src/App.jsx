
import { Routes,Route } from "react-router-dom"
import SignupPage from "./components/signup/SignupPage.jsx"
import LoginPage from "./components/login/LoginPage.jsx"
import Header from "./dashboard/Header.jsx"
import SideMenu from "./dashboard/SideMenu.jsx"

function App() {
  

  return (
    // <Routes>
    //   <Route path="/login" element={<LoginPage/>}></Route>
    //   <Route path="/signup" element={<SignupPage/>}></Route>

      
    // </Routes>
    //<Header/>
    <SideMenu/>
    
  )
}

export default App
