import React from "react";

function Category() {
  return (
    // Main container
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      {/* Heading */}
      <h1 className="text-2xl font-bold text-center mb-8">
        Explore Courses
      </h1>

    
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

    
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-lg font-semibold">Free Marketing Courses</h2>
          <p className="text-gray-600 text-sm mt-1">
            Learn marketing basics and growth strategies.
          </p>
          <a
            href="https://executiveeducation.isb.edu/chief-growth-and-marketing-officer-programme"
            className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Course
          </a>
        </div>

        
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-lg font-semibold">Business Development</h2>
          <p className="text-gray-600 text-sm mt-1">
            Learn business planning and management skills.
          </p>
          <a
            href="https://rajivtalreja.co.in/rt-bsw-ga/"
            className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Course
          </a>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-lg font-semibold">Data Analysis</h2>
          <p className="text-gray-600 text-sm mt-1">
            Learn Excel and basic data analysis.
          </p>
          <a
            href="https://excelr.in/data-analyst-course/"
            className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Course
          </a>
        </div>

      
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-lg font-semibold">Finance & Money</h2>
          <p className="text-gray-600 text-sm mt-1">
            Learn saving and money management.
          </p>
          <a
            href="https://bau.edu/blog/finance-skills/"
            className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Course
          </a>
        </div>

      
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-lg font-semibold">JavaScript</h2>
          <p className="text-gray-600 text-sm mt-1">
            Learn basics of JavaScript programming.
          </p>
          <a
            href="https://www.codewithharry.com/tutorial/js"
            className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Course
          </a>
        </div>

      
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-lg font-semibold">Flutter</h2>
          <p className="text-gray-600 text-sm mt-1">
            Build mobile apps using Flutter.
          </p>
          <a
            href="https://docs.flutter.dev/get-started"
            className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Course
          </a>
        </div>

  
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-lg font-semibold">Python</h2>
          <p className="text-gray-600 text-sm mt-1">
            Learn Python programming from basics.
          </p>
          <a
            href="https://www.educative.io/courses/learn-python"
            className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Course
          </a>
        </div>

      
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-lg font-semibold">C Language</h2>
          <p className="text-gray-600 text-sm mt-1">
            Learn basic programming using C.
          </p>
          <a
            href="https://www.learn-c.org/"
            className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Course
          </a>
        </div>

      </div>
    </div>
  );
}

export default Category;