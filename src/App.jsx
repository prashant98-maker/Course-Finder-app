import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Category from "./Category";
import Choose from "./Choose";

function App(){
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [message, setMessage] = useState("");

    function handleCategoryChange(event){
        setCategory(event.target.value);
    }

    function handleTypeChange(event){
        setType(event.target.value);
    }

    function openCourse(){
        setMessage("");

        if(category === "Marketing" && type === "free"){
            window.location.href = "https://executiveeducation.isb.edu/chief-growth-and-marketing-officer-programme";
            return;
        }

        if(category === "Business" && type === "free"){
            window.location.href ="https://rajivtalreja.co.in/rt-bsw-ga/";
            return;
        }

        if(category === "dataAnalysis" && type === "free"){
            window.location.href ="https://excelr.in/data-analyst-course/";
            return;
        }

        if(category === "financeMoney" && type === "free"){
            window.location.href ="https://bau.edu/blog/finance-skills/";
            return;
        }

        if(category === "javaScriptTutorial" && type === "free"){
            window.location.href ="https://www.codewithharry.com/tutorial/js";
            return;
        }

        if(category === "Flutter" && type === "free"){
            window.location.href ="https://docs.flutter.dev/get-started";
            return;
        }

        if(category === "Python" && type === "free"){
            window.location.href ="https://www.educative.io/courses/learn-python";
            return;
        }

        if(category === "cLanguage" && type === "free"){
            window.location.href ="https://www.learn-c.org/";
            return;
        }

        setMessage("No Course available. Please select type free.");
    }

    return(
        <>
            <Navbar />

            <Routes>
                
                <Route path="/" element={
                    
    
                    <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat flex flex-col items-center p-4"
                     style={{backgroundImage:"url(https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg?semt=ais_hybrid&w=740&q=80)"}}
                    >
                     <div className="flex flex-col md:flex-row items-center gap-10 px-6 w-full md:px-16">
                     <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-1/2 ">
                    <h1 className="text-2xl md:text-4xl font-bold text-white">Find Your Perfect <span className="text-blue-900">Course</span></h1>
                    <p className=" text-sm md:text-lg text-white">Learn new skills with free & premium courses and grow your career.</p>
                        <div className="bg-white/20 backdrop-blur-md border-white/30 w-full max-w-md p-6 rounded-2xl shadow-xl text-center">

                            <h2 className="text-lg font-bold mb-3">
                                Course Finder
                            </h2>
 
                            <select className="w-full p-2 mb-3 border rounded-md" onChange={handleCategoryChange}>
                                <option>Category</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Business">Business</option>
                                <option value="dataAnalysis">Data Analysis</option>
                                <option value="financeMoney">Finance & Money Skill</option>
                                <option value="javaScriptTutorial">JavaScript Tutorial</option>
                                <option value="Flutter">Flutter</option>
                                <option value="Python">Python</option>
                                <option value="cLanguage">C Language</option>
                            </select>

                            <select className="w-full p-2 mb-3 border rounded-md" onChange={handleTypeChange}>
                                <option>Type</option>
                                <option value="free">free</option>
                                <option value="Paid">Paid</option>
                            </select>

                            <button
                                className="w-full bg-blue-600 text-white py-2 rounded-md mt-2 hover:bg-blue-700"
                                onClick={openCourse}
                            >
                                Find Course
                            </button>

                            {message && (
                                <p className="mt-4 text-lg font-semibold text-red-600">
                                    {message}
                                </p>
                            )}

                        </div>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center">
                        <img className="w-64 md:w-96" alt="student" src="https://png.pngtree.com/png-vector/20241123/ourmid/pngtree-illustration-of-a-business-programmer-character-sitting-in-front-of-a-png-image_14542227.png"/>
                       </div>

                       </div>
                        <div className="w-full px-6 md:px-16 mt-12">
                            <Category />
                        </div>
                       < Choose />    
                    </div>
                } />

                <Route path="/courses" element={<Courses />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact/>} />

            </Routes>

            <Footer/>
        </>
    );
}

export default App;