import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#ffffff] shadow-2xl">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-around py-4">
        {/* Logo Section */}

        {/* Hamburger Menu (Mobile View) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-gray-800"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 items-center">
          {["Home", "About Us", "History","Matrimonial", "Career", "News & Events","Gallery"].map(
            (menu, index) => (
              <li key={index}>
                <NavLink
                  to={
                    menu === "Home"
                      ? "/"
                      : `/${menu.toLowerCase().replace(/\s+/g, "")}`
                  }
                  onClick={() => setOpen(false)} // Close mobile menu on click
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-blue-500" : "text-gray-700"
                    } block py-2 hover:text-blue-500 transition-colors duration-200 text-lg`
                  }
                >
                  {menu}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Buttons (Signup/Login) */}
        <div className="hidden lg:flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Signup
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Login
          </button>
          <button className="border border-green-500 text-red-500 px-4 py-2 rounded-md hover:bg-green-300 transition font-semibold">
            Become a Member
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-gray-100">
          <ul className="flex flex-col items-start px-6 py-4 space-y-4">
            {["Home", "About Us", "Matrimonial", "Career", "Events"].map(
              (menu, index) => (
                <li key={index}>
                  <NavLink
                    to={
                      menu === "Home"
                        ? "/"
                        : `/${menu.toLowerCase().replace(/\s+/g, "")}`
                    }
                    onClick={() => setOpen(false)} // Close mobile menu on click
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-blue-500" : "text-gray-700"
                      } block py-2 hover:text-blue-500 transition-colors duration-200 text-lg`
                    }
                  >
                    {menu}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className="flex flex-col px-6 py-4 space-y-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Signup
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition">
              Login
            </button>
            <button className="border border-green-500 text-red-500 px-4 py-2 rounded-md hover:bg-green-300 transition font-semibold">
            Become a Member
          </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
