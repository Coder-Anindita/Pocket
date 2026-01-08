
import { Routes,Route } from "react-router-dom"
import SignupPage from "./components/signup/SignupPage.jsx"
import LoginPage from "./components/login/LoginPage.jsx"
import Header from "./dashboard/Header.jsx"
import SideMenu from "./dashboard/SideMenu.jsx"
import DashboardPage from "./dashboard/DashboardPage.jsx"
import IncomePage from "./income/IncomePage.jsx"

function App() {
  

  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/signup" element={<SignupPage/>}></Route>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/income" element={<IncomePage/>}/>

      
    </Routes>
    //<Header/>
    //<SideMenu/>
    //<DashboardPage/>
    
  )
}

export default App
