import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Social Media Section */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm mb-6">Follow our work</p>
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
              Twitter
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Projects Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Projects</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Payroll</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Social Media</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Dating App</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Company ERP</a></li>
            </ul>
          </div>

          {/* Office Location Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Office Location</h3>
            <div className="text-gray-600">
              <p>California, Richmond</p>
              <p>2nd floor</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* For Sales Inquiry Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">For Sales Inquiry</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-600">Anywhere</p>
                <p className="text-gray-600">+91 968517702</p>
              </div>
              <div>
                <p className="text-gray-600">+91 968517702</p>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-2">Others</h4>
                <p className="text-gray-600">+91 968517702</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">© Hashfinity Pvt Ltd 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
