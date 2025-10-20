// "use client";
// import Image from 'next/image';
// import { useRouter } from 'next/navigation'; 
// import { useState } from 'react';

// export default function SliderPage() {
//   const router = useRouter(); 
//   const [isHovered, setIsHovered] = useState(false);

//   const handleSetupClick = () => {
//     router.push('../service/Pages');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 mt-[64px]">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Printer <span className="text-blue-500">Education</span> Portal
//           </h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Your comprehensive resource for printer setup, troubleshooting, and optimization
//           </p>
//         </div>

//         {/* Main Content Card */}
//         <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-xl">
//           <div className="flex flex-col lg:flex-row">
//             {/* Image Section */}
//             <div className="w-full lg:w-1/2 relative">
//               <div className="aspect-w-16 aspect-h-9">
//                 <Image
//                   src="/printergirl.jpg"
//                   alt="Printer Setup Guide"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//               {/* Overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              
//               {/* Badge on image */}
//               <div className="absolute top-6 left-6 bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold">
//                 Step-by-Step Guide
//               </div>
//             </div>
            
//             {/* Text Section */}
//             <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
//               <div className="space-y-8">
//                 <div>
//                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                     How to Set Up Your <span className="text-blue-600">Printer</span>
//                   </h2>
//                   <div className="w-20 h-1 bg-blue-600 mb-6"></div>
//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     Get comprehensive, step-by-step guidance on how to properly set up, configure, 
//                     and register your printer for optimal performance. Our educational resources 
//                     make the process simple and straightforward.
//                   </p>
//                 </div>
                
//                 <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
//                   <h3 className="font-semibold text-blue-800 mb-2">What You'll Learn:</h3>
//                   <ul className="text-gray-700 space-y-2">
//                     <li className="flex items-start">
//                       <span className="text-blue-500 mr-2">•</span>
//                       Hardware connection and installation
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-blue-500 mr-2">•</span>
//                       Software and driver configuration
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-blue-500 mr-2">•</span>
//                       Network and wireless setup
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-blue-500 mr-2">•</span>
//                       Troubleshooting common issues
//                     </li>
//                   </ul>
//                 </div>
                
//                 <button 
//                   className={`bg-blue-600 text-white py-4 px-10 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2
//                     ${isHovered ? 'bg-blue-700 transform -translate-y-1 shadow-lg' : 'shadow-md'}`}
//                   onClick={handleSetupClick}
//                   onMouseEnter={() => setIsHovered(true)}
//                   onMouseLeave={() => setIsHovered(false)}
//                 >
//                   <span>Begin Printer Setup</span>
//                   <svg 
//                     className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24" 
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                   </svg>
//                 </button>
                
//                 <p className="text-gray-500 text-sm">
//                   Average setup time: 10-15 minutes • Difficulty: Beginner
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional Resources Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
//           <div className="bg-gray-800 p-6 rounded-xl text-center">
//             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
//               </svg>
//             </div>
//             <h3 className="text-white font-semibold mb-2">Documentation</h3>
//             <p className="text-gray-400">Detailed manuals and specifications</p>
//           </div>
          
//           <div className="bg-gray-800 p-6 rounded-xl text-center">
//             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
//               </svg>
//             </div>
//             <h3 className="text-white font-semibold mb-2">Troubleshooting</h3>
//             <p className="text-gray-400">Solve common printer issues</p>
//           </div>
          
//           <div className="bg-gray-800 p-6 rounded-xl text-center">
//             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//               </svg>
//             </div>
//             <h3 className="text-white font-semibold mb-2">Maintenance</h3>
//             <p className="text-gray-400">Keep your printer in perfect condition</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// app/page.tsx or pages/index.js




// 'use client';

// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// export default function SliderPage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-[530px] bg-gray-50">
//       <div className="relative w-[1340px] h-[400px] overflow-hidden rounded-3xl shadow-2xl group">
//         <Image
//           src="/banner.avif"
//           alt="Contact HP Banner"
//           width={1340}
//           height={400}
//           style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
//           className="rounded-3xl transition-transform duration-700 group-hover:scale-105"
//           priority
//           quality={100}
//         />
        
//         <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-[1px]"></div>
        
