import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./index.css";

function App() {
  return (
    <div data-theme="dark" className={`bg-[#121212] font-Kanit`}>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    <Footer/>
   </div>
  )
}

export default App
