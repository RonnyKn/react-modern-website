import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/navbar/Navbar"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/Gallery/Gallery"
import Home from "./pages/home/Home"
import Plans from "./pages/plans/Plans"
import Trainers from "./pages/trainers/Trainers"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
    </BrowserRouter>
  )
}

export default App
