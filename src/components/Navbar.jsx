import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menus = [
    { name: "Home", link: "/" },
    { name: "About Us", 
      dropdown: [
      {name: "Vision , Mission & Objective",link:"/visionmissionobjective"},
      { name: "About Ghosi Community", link: "/Aboutghosi" },
      { name: "Literature", link: "/literature" },
    ], 
  },
    { name: "Our Initiatives", link: "/initiative" },
    {
      name: "Matrimonial", link: "/matrimonial"
    },
    {
      name: "Career",
      dropdown: [
        { name: "Education", link: "/careers/education" },
        { name: "Career", link: "/careers/career" },
        { name: "ScholarShip", link: "/careers/scholarship" },
      ],
    },
    { name: "News & Events", link: "/news" },
    { name: "Upcoming Events", link: "/events" },
    { name: "Prominent Ghosi", link: "/promonentghosi" },
    { name: "Gallery", link: "/gallery" },
  ];
   
  // navigate the Login Button
  const navigate = useNavigate();

  //  for login 
   const loginHandler = ()=>{
        navigate("/login");
   }
   // for Become a member
   const memberHandler=()=>{
    navigate("/becomeaMemeber");
   }


  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-gray-800"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 items-center">
          {menus.map((menu, index) => (
           <li
           key={index}
           className="relative group"
           onMouseEnter={() => setOpenDropdown(index)}
           onMouseLeave={() => setOpenDropdown(null)}
         >
           {menu.dropdown ? (
             <>
               {/* Dropdown Button */}
               <button className="text-gray-800 hover:text-blue-500 transition">
                 {menu.name}
               </button>
         
               {/* Always render dropdown, control visibility with CSS */}
               <ul
                 className={`absolute left-0 pt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-50 transition-opacity duration-300 ${
                   openDropdown === index ? "opacity-100 visible" : "opacity-0 invisible"
                 }`}
               >
                 {menu.dropdown.map((item, subIndex) => (
                   <li key={subIndex}>
                     <NavLink
                       to={item.link}
                       className={({ isActive }) =>
                         `${
                           isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                         } block mx-1 mb-1 px-3 py-2 rounded-full hover:bg-blue-200 transition-colors duration-200`
                       }
                     >
                       {item.name}
                     </NavLink>
                   </li>
                 ))}
               </ul>
             </>
           ) : (
             <NavLink
               to={menu.link}
               className={({ isActive }) =>
                 `${isActive ? "text-blue-500 font-semibold" : "text-gray-800"} hover:text-blue-500 transition`
               }
             >
               {menu.name}
             </NavLink>
           )}
         </li>
          ))}
        </ul>

        {/* Buttons (Signup/Login) */}
        <div className="hidden lg:flex space-x-4">
          {/* <button 
            onClick={loginHandler}
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Login
          </button> */}
          <button 
          onClick={memberHandler}
          className="border border-green-500 text-red-500 px-4 py-2 rounded-md hover:bg-green-300 transition font-semibold">
            Become a Member
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-gray-100">
          <ul className="flex flex-col items-start px-6 py-4 space-y-4">
            {menus.map((menu, index) => (
              <li key={index} className="w-full">
                {menu.dropdown ? (
                  <>
                    {/* Dropdown Button */}
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="w-full text-left text-gray-800 hover:text-blue-500 transition"
                    >
                      {menu.name}
                    </button>

                    {/* Dropdown List (Mobile) */}
                    {openDropdown === index && (
                      <ul className="ml-4 mt-2 border-l-2 border-gray-300 pl-4 space-y-2">
                        {menu.dropdown.map((item, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={item.link}
                              className="block text-gray-700 hover:text-blue-500 transition"
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={menu.link}
                    className="text-gray-800 hover:text-blue-500 transition"
                  >
                    {menu.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
