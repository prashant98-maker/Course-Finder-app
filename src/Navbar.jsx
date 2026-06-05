import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-3">

    
      <div className="flex justify-between items-center">

        <h1 className="font-bold text-lg">
          Course Finder
        </h1>

        <button
          aria-label="Open navigation menu"
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        
        <ul className="hidden md:flex gap-6 ml-auto">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
         
          <li>
             <NavLink to="/courses">Courses</NavLink>
          </li>
         
          <li>
             <NavLink to="/about">About</NavLink>
          </li>
          
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

      </div>

    
      <ul className={`${open ? "block" : "hidden"} md:hidden mt-3 space-y-2`}>

        <li>
             <NavLink className="block px-2 py-1" to="/" onClick={() => setOpen(false)}>Home</NavLink>
        </li>

        <li>
            <NavLink className="block px-2 py-1" to="/courses" onClick={() => setOpen(false)}>Courses</NavLink>
       </li>
       
       <li>
            <NavLink className="block px-2 py-1" to="/about" onClick={() => setOpen(false)}>About</NavLink>
      </li>

      <li>
            <NavLink className="block px-2 py-1" to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

      </li>
           
      </ul>

    </nav>
  );
}

export default Navbar;