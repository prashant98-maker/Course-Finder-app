import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat bg-gradient-to-r from-blue-500 to-cyan-400 p-4 md:p-8"
    style={{backgroundImage:"url(https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg?semt=ais_hybrid&w=740&q=80)"}}
        s>

    
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">

    
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 text-center">
          <h1 className="text-xl md:text-3xl font-bold">
            About Me
          </h1>
        </div>

        
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Hi, I'm Prashant
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            My name is Prashant, and I'm from Unnao district. I have completed my graduation
            with a B.Sc in PCM (Physics, Chemistry, Mathematics). Currently, I am pursuing ITI
            in Information Technology.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            My Goal
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            I'm passionate about learning and growing in technology. My goal is to build a
            strong career in the IT field.
          </p>
        </div>

    
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Web Development Skills
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            I learned web development from Code Yogi Bot. I know HTML, CSS, JavaScript and I
            am improving every day.
          </p>
        </div>

        
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            My Coding Journey
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            I started coding with CodeYogi Bot. Now I can build simple websites. Coding is my passion.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;