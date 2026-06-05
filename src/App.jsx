import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";




function App(){
    

    return(
        <>
            <Navbar />

            <Routes>
                
                <Route path="/" element={<Home />} />

                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact/>} />

            </Routes>

            <Footer/>
        </>
    );
}

export default App;