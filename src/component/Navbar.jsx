// import React from 'react'
// import { Mail } from "lucide-react";

// const Navbar = () => {
//   return (
//     <>
     
// <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//       <img src="https://www.bridgegroupsolutions.com/images/logo.png" className="h-8" alt="Flowbite Logo" />
//       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bridge Group Solutions</span>
//     </a>
//     <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//     <div className="flex flex-col gap-1">
//   <div className="flex gap-2 items-center">
//     <Mail className="w-6 h-6 text-blue-500" />
//     <a className="font-bold">Email :</a>
//   <h1 className="text-gray-700">
//   contactus@bridgegroupsolutions.com</h1>
//   </div>
// </div>
// {/*   

//       <h1 className="text-blaxk focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Email <br/>contactus@bridgegroupsolutions.com </h1> */}
      
//       <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
//         </svg>
//       </button>
//     </div>
//   </div>
// </nav>
//     <div className="bg-black fixed w-full z-20 top-20 start-0 border-b border-gray-700">
//   <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
//       <li>
//         <a href="#" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-blue-400" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">About</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">Outsourcing</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">Careers</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">Gallery</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">Contact Us</a>
//       </li>
//     </ul>
//   </div>
// </div>



//     </>
//   )
// }

// export default Navbar


import React, { useState } from "react";
import { Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white fixed w-full z-30 top-0 start-0 border-b border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <img
              src="https://www.bridgegroupsolutions.com/images/logo.png"
              className="h-8"
              alt="Bridge Group Solutions Logo"
            />
            <span className="text-2xl font-semibold text-black">
              Bridge Group Solutions
            </span>
          </a>

          {/* Email Section */}
          <div className="hidden md:flex items-center space-x-2">
            <Mail className="w-5 h-5 text-blue-500" />
            <span className="font-bold text-black">Email:</span>
            <h1 className="text-black-300">contactus@bridgegroupsolutions.com</h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Bottom Navbar (Links)
      <div className={`bg-black fixed w-full z-20 top-16 start-0 border-b border-gray-700 ${isOpen ? "block" : "hidden"} md:block`}>
        <div className=" items-center justify-start w-full md:flex md:w-auto" id="navbar-sticky">
          <ul className="flex items-center flex-col md:flex-row p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-black md:space-x-8  md:border-0 md:bg-black">
          <li>       
          <a href="#" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-blue-400" aria-current="page">Home</a>
       </li>
       <li>
        <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">About</a>
       </li>
       <li>
         <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">Outsourcing</a>
       </li>
       <li>
         <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">Careers</a>
       </li>
       <li>
         <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">Gallery</a>
       </li>
       <li>
         <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">Contact Us</a>
       </li>
          </ul>
        </div>
      </div> */}

 
    </>
  );
};

export default Navbar;
