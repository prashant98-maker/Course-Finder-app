import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Home";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import Category from "./Category";

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
                    
    
                    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-cyan-400 flex flex-col items-center p-4">

                    
                        <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg text-center">

                            <h1 className="text-xl md:text-2xl font-bold mb-4">
                                Course Finder
                            </h1>

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

    
                        <div className="w-full mt-10">
                            <Category />
                        </div>

                    </div>
                } />

                <Route path="/courses" element={<Courses />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact/>} />

            </Routes>

            <Footer/>
        </>
    );
}

export default App;