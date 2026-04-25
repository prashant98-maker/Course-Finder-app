import React from "react";

function Courses() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold text-center mb-6">
         Courses List
      </h1>

      <div className="space-y-4 max-w-md mx-auto">

      
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Marketing Basics</h2>
          <p className="text-sm text-gray-600">
            Learn how marketing works, branding and customer growth strategies.
          </p>
        </div>

        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Business Development</h2>
          <p className="text-sm text-gray-600">
            Understand business growth, planning and management skills.
          </p>
        </div>

      
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Data Analysis</h2>
          <p className="text-sm text-gray-600">
            Learn data handling, Excel and basic analytics concepts.
          </p>
        </div>

        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Finance & Money Skills</h2>
          <p className="text-sm text-gray-600">
            Learn personal finance, saving habits and money management basics.
          </p>
        </div>

      
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">JavaScript Tutorial</h2>
          <p className="text-sm text-gray-600">
            Learn programming logic, DOM and JavaScript fundamentals.
          </p>
        </div>


        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Flutter Development</h2>
          <p className="text-sm text-gray-600">
            Build mobile applications for Android and iOS platforms.
          </p>
        </div>

      
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Python Programming</h2>
          <p className="text-sm text-gray-600">
            Learn Python from basics to problem solving.
          </p>
        </div>

      
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">C Language</h2>
          <p className="text-sm text-gray-600">
            Learn fundamentals of programming and logic building.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Courses;