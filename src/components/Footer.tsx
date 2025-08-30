import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
         

          {/* Office Location Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Office Location</h3>
            <div className="text-gray-600">
              4, Roshan Apartments, Pudumjee Park, New Nana Peth,<br />
                      Pune-02
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* For Sales Inquiry Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">For Sales Inquiry</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-600">+91 8421917322</p>
              </div>
              <div>
                <p className="text-gray-600">+91 88559596432</p>
              </div>
              
            </div>
          </div>
          {/* Social Media Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Follow our work</h3>
            <ul className="space-y-3">
              <li><a href="https://www.linkedin.com/company/hashfinity-technologies" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">© Hashfinity Technologies 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
