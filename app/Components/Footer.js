import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-100 py-12 relative overflow-hidden mt-[90px]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#1C8DCEED]"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-teal-800 opacity-20"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-teal-800 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Company branding at top left */}
        <div className="mb-8 pb-4 border-b border-teal-700">
          <Link href="/" className="inline-block">
            <h2 className="text-[36px] font-bold text-white">
              <span className="text-white">Micro</span> 
              <span className="text-white"> Hub </span>
              <span className="text-white">Care</span>
            </h2>
            <p className="text-[#1C8DCEED] text-sm mt-1">Premium Technical Solutions</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">⚡</span> Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-200 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-200 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-teal-200 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-200 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Contact
                </Link>
              </li>
              {/* <li>
                <Link href="/membership" className="hover:text-teal-200 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Membership
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">🔒</span> Customer Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/disclaimer" className="hover:text-teal-200 transition-colors duration-300 flex items-center">
                  <span className="mr-2">•</span> Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-teal-200 transition-colors duration-300 flex items-center">
                  <span className="mr-2">•</span> Privacy Policy
                </Link>
              </li>
              {/* <li>
                <Link href="/return-refundpolicy" className="hover:text-teal-200 transition-colors duration-300 flex items-center">
                  <span className="mr-2">•</span> Return & Refund Policy
                </Link>
              </li> */}
              <li>
                <Link href="/term" className="hover:text-teal-200 transition-colors duration-300 flex items-center">
                  <span className="mr-2">•</span> Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Get in Touch */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">📞</span> Get in Touch
            </h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="mr-2">📞</span> +(1) 888-291-3869
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span> Los Angeles, California United States
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <a
                  href="mailto:support@print-hubsolution.com"
                  className="hover:text-teal-200 transition-colors duration-300"
                >
                  support@print-hubsolution.com
                </a>
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1C8DCEED] flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                <span className="text-white">ƒ</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1C8DCEED] flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                <span className="text-white">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1C8DCEED] flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                <span className="text-white">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1C8DCEED] flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
                <span className="text-white">ɪɢ</span>
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">📰</span> Newsletter
            </h3>
            <p className="mb-4">Free Delivery on your first order!</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-[#33468A9A] bg-white bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-black"
                required
              />
              <button
                type="submit"
                className="w-full text-[#1C8DCEED] bg-[#C9CDCF] py-3 rounded-md  font-medium flex items-center justify-center"
              >
                Subscribe Now
                <span className="ml-2">→</span>
              </button>
            </form>
            <p className="text-sm text-white mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="text-center pt-8 border-t border-[#1C8DCEED]">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Print Hub Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;