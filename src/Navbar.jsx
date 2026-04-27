import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-3">

    
      <div className="flex justify-between items-center">

        <h1 className="font-bold text-lg">
          Course Finder
        </h1>

        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        
        <div className="hidden md:flex gap-6 ml-auto">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>

    
      <div className={`${open ? "block" : "hidden"} md:hidden mt-3 space-y-2`}>

    
        <Link className="block px-2 py-1" to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link className="block px-2 py-1" to="/courses" onClick={() => setOpen(false)}>Courses</Link>
        <Link className="block px-2 py-1" to="/contact" onClick={() => setOpen(false)}>Contact</Link>

      </div>

    </nav>
  );
}

export default Navbar;