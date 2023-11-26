import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/signin"
import Signup from "./pages/Signup"
import About from "./pages/about"
import Profile from "./pages/profile"
import Header from "./components/Header"
export default function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  )
}