//         <div className="absolute inset-0 flex items-center">
//           <div className="ml-20 text-gray-800 max-w-2xl">
//             <h1 className={`text-6xl font-black mb-6 leading-tight transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//               Contact HP
//             </h1>
//             <p className={`text-2xl font-semibold mb-2 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//               How may we help you?
//             </p>
//             <p className={`text-xl font-medium mb-8 transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//               Contact Us Through Live Chat
//             </p>
            
//             <div className={`flex gap-6 transition-all duration-700 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/30 text-lg">
//                 Start Live Chat
//               </button>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import JivoChat,{openLiveChat} from '../JivoChat';


// export default function SliderPage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-[530px] bg-gray-50">
//       <div className="relative w-[1340px] h-[400px] overflow-hidden rounded-3xl shadow-2xl group">
//         <Image
//           src="/banner.avif"
//           alt="Contact HP Banner"
//           width={1340}
//           height={400}
//           style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
//           className="rounded-3xl transition-transform duration-700 group-hover:scale-105"
//           priority
//           quality={100}
//         />
        
//         <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-[1px]"></div>
        
//         <div className="absolute inset-0 flex items-center">
//           <div className="ml-20 text-gray-800 max-w-2xl">
//             <h1
//               className={`text-6xl font-black mb-6 leading-tight transition-all duration-700 transform ${
//                 isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//               }`}
//             >
//               Contact HP
//             </h1>

//             <p
//               className={`text-2xl font-semibold mb-2 transition-all duration-700 delay-200 transform ${
//                 isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//               }`}
//             >
//               How may we help you?
//             </p>

//             <p
//               className={`text-xl font-medium mb-8 transition-all duration-700 delay-400 transform ${
//                 isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//               }`}
//             >
//               Contact Us Through Live Chat
//             </p>

//             <div
//               className={`flex gap-6 transition-all duration-700 delay-600 transform ${
//                 isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//               }`}
//             >
//               {/* ✅ Live Chat Button */}
//               <button
//                 onClick={openLiveChat}
//                 className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/30 text-lg"
//               >
//                 Start Live Chat
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Load JivoChat script */}
//      <JivoChat/>
//     </div>
//   );
// }




"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'; 
import { useState, useEffect } from 'react';

export default function Troubleshoot() {
  const router = useRouter(); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSetupClick = () => {
    // router.push('../service/Pages'); // Ensure the path is correct
  };

  return (
    <div className="bg-white min-h-[500px] flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl w-full relative z-10 gap-12 lg:gap-20">
        {/* Left: Enhanced Devices Section */}
        <div className={`flex flex-col items-center gap-8 lg:w-1/2 transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}>
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
            {/* Image Container */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border border-gray-100 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
              <Image
                src="/dignose.webp"
                alt="Printer"
                width={539}
                height={347}
                className="object-contain w-full max-w-[320px] lg:max-w-none filter drop-shadow-lg"
              />
            </div>
          </div>
          
          {/* Enhanced Button */}
          <button 
            className="relative bg-gradient-to-r from-[#007DBD] via-blue-600 to-cyan-600 text-white py-4 px-12 rounded-2xl text-lg font-bold hover:from-cyan-600 hover:via-blue-600 hover:to-[#007DBD] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg group w-full sm:w-auto overflow-hidden border border-blue-300/30"
            onClick={handleSetupClick}
          >
            <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
              <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Click Here For Printer Setup
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Right: Enhanced Text Section */}
        <div className={`lg:w-1/2 text-center lg:text-left transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}>
          {/* Main Heading */}
          <div className="mb-8">
            <p className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
              Diagnose and solve
            </p>
            
            {/* Subheading with Icon */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-3 rounded-2xl border border-blue-100">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-200"></div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  Contact Support – Chat Live
                </h1>
              </div>
            </div>
          </div>

          {/* Enhanced Paragraphs */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-blue-50/50 p-6 rounded-2xl border border-blue-100 shadow-lg backdrop-blur-sm">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                In this support hub, you'll find quick access to live assistance for Printer Setup
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-cyan-50/50 p-6 rounded-2xl border border-cyan-100 shadow-lg backdrop-blur-sm">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                Click Here For <span className="font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">Printer</span>  <span className="font-black text-cyan-600 bg-cyan-50 px-2 py-1 rounded-lg">Setup</span> 
                <br className="hidden lg:block"/>
                Then start a live chat with a support agent.
              </p>
            </div>
          </div>

        
          
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};