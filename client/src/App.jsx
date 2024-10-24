import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Signup from "./pages/Signup"
import Header from "./components/Header"
import PrivateRoute from "./components/privateRoute"

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sign-in" element={<Signin/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/sign-up" element={<Signup/>}></Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}></Route>
          </Route>
           
        </Routes>
    </BrowserRouter>
  )
}

export default App
