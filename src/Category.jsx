import React from "react";

function Category(){
    return(
        <div className="flex flex-wrap" >
        <div className="bg-white rounded-2xl shadow-md p-5 m-10 hover:shadow-xl transition duration-300 border-2 border-black">


      <div className="flex items-center gap-4">

        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl text-2xl">
          
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Free Marketing Courses
          </h2>
          <p className="text-gray-500 text-sm">
            Learn digital marketing & grow your skills
          </p>
        </div>

        
       
      </div>

      
      <div className="mt-4">
        <a
          href="https://executiveeducation.isb.edu/chief-growth-and-marketing-officer-programme"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          View Course
        </a>
      </div>

    </div>
    
    </div>
        
    )
}

export default Category;