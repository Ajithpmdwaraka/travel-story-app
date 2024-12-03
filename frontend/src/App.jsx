import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home/Home"
import SignUp from "./pages/Auth/SignUp"
import Login from "./pages/Auth/Login"


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dashboard" exact element={<Home />}/>
          <Route path="/signup" exact element={<SignUp />}/>
          <Route path="/login" exact element={<Login />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App