import React from "react";

function Choose(){
    return(
        
        <div className="mt-12 text-center">

  <h2 className="text-2xl font-bold mb-6">
    Why Choose Us?
  </h2>

  <div className="  grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">Quality Content</h3>
      <p className="text-sm text-gray-600">
        We provide high quality content for free and premium courses.
      </p>
    </div>

    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">Easy to Learn</h3>
      <p className="text-sm text-gray-600">
      Our courses are beginner friendly and easy to understand.
      </p>
    </div>

    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">Career Growth</h3>
      <p className="text-sm text-gray-600">
        Learn skills that help you grow your career.
      </p>
    </div>

  </div>

</div>
    
    )
}

export default Choose;