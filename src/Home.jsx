import React, { useState } from "react";

import Category from "./Category";
import Choose from "./Choose";
import coursesData from "./coursesData";

function Home() {

  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function openCourse() {

    setMessage("");

    const selectedCourse = coursesData.find(function(course) {

      return (
        course.value === category &&
        course.type === type
      );

    });

    if (selectedCourse) {

      window.open(
        selectedCourse.link,
        "_blank"
      );

    } else {

      setMessage(
        "Paid course coming soon. Please select free type."
      );

    }
  }

  return (

    <main
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat flex flex-col items-center p-4"

      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg?semt=ais_hybrid&w=740&q=80)"
      }}
    >

      <section
        className="flex flex-col md:flex-row items-center gap-10 px-6 w-full md:px-16"
      >

        <article
          className="flex flex-col gap-4 text-center md:text-left w-full md:w-1/2"
        >

          <h1
            className="text-2xl md:text-4xl font-bold text-white"
          >
            Find Your Perfect
            <span className="text-blue-700">
              {" "} Online Course
            </span>
          </h1>

          <p
            className="text-sm md:text-lg text-white"
          >
            Learn new skills with free & premium courses and grow your career.
          </p>

          <section
            className="bg-white/20 backdrop-blur-md border-white/30 w-full max-w-md p-6 rounded-2xl shadow-xl text-center"
          >

            <h2
              className="text-lg font-bold mb-3"
            >
              Course Finder
            </h2>

            <select
              aria-label="Select course category"
              className="w-full p-2 mb-3 border rounded-md"
              onChange={handleCategoryChange}
            >

              <option value="">
                 Select Category
              </option>

              {coursesData.map(function(course) {

                return (

                  <option
                    key={course.value}
                    value={course.value}
                    
                  >
                    {course.title}
                  </option>

                );

              })}

            </select>

            <select
              aria-label="Select course type"
              className="w-full p-2 mb-3 border rounded-md"
              onChange={handleTypeChange}
            >

              <option value="">
               Select Type
              </option>

              <option value="free">
                Free
              </option>

              <option value="paid">
                Paid
              </option>

            </select>

            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md mt-2 hover:bg-blue-700"

              onClick={openCourse}
            >
              Find Course
            </button>

            {message && (

              <p
                className="mt-4 text-lg font-semibold text-red-600"
              >
                {message}
              </p>

            )}

          </section>

        </article>

        <section
          className="w-full md:w-1/2 flex justify-center"
        >

          <img
            className="w-64 md:w-96"

            alt="Student learning online programming courses"

            src="https://png.pngtree.com/png-vector/20241123/ourmid/pngtree-illustration-of-a-business-programmer-character-sitting-in-front-of-a-png-image_14542227.png"
          />

        </section>

      </section>

      <section
        className="w-full px-6 md:px-16 mt-12"
      >
        <Category />
      </section>

      <Choose />

    </main>

  );
}

export default Home;