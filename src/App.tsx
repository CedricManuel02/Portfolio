import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useTheme } from './utils/Context'
import "./index.css";

function App() {
  const {isDarkMode} = useTheme();
  return (
    <div className={`${isDarkMode ? "App" : "bg-[#121212] text-[#CACACA]"} font-Kanit`}>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    <Footer/>
   </div>
  )
}

export default App
