// "use client";
// import { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-100 fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-[87%] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="text-2xl font-bold text-black">
//              Print Hub Solutions
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           {/* <div className="hidden lg:flex lg:items-center lg:space-x-8">
//             <Link
//               href="/"
//               className="text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium hover:border border-[#1C8DCEED]"
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="hover:border border-[#1C8DCEED] text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium"
//             >
//               About
//             </Link>
//             <Link
//               href="/service"
//               className="hover:border border-[#1C8DCEED] text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium"
//             >
//               Service
//             </Link>
//             <Link
//               href="/product"
//               className="hover:border border-[#1C8DCEED] text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium"
//             >
//               Product
//             </Link>
//             <Link
//               href="/contact"
//               className="hover:border border-[#1C8DCEED] text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium"
//             >
//               Contact
//             </Link>
//             <Link
//               href="/membership"
//               className="hover:border border-[#1C8DCEED] text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium"
//             >
//               Membership
//             </Link>
//           </div> */}

//           {/* Mobile menu button */}
//           <div className="flex items-center lg:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-500"
//               aria-controls="mobile-menu"
//               aria-expanded={isMobileMenuOpen}
//               onClick={toggleMobileMenu}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//               <svg
//                 className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {/* <div
//         className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`}
//         id="mobile-menu"
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link
//             href="/"
//             className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             About
//           </Link>
//           <Link
//             href="/service"
//             className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Service
//           </Link>
//           <Link
//             href="/product"
//             className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Product
//           </Link>
//           <Link
//             href="/contact"
//             className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Contact
//           </Link>
//           <Link
//             href="/membership"
//             className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Membership
//           </Link>
//         </div>
//       </div> */}
//     </nav>
//   );
// };

// export default Navbar;



"use client";
import { useState } from "react";
import Image from "next/image";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1360px] mx-auto px-4 py-4 flex items-center justify-between">
      {/* Left - Logo & Navigation */}
      <div className="flex items-center space-x-8">
        <Image
          src="/hpslogo.png"
          alt="HP Logo"
          width={80}
          height={80}
          className="hover:scale-105 transition-transform"
        />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-12 text-[#767676] font-semibold text-base text-[20px]">
          <Link href="/" className="hover:text-black transition-colors duration-200">
            Explore
          </Link>
          <Link href="/" className="hover:text-black transition-colors duration-200">
            Shop
          </Link>
          <Link href="/" className="hover:text-black transition-colors duration-200">
            Support
          </Link>
        </div>
      </div>

      {/* Right - Search, Cart & Sign in */}
      <div className="hidden lg:flex items-center space-x-6">
        <div className="flex items-center w-80 border-2 border-gray-200 rounded-full px-4 py-2 hover:border-blue-500 transition-colors duration-200">
          <input
            type="text"
            placeholder="Search HP Support"
            className="w-full outline-none text-gray-700 bg-transparent text-sm"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </div>

        <FaShoppingCart className="text-gray-700 text-xl hover:text-blue-600 cursor-pointer transition-colors duration-200" />

        <button className="bg-black text-white  hover:scale-105 px-8 py-2 font-semibold rounded-full transition-colors duration-200 shadow-md"
 >
          Sign in
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700 focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-6 space-y-6 md:hidden">
          <Link href="/" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
            Explore
          </Link>
          <Link href="/" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
            Shop
          </Link>
          <Link href="/" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
            Support
          </Link>

          <div className="flex items-center w-72 border-2 border-gray-200 rounded-full px-4 py-2 hover:border-blue-500 transition-colors duration-200">
            <input
              type="text"
              placeholder="Search HP Support"
              className="w-full outline-none text-gray-700 bg-transparent text-sm"
            />
            <FaSearch className="text-gray-500 ml-2" />
          </div>

          <FaShoppingCart className="text-gray-700 text-2xl hover:text-blue-600 cursor-pointer transition-colors duration-200" />

          <button className="bg-gradient-to-r from-[#59c7b5] via-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent hover:bg-blue-700 text-white px-8 py-2 font-semibold rounded-full transition-colors duration-200 shadow-md">
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
}
