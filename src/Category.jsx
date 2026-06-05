import React from "react";
import coursesData from "./coursesData";

function Category() {
  return (
    
    <div className="min-h-screen bg-white/10 backdrop-blur-md border-white/30 shadow-xl py-10 px-4">

      
      <h1 className="text-2xl font-bold text-center mb-8">
        Explore Courses
      </h1>

    
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

        {coursesData.map(function(course){
          return(
               <div key={course.value} className="bg-white rounded-xl shadow overflow-hidden hover:scale-105 transition">
                <img className="w-full h-40 object-cover" alt={course.title} src={course.image} />
                <div className="p-5">
                   <h2 className="text-lg font-semibold">{course.title}</h2>
<p className="text-gray-600 text-sm mt-1">
           {course.description}
          </p>
           <a
            href={course.link}
            target="_blank"
            className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Course
          </a>
          </div>
          </div>
        );

        })}
    
         </div>
        </div>
  );
}

       export default Category;