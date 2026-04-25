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

      </div>

    
      <div className={`${open ? "block" : "hidden"} md:flex gap-4 mt-3`}>

        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

      </div>

    </nav>
  );
}

export default Navbar;