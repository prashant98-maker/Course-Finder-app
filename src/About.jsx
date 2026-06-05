import React from "react";

function About() {
  return (
    <main
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat p-4 md:p-8"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg?semt=ais_hybrid&w=740&q=80)",
      }}
    >

      <section className="max-w-5xl mx-auto space-y-6">

        
        <article className="bg-white rounded-xl shadow-md p-6 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-700">
            About Course Finder & Prashant Sharma
          </h1>
        </article>

        
        <article className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600">
            About Course Finder
          </h2>

          <p className="text-gray-700 text-sm md:text-base">
            Course Finder is a web development project created by me to help
            users discover useful online courses easily.
            Users can select a category and course type, then open a course
            directly through the platform.
          </p>

          <p className="text-gray-700 text-sm md:text-base mt-3">
            This project contains many learning categories like Marketing,
            Business, Data Analysis, JavaScript, React js, Python, Flutter,
            Node js, MongoDB, AI, Machine Learning, Cyber Security,
            Ethical Hacking, Git & GitHub, Video Editing and many more.
          </p>
        </article>

        
        <article className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600">
            About Me
          </h2>

          <p className="text-gray-700 text-sm md:text-base">
            Hi, I'm Prashant Sharma from Unnao district.
            I completed my graduation with B.Sc in PCM
            (Physics, Chemistry, Mathematics).
            Currently, I am pursuing ITI in Information Technology.
          </p>
        </article>

        
        <article className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600">
            My Goal
          </h2>

          <p className="text-gray-700 text-sm md:text-base">
            My goal is to build a strong career in the IT field.
            I am passionate about technology, coding and continuous learning.
            I want to improve my skills and create useful projects.
          </p>
        </article>

        
        <article className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600">
            Web Development Skills
          </h2>

          <p className="text-gray-700 text-sm md:text-base">
            I learned web development from CodeYogi Bot.
            I know HTML, CSS, JavaScript, React.js basics,
            React Router and Tailwind CSS.
            I keep improving my coding skills every day.
          </p>
        </article>

      
        <article className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600">
            My Coding Journey
          </h2>

          <p className="text-gray-700 text-sm md:text-base">
            I started coding with CodeYogi Bot.
            Slowly, I learned how to create websites,
            components, routing, responsive layouts and projects using React.
            Now I can build projects like Course Finder.
            Coding is my passion and I enjoy learning new things.
          </p>
        </article>

      </section>

    </main>
  );
}

export default About;